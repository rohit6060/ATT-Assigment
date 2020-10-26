import React from 'react';
import { Row, Col, Carousel, Image } from 'react-bootstrap';
import { CardWrapper, DeliveryWrapper } from './OrderCardStyle';
import { DeliveryStatus } from '../delivery-status';
import * as moment from 'moment';

const OrderCard = ({ order }) => {
    return (
        <CardWrapper>
            <Row>
                <Col xs={12} md={4}>
                    <Carousel slide={false}>
                    {
                        order.items.map(item => (
                            <Carousel.Item key={order.id + '_item_' + item.id}>
                                <Image
                                className="d-block w-100"
                                src={item.image}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{item.name}</h3>
                                    <p>{item.plan}</p>
                                    { item.skuAttributes ? (
                                        <p>{item.skuAttributes.color} {item.skuAttributes.size}</p>
                                    ): null }
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                    </Carousel>
                </Col>
                <Col xs={12} md={8}>
                    <DeliveryStatus status={order.status} />
                    <DeliveryWrapper>
                        <p>
                            <strong>Expected Deliver Date: </strong>
                            <span>
                                {moment(order.shipments.estimatedDeliveryDate).format('YYYY-MM-DD')}
                            </span>
                        </p>
                        <p>
                            <strong>Address: </strong>
                            <span>
                                {`${order.shipingAddress.street}, ${order.shipingAddress.city}, ${order.shipingAddress.state} - ${order.shipingAddress.zip}`}
                            </span>
                        </p>
                    </DeliveryWrapper>
                </Col>
            </Row>
        </CardWrapper>
    );
}

export default OrderCard;