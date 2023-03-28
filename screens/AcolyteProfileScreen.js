import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomTabs from '../components/bottomtab';
import CircleOptions from '../components/circleoptions';

const AcolyteProfileScreen = ({ navigation }) => {

    const [show, setShow] = useState(false);

    const ShowOptions = () => {
        if (show)
            return (
                <CircleOptions />
            );
    }

    return (
        <View style={{flex: 1}}>
            <LinearGradient colors={['#8B1B1B', '#E1E1E1']} style={{ position: 'absolute', width: '100%', height: '91%' }}></LinearGradient>
            <Text style={{fontSize: 21, color: 'white', top: '9%', left: '5%'}}>ACOLYTE PROFILE</Text>
            <BottomTabs />
            <TouchableOpacity style={styles.arrow} onPress={() => setShow(!show)}></TouchableOpacity>
            {ShowOptions()}
        </View>
    );
}

export default AcolyteProfileScreen;

const styles = StyleSheet.create({
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