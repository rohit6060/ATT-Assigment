import React from 'react';
import { Image } from 'react-bootstrap';
import { List, ListItem } from './DeliverStatusStyles';
import { OrderedIcon, DeliveryIcon, HomeIcon } from './icons';

const statusList = ['ordered', 'shipped', 'delivered'];
const COLOR = '#1c1c80';
const DEFAULT_COLOR = '#888';

const DeliveryStatus = ({ status = ''}) => {
    return (
        <List className="list-inline">
            <ListItem className={status === 'ordered' || status === 'shipped' || status === 'delivered' ? 'active': ''}>
                <OrderedIcon fill={status === 'ordered' || status === 'shipped' || status === 'delivered' ? COLOR: DEFAULT_COLOR} />
            </ListItem>
            <ListItem className={status === 'shipped' || status === 'delivered' ? 'active': ''}>
                <DeliveryIcon fill={status === 'shipped' || status === 'delivered' ? COLOR: DEFAULT_COLOR} />
            </ListItem>
            <ListItem className={status === 'delivered' ? 'active': ''}>
                <HomeIcon fill={status === 'delivered' ? COLOR: DEFAULT_COLOR} />
            </ListItem>
        </List>
    );
}

export default DeliveryStatus;