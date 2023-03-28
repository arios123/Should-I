import React, {useEffect, useState} from "react";
import { View, Text, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoadingScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
                navigation.navigate('WelcomeScreen')
          }, 3000); 
      }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../pics/loading.png')}
                resizeMode="contain"
                style={{
                    flex: 1,
                }} />
        </View>
    );
}

export default LoadingScreen;