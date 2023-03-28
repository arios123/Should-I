import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CircleOptions from '../components/circleoptions';


const PostScreen = ({ navigation }) => {
    const [show, setShow] = useState(false);

    const ShowOptions = () => {
        if (show)
            return (
                <CircleOptions />
            );
    }




    return (
        <View styles={{ position: 'absolute' }}>
            <LinearGradient colors={['#380078', '#E0DFE0']} style={{ position: 'absolute', width: '100%', height: '91%' }}></LinearGradient>
            <View style={styles.container}>

                <Text style={{ color: 'white', fontSize: 24, marginTop: 50, paddingLeft: 30 }}>I<Text style={{fontSize: 18}}>N</Text> M<Text style={{fontSize: 18}}>Y</Text> O<Text style={{fontSize: 18}}>PINION</Text></Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.boxes}></View>
                    <View style={styles.boxes}></View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.boxes}></View>
                    <View style={styles.boxes}></View>
                </View>

            </View>
            <TouchableOpacity style={styles.arrow} onPress={() => setShow(!show)}></TouchableOpacity>
            {ShowOptions()}
        </View>
    );




}

export default PostScreen;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    boxes: {
        height: 225,
        width: 165,
        backgroundColor: 'white',
        marginLeft: 27,
        borderRadius: 13,
        marginTop: 20,
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