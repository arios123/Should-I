import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const windowWidth = Dimensions.get('window').width;

const FriendsScreen = () => {

    const [friends, setFriends] = useState([])
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        const me = auth().currentUser.displayName;
        await database().ref('users/' + me + '/friendRequests').once('value').then(snapshot => {
            Object.values(snapshot.val()).map(item => {
                setFriends(u => [...u, item.from])
            })
        })

        await database().ref('users/' + me + '/friendRequests').once('value').then(snapshot => {
            const tempo = snapshot.val()
        })
    }

    const accept = async(name) => {

        const me = auth().currentUser.displayName

        const temp = await firestore().collection('users').doc(auth().currentUser.displayName).get()
        const temp2 = await firestore().collection('users').doc(name).get()
        
        await firestore().collection('users').doc(me).collection('friends').doc(name).set({
            avatar: temp2._data.avatar,
            username: temp2._data.username,
        })
        
        await firestore().collection('users').doc(name).collection('friends').doc(me).set({
            avatar: temp._data.avatar,
            username: temp._data.username,
        }) 
        
        const newData = friends.filter((item) => {return item !== name; })
        setFriends(newData)
    }

    const showFriends = () => {
        if (friends)
            return ( 
                <View style={{ width: '100%', top: '10%' }}>
                    {friends.map(item =>
                        <View style={{ flexDirection: 'row', width: '100%'}}>
                            <View style={{ width: '60%', height: 50, borderWidth: 1, borderColor: 'yellow', left: 24, marginRight: 50, marginBottom: 25 }}>
                                <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', left: 15 }}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{width: 75, height: 50, borderWidth: 1, borderColor: 'yellow', justifyContent: 'center', alignItems: 'center', borderRadius: 50}} onPress={() => accept(item)}>
                                <Text style={{color: 'white'}}>Accept</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            );
    }

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <LinearGradient colors={['black', 'white']} style={{ position: 'absolute', width: '100%', height: '100%' }}></LinearGradient>
            {showFriends()}
        </View>
    );
}

export default FriendsScreen