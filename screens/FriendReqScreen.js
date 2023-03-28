import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const windowWidth = Dimensions.get('window').width;

const FriendReqScreen = (props) => {
    const [imageUrl, setImageUrl] = useState();
    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [sent, setSent] = useState(false);

    useEffect(() => {
        firestore().collection('users').doc(props.route.params.name).onSnapshot(doc => { setName(doc.data().displayName) })
        firestore().collection('users').doc(props.route.params.name).onSnapshot(doc => { setUsername(doc.data().username) })
        storage().ref(props.route.params.name + '/profilepicture').getDownloadURL().then((url) => { setImageUrl(url); }).catch((e) => console.log('Errors while downloading => ', e));
    }, []);

    const friendReq = () => {
        const reference = database().ref('/users/' + props.route.params.name + '/friendRequests')
        const me = auth().currentUser.displayName
        reference.push({
            from: me
        })
        setSent(true)
    }

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <LinearGradient colors={['black', 'white']} style={{ position: 'absolute', width: '100%', height: '100%' }}></LinearGradient>
            <Text style={{ position: 'absolute', fontSize: 21, color: 'white', top: '9%', left: '5%', }}>{props.route.params.name}</Text>
            <View style={styles.piccont}>
                <View style={styles.profilePic}>
                    <Image style={{ flex: 1 }} source={{ uri: imageUrl }} />
                </View>
            </View>
            <View style={{ top: '20%' }}>
                <Text style={styles.titles}>FULL NAME</Text>
                <View style={styles.textwrapper}><Text style={styles.text}>{name}</Text></View>
                <Text style={styles.titles}>USERNAME</Text>
                <View style={styles.textwrapper}><Text style={styles.text}>{username}</Text></View>
            </View>
            <View style={{ position: 'absolute', width: '100%', top: '80%', alignItems: 'center' }}>
                {sent ? <View style={{ position: 'absolute', backgroundColor: 'gray', width: 200, height: 50, top: '50%', alignItems: 'center',justifyContent: 'center', borderRadius: 100}}>
                    <Text style={{ fontSize: 21, color: 'white'}}>SENT</Text>
                </View> : 
                <TouchableOpacity style={{ position: 'absolute', backgroundColor: 'gray', width: 200, height: 50, top: '50%', alignItems: 'center',justifyContent: 'center', borderRadius: 100}} onPress={() => friendReq()}>
                    <Text style={{ fontSize: 21, color: 'white'}}>SEND REQUEST</Text>
                </TouchableOpacity> }
            </View>
        </View>
    );
}

export default FriendReqScreen;

const styles = StyleSheet.create({
    profilePic: {
        width: 140,
        height: '100%',
        borderWidth: 5,
        borderColor: '#C4C4C4',
    },
    piccont: {
        width: '100%',
        height: 140,
        top: '14%',
        alignItems: 'center',
    },
    textwrapper: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        left: 24,
        width: windowWidth - 48,
        height: 30,
        marginBottom: 5
    },
    titles: {
        marginTop: 15,
        marginBottom: 5,
        fontSize: 14,
        color: 'white',
        fontFamily: 'Carrois Gothic SC',
        left: 24
    },
})