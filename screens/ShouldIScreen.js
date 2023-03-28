import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CircleOptions from '../components/circleoptions';

const ShouldIScreen = () => {

    const [show, setShow] = useState(false);


    const ShowOptions = () => {
        if (show)
            return (
                <CircleOptions />

            );
    }


    return (
        <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <LinearGradient colors={['black', '#E0DFE0']} style={{ position: 'absolute', width: '100%', height: '91%' }}></LinearGradient>
            <Text style={{ color: 'white', fontSize: 32, marginTop: 50, textAlign: 'center' }}>S<Text style={{ color: 'white', fontSize: 24 }}>HOULD I</Text></Text>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.boxes}>
                        <TouchableOpacity style={{ borderRadius: 13, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 50 }}>P</Text></TouchableOpacity>
                    </View>
                    <View style={styles.boxes}>
                        <TouchableOpacity style={{ borderRadius: 13, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 50 }}>V</Text></TouchableOpacity>
                    </View>
                </View>
                {/* <View style={styles.diamond}><Text style={{ transform: ([{ rotateZ: '-45deg' }]), fontSize: 50 }}>T</Text></View> */}
            </View>
            <Text style={{position: 'absolute', fontSize: 50, left: '40%', top: '27%',color: 'black'}}>O R</Text>
            <TouchableOpacity style={styles.arrow} onPress={() => setShow(!show)}></TouchableOpacity>
            {ShowOptions()}
        </View>
    );
}

export default ShouldIScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    diamond: {
        backgroundColor: 'white',
        width: 240,
        height: 240,
        borderWidth: 2,
        borderRadius: 13,
        transform: ([{
            rotateZ: '45deg'
        }]),
        top: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    boxes: {
        backgroundColor: 'white',
        width: 178,
        height: 238,
        borderWidth: 2,
        borderRadius: 13,
        top: '10%',
        alignItems: 'center',
        justifyContent: 'center',

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