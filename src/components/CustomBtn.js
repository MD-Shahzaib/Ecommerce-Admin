import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBtn = ({ title, width, height, backgroundColor, borderRadius, elevation, color, fontSize, fontWeight }) => {
    return (
        <TouchableOpacity style={{
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            elevation: elevation
        }}>
            <Text style={{
                color: color,
                fontSize: fontSize,
                fontWeight: fontWeight,
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomBtn;