import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
// UTILITIES.
import { TEXT_PRIMARY } from '../utilities/Color';
// COMPONENTS.
import CustomInput from '../components/CustomInput';

const Signup = () => {
    return (
        <View style={styles.Container}>
            <Image style={styles.Banner} source={require("../assets/banner.png")} />
            <View style={styles.Card}>
                <Text style={styles.Title}>SignUp</Text>
                <CustomInput placeholder={"Name"} />
                <CustomInput placeholder={"Email"} type={"email-address"} />
                <CustomInput placeholder={"Password"} />
                <CustomInput placeholder={"Phone No"} type={"phone-pad"} />
            </View>
        </View>
    )
}

export default Signup;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center'
    },
    Banner: {
        width: "100%",
        height: "30%",
        objectFit: 'fill'
    },
    Card: {
        width: "95%",
        height: "100%",
        backgroundColor: 'white',
        position: 'absolute',
        top: "25%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        elevation: 5,
    },
    Title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: TEXT_PRIMARY,
        alignSelf: 'center',
        width: '30%',
        textAlign: 'center',
        marginTop: 10,
    }
});