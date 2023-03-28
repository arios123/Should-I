import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
const SignUpScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const SignUp = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
                navigation.navigate('ProfileSetupScreen', {email: email })
                })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ position: 'absolute', width: '100%', height: 76, top: '10%', alignItems: 'center' }}>
                <Image source={require('../pics/name.png')} resizeMode="contain" style={{ width: 206, height: '100%' }} />
            </View>
            <View style={{width: '100%', alignItems: 'center', top: '3%' }}>
                <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Monserrat'}}>Sign up</Text>
            </View>
            <ScrollView style={{ flex: 1, top: '20%'}}>
                <Text style={styles.headers}>Email Address</Text>
                <TextInput style={styles.fields} placeholder='   example@gmail.com' value={email} onChangeText={setEmail} />
                <Text style={styles.headers}>New Password</Text>
                <TextInput style={styles.fields} secureTextEntry={true} placeholder='   Password123' value={password} onChangeText={setPassword} />
                <Text style={styles.headers}>Confirm New Password</Text>
                <TextInput style={styles.fields} secureTextEntry={true} placeholder='   Password123' />
                <View style={{width: '100%', height: 55, alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button1} onPress={SignUp}><Text style={{fontSize: 18, fontFamily: 'Monserrat', fontWeight: 'bold'}}>Create</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    button1: {
        backgroundColor: 'white',
        width: 191,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    button2: {
        top: 10,
        width: 60,
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
        left: '52%'
    },
    headers: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Monserrat',
        left: '4%',
    },
    fields: {
        color: 'white',
        borderWidth: 1,
        left: '4%',
        width: '92%',
        borderBottomColor: 'white',
        height: 40,
        fontSize: 17,
        marginBottom: 30
    }
});