import React, { useState } from 'react';
import './OrderPage.module.css'
import { useNavigate } from 'react-router-dom';

interface OrderedItem {
    productId: string;
    name: string;
    quantity: number;
    price: number;
    productImage: string;
}

const OrderPage: React.FC = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        customer: {
            first_name: '',
            last_name: '',
            email: '',
        },
        orderedItems: [] as OrderedItem[],
        shippingData: {
            street: '',
            houseNumber: '',
            zipCode: '',
            city: '',
            country: '',
        },
    });

    const handleInputChange = (
        section: 'customer' | 'orderedItems' | 'shippingData',
        field: string,
        value: string | number
    ) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value,
            },
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const localOrderedItems = JSON.parse(localStorage.getItem('products') || '[]');

        try {
            setFormData((prevData) => ({
                ...prevData,
                orderedItems: localOrderedItems,
            }));

            const response = await fetch('http://127.0.0.1:8000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customer: formData.customer,
                    orderedItems: localOrderedItems,
                    shippingData: formData.shippingData,
                }),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Order created:', responseData);
                localStorage.removeItem('products');

                setFormData({
                    customer: {
                        first_name: '',
                        last_name: '',
                        email: '',
                    },
                    orderedItems: [] as OrderedItem[],
                    shippingData: {
                        street: '',
                        houseNumber: '',
                        zipCode: '',
                        city: '',
                        country: '',
                    },
                });
                navigate('/')
            } else {
                console.error('Error creating order:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div className="order-page">
            <h1>Order Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Customer Information</h2>
                    <div>
                        <label htmlFor="first_name">First Name:</label>
                        <input
                            type="text"
                            id="first_name"
                            value={formData.customer.first_name}
                            onChange={(e) => handleInputChange('customer', 'first_name', e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name">Last Name:</label>
                        <input
                            type="text"
                            id="last_name"
                            value={formData.customer.last_name}
                            onChange={(e) => handleInputChange('customer', 'last_name', e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.customer.email}
                            onChange={(e) => handleInputChange('customer', 'email', e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div>
                    <h2>Shipping Information</h2>
                    <div>
                        <label htmlFor="street">Street:</label>
                        <input
                            type="text"
                            id="street"
                            value={formData.shippingData.street}
                            onChange={(e) => handleInputChange('shippingData', 'street', e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="houseNumber">House Number:</label>
                        <input
                            type="text"
                            id="houseNumber"
                            value={formData.shippingData.houseNumber}
                            onChange={(e) => handleInputChange('shippingData', 'houseNumber', e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input
                            type="text"
                            id="zipCode"
                            value={formData.shippingData.zipCode}
                            onChange={(e) => handleInputChange('shippingData', 'zipCode', e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            id="city"
                            value={formData.shippingData.city}
                            onChange={(e) => handleInputChange('shippingData', 'city', e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="country">Country:</label>
                        <input
                            type="text"
                            id="country"
                            value={formData.shippingData.country}
                            onChange={(e) => handleInputChange('shippingData', 'country', e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div>
                    <h2>Ordered Items</h2>
                    {formData.orderedItems.map((item, index) => (
                        <div key={index}>
                            <span>{item.name}</span>
                            <span>{item.quantity}</span>
                        </div>
                    ))}
                </div>

                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default OrderPage;
