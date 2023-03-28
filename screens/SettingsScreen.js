import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomTabs from '../components/bottomtab';
import CircleOptions from '../components/circleoptions';
import auth from '@react-native-firebase/auth';

const SettingsScreen = ({ navigation }) => {

  const [show, setShow] = useState(false);
  const [showAppSets, setShowAppSets] = useState(false);

  const ShowOptions = () => {
    if (show)
      return (
        <CircleOptions />
      );
  }

  const LogOut = () => {
    if (showAppSets)
      return (
        <View style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'center' }}>
          <TouchableOpacity style={{ width: 100, height: 50, top: '37%' }} onPress={() => auth().signOut().then(() => navigation.navigate('WelcomeScreen'))}><Text style={{ color: 'black', fontSize: 27 }}>Log out</Text></TouchableOpacity>
          <TouchableOpacity style={{ width: 150, height: 50, top: '37%' }} onPress={() => navigation.navigate('FindFriendsScreen')}><Text style={{ color: 'black', fontSize: 27 }}>Find Friends</Text></TouchableOpacity>
          <TouchableOpacity style={{ width: 200, height: 50, top: '37%' }} onPress={() => navigation.navigate('FriendsScreen')}><Text style={{ color: 'black', fontSize: 27 }}>Friend Requests</Text></TouchableOpacity>
        </View>
      );
  }

  return (
    <View>
      <LinearGradient colors={['#380078', '#E0DFE0']} style={{ position: 'absolute', width: '100%', height: '91%' }}></LinearGradient>
      <View style={styles.root}>
        <Text style={{ color: 'white', fontSize: 24, marginTop: 50, paddingLeft: 30, top: 20 }}>S<Text style={{ color: 'white', fontSize: 18 }}>ETTINGS</Text></Text>


        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.settingBoxes} onPress={() => setShowAppSets(!showAppSets)}><Text style={{ transform: ([{ rotateZ: '-45deg' }]) }}>App Sets</Text></TouchableOpacity>

          <TouchableOpacity style={styles.settingBoxes}><Text style={{ transform: ([{ rotateZ: '-45deg' }]) }}>Appearance</Text></TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.settingBoxes}><Text style={{ transform: ([{ rotateZ: '-45deg' }]) }}>Accounts</Text></TouchableOpacity>
          <TouchableOpacity style={styles.settingBoxes}><Text style={{ transform: ([{ rotateZ: '-45deg' }]) }}>Story</Text></TouchableOpacity>
        </View>
      </View>
      <BottomTabs />
      <TouchableOpacity style={styles.arrow} onPress={() => setShow(!show)}></TouchableOpacity>
      {ShowOptions()}
      {LogOut()}
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  settingBoxes: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
    marginVertical: 80,
    width: 100,
    height: 100,
    borderColor: '#380078',
    borderWidth: 5,
    borderRadius: 15,
    alignContent: 'stretch',
    transform: ([{
      rotateZ: '45deg'
    }])
  },
  arrow: {
    position: 'absolute',
    backgroundColor: '#adadad',
    width: 35,
    height: 35,
    top: '80%',
    left: '-5%',
    transform: ([{
      rotateZ: '45deg'
    }])

  },
});