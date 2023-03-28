import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null; 



    const SignIn = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User signed in!');
                navigation.navigate('Tabs', { screen: 'ShouldIScreen' })
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

    const check = () => {
        if(!user){
            null
        }else{
            navigation.navigate('Tabs', {screen: 'ShouldIScreen', name: user.name})
        }
    }

    return (
        
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            {check()}
            <View style={{ width: '100%', alignItems: 'center', top: '3%' }}>
                <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Monserrat' }}>Sign in</Text>
            </View>
            <View style={{ position: 'absolute', width: '100%', height: 76, top: '10%', alignItems: 'center' }}>
                <Image source={require('../pics/i.png')} resizeMode="contain" style={{ width: 206, height: '100%' }} />
            </View>
            <View style={{ top: '30%' }}>
                <Text style={styles.headers}>Email</Text>
                <TextInput style={styles.fields} placeholder='   example@gmail.com' value={email} onChangeText={setEmail} />
                <Text style={styles.headers}>Password</Text>
                <TextInput style={styles.fields} secureTextEntry={true} placeholder='   Password123' value={password} onChangeText={setPassword} />
                <TouchableOpacity style={{ width: 150, height: 19, marginBottom: 30, left: '60%'}}><Text style={{ color: 'white' }}>Forgot your password?</Text></TouchableOpacity>
                <View style={{ width: '100%', height: 55, alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button1} onPress={SignIn}><Text style={{ fontSize: 18, fontFamily: 'Monserrat', fontWeight: 'bold' }}>Sign in</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );




}

export default SignInScreen;

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
        left: '43%'
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