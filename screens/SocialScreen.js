import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CircleOptions from '../components/circleoptions';

const SocialScreen = ({navigation}) => {
    const [show,setShow] = useState(false);

    const ShowOptions = () => {
        if(show)
        return(
            <CircleOptions />
        );
      }


    return(
        <View>
        <LinearGradient colors={['#380078','#E0DFE0']} style={{position: 'absolute', width: '100%', height: '91%'}}></LinearGradient>
        <View style={styles.container}> 
            <Text style={{color: 'white', fontSize: 24, marginTop: 50, paddingLeft: 30}}>S<Text style={{color: 'white', fontSize: 18}}>OCIAL</Text></Text>
            <View style={{alignContent: 'center', alignItems: 'center',marginTop: 10,}}><View style={styles.social}></View></View>
            <View style={styles.socialPages1}><View style={styles.socialTag1}><Text>Accounts</Text></View></View>
            <View style={styles.socialPages2}><View style={styles.socialTag2}><Text>Stories</Text></View></View>
            </View>
            <TouchableOpacity style={styles.arrow} onPress={() => setShow(!show)}></TouchableOpacity>
            {ShowOptions()}
        </View>
    );
}

export default SocialScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    social: {
        width: '80%',
        height: '80%',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    socialPages1: {
        top: '67%',
        width: 123,
        height: 123,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 15,
        backgroundColor: 'white',
        position: 'absolute',
        left: '5%',
        transform: ([{
            rotateZ: '45deg'
        }]),
        justifyContent: 'center',
    },
    socialPages2: {
        top: '67%',
        width: 123,
        height: 123,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 15,
        backgroundColor: 'white',
        position: 'absolute',
        left: '65%',
        transform: ([{
            rotateZ: '45deg'
        }]),
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialTag1: {
        borderColor: 'black',
        borderWidth: 3,
        width: 119,
        borderRadius: 13,
        alignItems: 'center',
        transform: ([{
            rotateZ: '-45deg'
        }]),
        top: 30,
        left: 30,
        backgroundColor: 'white',
    },
    socialTag2: {
        borderColor: 'black',
        borderWidth: 3,
        width: 119,
        borderRadius: 13,
        alignItems: 'center',
        transform: ([{
            rotateZ: '-45deg'
        }]),
        top: 30,
        left: 30,
        backgroundColor: 'white',
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