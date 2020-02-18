import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default function({ buttonStyle, textStyle, title, onPress }) {
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <View>
                <Text style={textStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}