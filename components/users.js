import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import storage from '@react-native-firebase/storage'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

const Users = (props) => {
    const navigation = useNavigation()
    const windowWidth = Dimensions.get('window').width;
    const [imageUrl, setImageUrl] = useState();
    const [chatroomid, setChatroomid] = useState();

    useEffect(() => {
        storage().ref(props.name + '/profilepicture').getDownloadURL().then((url) => { setImageUrl(url); }).catch((e) => console.log('Errors while downloading => ', e));
        getId();
    }, []);

    const getId = async() => {
        const test = await firestore().collection('users').doc(auth().currentUser.displayName).collection('friends').doc(props.name).get()
        const tempchatroomid = test._data.chatroomid
        setChatroomid(tempchatroomid)
    }

    return (
        <TouchableOpacity style={{ width: '100%', height: 57, alignItems: 'center', borderWidth: 1, marginBottom: 10, flexDirection: 'row' }} onPress={() => navigation.navigate('ChatroomScreen', {name: props.name, cid: chatroomid})}>
            <View style={{ width: 57, height: 57, borderWidth: 1, marginRight: 20 }}>
                <Image style={{ flex: 1, resizeMode: 'stretch' }} source={{uri: imageUrl}} />
            </View>
            <Text style={{ fontSize: 17, fontFamily: 'Carrois Gothic SC', color: 'black' }}>{props.name}</Text>
        </TouchableOpacity>
    );
}

export default Users;

