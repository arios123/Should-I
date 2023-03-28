import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CircleOptions = () => {

    const navigation = useNavigation();

    return (
        <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
            <TouchableOpacity style={styles.circles}><Image source={require('../pics/story.png')}
              resizeMode="contain"
              style={{
                flex: 1,
              }} /></TouchableOpacity>
            <TouchableOpacity style={styles.circles} onPress={() => navigation.navigate('PersonalProfileScreen')}><Image source={require('../pics/personal.png')}
              resizeMode="contain"
              style={{
                flex: 1,
              }} /></TouchableOpacity>
            <TouchableOpacity style={styles.circles} onPress={() => navigation.navigate('AcolyteProfileScreen')}><Image source={require('../pics/acolyte.png')}
              resizeMode="contain"
              style={{
                flex: 1,
              }} /></TouchableOpacity>
            <TouchableOpacity style={styles.circles} onPress={() => navigation.navigate('PublicProfileScreen')}><Image source={require('../pics/public.png')}
              resizeMode="contain"
              style={{
                flex: 1,
              }} /></TouchableOpacity>
            <TouchableOpacity style={styles.circles} onPress={() => navigation.navigate('MSGScreen')}><Image source={require('../pics/msg.png')}
              resizeMode="contain"
              style={{
                flex: 1,
              }} /></TouchableOpacity>
            <TouchableOpacity style={styles.circles} onPress={() => navigation.navigate('SettingsScreen')}><Image source={require('../pics/settings.png')}
              resizeMode="contain"
              style={{
                flex: 1,
              }} /></TouchableOpacity>
          </View>
        </View>
      );
}

export default CircleOptions;

const styles = StyleSheet.create({
    circles: {
      marginRight: 17,
      left: 30,
      top: '127%',
      width: 47,
      height: 47,
      backgroundColor: '#FFFFFF',
      borderRadius: 23.5,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });