import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomTabs from '../components/bottomtab';
import CircleOptions from '../components/circleoptions';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Users from '../components/users';

const MSGScreen = ({ navigation }) => {

    const [show, setShow] = useState(false);
    const [joe, setJoe] = useState([]);
    const windowWidth = Dimensions.get('window').width;

    useEffect(() => {

        setup()
        
    }, []);

    const setup = async () => {
        
        // const reference = database().ref('/users/' + auth().currentUser.displayName + '/friends/')

        // const test = await reference.once('value')

        // const temp = test.val();

        // setJoe(JSON.stringify(temp))
        
        const temp = await firestore().collection('users').doc(auth().currentUser.displayName).collection('friends').get()
        
        temp.forEach(child => setJoe(joe => [...joe, child.id.toString()]) )
        

    }

    const test = () => {
        if(joe[0])
            return(
                <ScrollView style={{position: 'absolute', width: windowWidth-48, left: 24, top: '32%'}}>
                {
                    joe.map((child, index) => <Users name={child} key={index}/>)
                }
                </ScrollView>
            );
    }


    const ShowOptions = () => {
        
        if (show)
            return (
                <CircleOptions />
            );
    }


    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <View style={{ width: '100%', height: 44 }}>
                <LinearGradient colors={['#380078', 'white']} style={{ flex: 1 }}></LinearGradient>
            </View>
            <Text style={{ fontSize: 21, color: '#762BA3', left: '5%', top: '7%', }}>ONLINE RECENTLY</Text>
            <Text style={{ fontSize: 21, color: '#762BA3', left: '5%', top: '15%' }}>CHATROOMS</Text>
            <ScrollView style={{ width: '100%', height: 100, top: '17%' }}>
                
            </ScrollView>
            
            <BottomTabs />
            {test()}
            <TouchableOpacity style={styles.arrow} onPress={() => setShow(!show)}></TouchableOpacity>
            {ShowOptions()}
        </View>
    );
}

export default MSGScreen;

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