import React from 'react';
import { Container } from 'react-bootstrap';
import { orders } from './orderMock';
import { OrderCard } from '../../components/order-card';

const OrderContainer = () => {
    return (
        <Container>
            {
                orders && orders.map(order => <OrderCard key={order.id} order={order}/>)
            }
        </Container>
    )
};

export default OrderContainer;