import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// FIREBASE.
import auth from '@react-native-firebase/auth';
// UTILITIES.
import { BG_LIGHT, BTN_PRIMARY, TEXT_LIGHT, TEXT_PRIMARY } from '../utilities/Color';
// COMPONENTS.
import CustomInput from '../components/CustomInput';
import CustomBtn from '../components/CustomBtn';
import BackBtn from '../components/BackBtn';
import Loader from '../components/Loader';

const Login = () => {

    // Navigation.
    const navigation = useNavigation();

    // States.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating a loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleSignIn = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User signed in successfully
                const user = userCredential.user;
                console.log('User signed in:', user);
            })
            .catch((error) => {
                // An error occurred during sign in
                console.log('Sign in error:', error);
                Alert.alert('Sign In Error', error.message);
            });
    };


    if (isLoading) {
        return <Loader />;
    }


    return (
        <View style={styles.Container}>
            <BackBtn onClick={() => navigation.goBack()} />
            <Image style={styles.Banner} source={require("../assets/banner.png")} />
            <View style={styles.Card}>
                <Text style={styles.Title}>Login</Text>
                <CustomInput
                    value={email}
                    onchangeText={(text) => { setEmail(text) }}
                    placeholder={"Email"}
                    type={"email-address"}
                    width={Dimensions.get('window').width - 50}
                    height={50}
                    borderRadius={10}
                    borderWidth={2}
                    borderColor={TEXT_PRIMARY}
                    alignSelf={'center'}
                    mt={15}
                    px={10}
                    fontColor={TEXT_PRIMARY}
                    fontWeight={"700"}
                />
                <CustomInput
                    value={password}
                    onchangeText={(text) => { setPassword(text) }}
                    placeholder={"Password"}
                    width={Dimensions.get('window').width - 50}
                    height={50}
                    borderRadius={10}
                    borderWidth={2}
                    borderColor={TEXT_PRIMARY}
                    alignSelf={'center'}
                    mt={15}
                    px={10}
                    fontColor={TEXT_PRIMARY}
                    fontWeight={"700"}
                />
                <CustomBtn
                    title={"Login"}
                    onClick={handleSignIn}
                    width={Dimensions.get('window').width - 50}
                    borderRadius={10}
                    bgColor={BTN_PRIMARY}
                    elevation={3}
                    mt={15}
                    py={10}
                    alignSelf={'center'}
                    fontColor={TEXT_LIGHT}
                    fontSize={22}
                    fontWeight={"700"}
                    textCenter={"center"}
                />
                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                    <Text style={styles.accountText}>Don't have an account? Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center'
    },
    Banner: {
        width: "100%",
        height: 190,
        objectFit: 'fill'
    },
    Card: {
        width: "95%",
        height: "100%",
        backgroundColor: BG_LIGHT,
        position: 'absolute',
        top: 150,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        elevation: 5,
    },
    Title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: TEXT_PRIMARY,
        width: '50%',
        marginTop: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },
    accountText: {
        fontWeight: 'bold',
        color: TEXT_PRIMARY,
        fontSize: 15,
        marginTop: 15,
        textAlign: 'center'
    }
});