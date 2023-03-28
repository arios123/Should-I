import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'; 
import auth from '@react-native-firebase/auth';

const WelcomeScreen = ({navigation}) => {

    return(
        <View style={styles.root}>
            <View style={{position: 'absolute', width: 206, height: 76, top: '15%'}}>
            <Image source={require('../pics/name.png')} resizeMode="contain" style={{flex: 1}}/>
            </View>
            <TouchableOpacity style={styles.btn}><Text style={styles.text} onPress={() => navigation.navigate('SignUpScreen')}>Create Account</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {backgroundColor: 'transparent', top: '46%'}]} onPress={() => navigation.navigate('SignInScreen')}><Text style={[styles.text, {color: 'white'}]}>Sign in</Text></TouchableOpacity>
        </View>
    );
      
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    btn: {
        width: 201,
        height: 56,
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        top: '45%'
    },
    text: {
        fontSize: 18,
        fontFamily: 'Monsterrat',
        color: 'black'
    }
});