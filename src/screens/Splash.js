import React, { useEffect } from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
// UTILITIES.
import { BTN_PRIMARY, TEXT_LIGHT, THEME_COLOR } from '../utilities/Color';
// COMPONENTS.
import CustomBtn from '../components/CustomBtn';

const Splash = ({ navigation }) => {

    // Splash Effect.
    useEffect(() => { setTimeout(() => navigation.navigate("login"), 3000) }, []);

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={THEME_COLOR} barStyle={'light-content'} />
            <Image style={styles.AppLogo} source={require("../assets/appLogo.png")} />
            <Text style={styles.Logo}>MS-STORE</Text>
            <Text style={styles.status}>(Admin)</Text>
            <CustomBtn
                onClick={() => navigation.navigate("login")}
                title={"Get Started"}
                borderRadius={10}
                bgColor={BTN_PRIMARY}
                elevation={3}
                mt={30}
                py={10}
                px={50}
                textWidth={110}
                fontColor={TEXT_LIGHT}
                fontSize={20}
                fontWeight={"700"}
                textCenter={"center"}
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
        // backgroundColor: "#53c3f7",
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
});