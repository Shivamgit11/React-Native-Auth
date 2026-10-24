import React from 'react';
import {Ionicons} from '@expo/vector-icons';

const TabBarIcon = (props) => {
    return (
        <Ionicons name={props.icon} size={24} color={props.color} />
    )
}

export default TabBarIcon;