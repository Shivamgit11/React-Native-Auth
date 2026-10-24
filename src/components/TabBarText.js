import React from 'react';
import { Text} from 'react-native-rapi-ui';

const TabBarText = (props) => {
    return (
        <Text style={{marginBottom: 5}}>{props.title}</Text>
    )
}

export default TabBarText;