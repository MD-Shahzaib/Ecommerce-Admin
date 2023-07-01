import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const BackBtn = ({ onClick, position, top, right, bottom, left, imgWidth, imgHeight }) => {
    return (
        <TouchableOpacity
            onPress={() => onClick()}
            style={{
                position: 'absolute',
                top: 10,
                left: 10,
                zIndex: 15,
            }}
        >
            <Image
                style={{
                    width: 50,
                    height: 50,
                    objectFit: 'fill',
                }}
                source={require("../assets/back.png")}
            />
        </TouchableOpacity>
    )
}

export default BackBtn;