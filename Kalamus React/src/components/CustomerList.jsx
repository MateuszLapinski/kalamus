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