import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
// UTILITIES.
import { FONT_COLOR, THEME_COLOR } from '../utilities/Color';

const Splash = ({ navigation }) => {

    // Splash Effect.
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Signup")
        }, 3000)
    }, [])

    return (
        <View style={styles.Container}>
            <Image style={styles.AppLogo} source={require("../assets/appLogo.png")} />
            <Text style={styles.Logo}>MS-Store</Text>
            <Text style={styles.status}>(Admin)</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
    },
    AppLogo: {
        width: Dimensions.get('screen').width - 20,
        height: Dimensions.get('screen').height - 500,
    },
    Logo: {
        fontSize: 30,
        color: FONT_COLOR,
        fontWeight: '700',
        width: "50%",
        textAlign: 'center',
    },
    status: {
        fontSize: 15,
        color: FONT_COLOR,
        width: "50%",
        fontWeight: '700',
        textAlign: 'center',
    }
})