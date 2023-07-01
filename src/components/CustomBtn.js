import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBtn = ({ onClick, title, textWidth, width, height, bgColor, borderRadius, elevation, fontColor, fontSize, fontWeight, my, mx, mt, mb, mr, ml, py, px, pt, pb, pr, pl, textBgColor, textCenter, alignSelf }) => {
    return (
        <TouchableOpacity
            onPress={() => onClick()}
            style={{
                width: width,
                height: height,
                alignSelf: alignSelf,
                backgroundColor: bgColor,
                borderRadius: borderRadius,
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
            }}>
            <Text style={{
                color: fontColor,
                fontSize: fontSize,
                fontWeight: fontWeight,
                width: textWidth,
                backgroundColor: textBgColor,
                textAlign: textCenter
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomBtn;