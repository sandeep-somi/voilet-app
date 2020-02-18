import React from 'react';
import { StatusBar, view } from 'react-native';

export default function (props) {

    return (
        <View>
            {props.children}
        </View>
    )
}