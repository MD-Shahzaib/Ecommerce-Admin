import React, { useEffect } from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// UTILITIES.
import { BTN_PRIMARY, TEXT_LIGHT, THEME_COLOR } from '../utilities/Color';
import CustomBtn from '../components/CustomBtn';

const Splash = ({ navigation }) => {

    // Splash Effect.
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Signup");
        }, 3000)
    }, [])

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={THEME_COLOR} barStyle={'light-content'} />
            <Image style={styles.AppLogo} source={require("../assets/appLogo.png")} />
            <Text style={styles.Logo}>MS-STORE</Text>
            <Text style={styles.status}>(Admin)</Text>
            <TouchableOpacity
                style={styles.StartBtn}
                onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.BtnText}>Get Started</Text>
            </TouchableOpacity>
            <CustomBtn
                title={"Get Started"}
            // width={ }
            // height={ }
            // backgroundColor={ }
            // borderRadius={ }
            // elevation={ }
            // color={ }
            // fontSize={ }
            // fontWeight={ }
            />
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
        fontStyle: 'italic',
        color: TEXT_LIGHT,
        fontWeight: '700',
        width: "50%",
        textAlign: 'center',
    },
    status: {
        fontSize: 15,
        color: TEXT_LIGHT,
        width: "50%",
        fontWeight: '700',
        textAlign: 'center',
    },
    StartBtn: {
        backgroundColor: BTN_PRIMARY,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginTop: 30,
        elevation: 3
    },
    BtnText: {
        fontSize: 20,
        fontWeight: '700',
        width: 110,
        textAlign: 'center',
        color: TEXT_LIGHT,
    }
});