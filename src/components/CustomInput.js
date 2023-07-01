import React from 'react'
import { View, TextInput } from 'react-native'

const CustomInput = ({ placeholder, type, width, height, bgColor, borderRadius, borderWidth, alignSelf, borderColor, elevation, fontColor, fontSize, fontWeight, my, mx, mt, mb, mr, ml, py, px, pt, pb, pr, pl }) => {
    return (
        <View
            style={{
                width: width,
                height: height,
                borderWidth: borderWidth,
                borderRadius: borderRadius,
                borderColor: borderColor,
                alignSelf: alignSelf,
                backgroundColor: bgColor,
                elevation: elevation,
                marginVertical: my,
                marginHorizontal: mx,
                marginTop: mt,
                marginRight: mr,
                marginBottom: mb,
                marginLeft: ml,
                paddingVertical: py,
                paddingHorizontal: px,
                paddingTop: pt,
                paddingRight: pr,
                paddingBottom: pb,
                paddingLeft: pl,
            }}
        >
            <TextInput
                style={{ color: fontColor, fontSize: fontSize, fontWeight: fontWeight }}
                placeholder={placeholder}
                keyboardType={type ? type : 'default'}
            />
        </View>
    )
}

export default CustomInput;