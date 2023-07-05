import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
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

const Signup = () => {

    // Navigation.
    const navigation = useNavigation();

    // States.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulating a loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    // Create_Admin.
    const handleSignUp = () => {
        auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                setIsLoading(true)
                console.log('User account created & signed in!', email, password);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!', email, password);
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!', email, password);
                }
                console.error(error, email, password);
            });
    };

    return (
        <View style={styles.Container}>
            <BackBtn onClick={() => navigation.goBack()} />
            <Image style={styles.Banner} source={require("../assets/banner.png")} />
            <View style={styles.Card}>
                <Text style={styles.Title}>Sign up</Text>
                <CustomInput
                    value={name}
                    onchangeText={(text) => { setName(text) }}
                    placeholder={"Name"}
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
                <CustomInput
                    value={phone}
                    onchangeText={(text) => { setPhone(text) }}
                    placeholder={"Phone No"}
                    type={"phone-pad"}
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
                    title={"Sign up"}
                    onClick={handleSignUp}
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
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={styles.accountText}>Already have an account? Login</Text>
                </TouchableOpacity>
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
        height: 190,
        objectFit: 'fill',
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