<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import { ListGroup } from 'react-bootstrap';
export default function CustomerList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/customer/all`, {
            method: 'GET',
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    console.log('Something went wrong');
                    return [];
                }
            })
            .then(data => {
                const filteredData = data.map(customer => ({
                    id: customer.id,
                    name: customer.name,
                    email: customer.email,
                }));
                setCustomers(filteredData);
            })
            .catch(error => {
                console.log("Something went wrong", error);
            });
    }, []);





=======
import React from 'react';
import { ListGroup } from 'react-bootstrap';
export default function CustomerList() {
    const customers = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 4, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 5, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 6, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 7, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 8, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 9, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 10, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 11, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 12, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 13, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 14, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 15, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 16, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 17, name: 'Bob Johnson', email: 'bob@example.com' }
    ];
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
    return (
        <div className="customer-list-container">
            <h3 className="customer-list-header">List of Clients</h3>
        <ListGroup className="customer-list">
            {customers.map(customer => (
                <ListGroup.Item key={customer.id} className="customer-item">
                    <div className="customer-name">{customer.name}</div>
                    <div className="customer-email">{customer.email}</div>
                </ListGroup.Item>
            ))}
            </ListGroup>
        </div>
    );
}
