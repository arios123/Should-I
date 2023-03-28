import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const FindFriendsScreen = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    // const [show, setShow] = useState(false);
    const [ff, setff] = useState();
    const [friend, setFriend] = useState();
    // const [myRef, setMyRef] = useState();
    const [myData, setMyData] = useState();
    const [friendRef, setFriendRef] = useState();
    // const [allFriends, setAllFriends] = useState([]);
    // const [temporary, setTemporary] = useState();
    // const [url, setUrl] = useState();
    const [allusers, setAllusers] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {

        // setMyRef(database().ref('/users/' + auth().currentUser.displayName + '/friends'))
        setup();

    }, []);

    const setup = async () => {
        const me = auth().currentUser.displayName;
        const allusers = await firestore().collection('users').get()
        allusers.docs.map(item => {
            if (item._data.displayName != me) {
                setAllusers(u => [...u, item._data.displayName]);
                setFilteredData(x => [...x, item._data.displayName]);
            }
        })

    }

    const showFriends = () => {
        if (allusers) {
            return (
                <View style={{ position: 'absolute', top: '23%', left: 24, width: windowWidth - 48 }}>
                    {filteredData.map(item => <TouchableOpacity style={{ height: 50, borderWidth: 1, marginBottom: 10, justifyContent: 'center' }} onPress={() => navigation.navigate('FriendReqScreen', { name: item })}>
                        <Text>{item}</Text>
                    </TouchableOpacity>)}
                </View>
            );
        }
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = allusers.filter((item) => {
                const itemData = item ? item.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1;
            });

            setFilteredData(newData);
            setff(text);
        } else {
            setFilteredData(allusers);
            setff(text);
        }
    }

    // const setup = async () => {
    //     const temp = await firestore().collection('users').doc(auth().currentUser.displayName).get()
    //     setMyData(temp._data)
    // }

    // const FindFriends = async () => {
    //     const test = await exists();

    //     if (test) {
    //         setFriend(test._data);
    //         setFriendRef(database().ref('/users/' + test._data.displayName))

    //         await firestore().collection('users').doc(myData.displayName).collection('friends').doc(test._data.displayName).set({
    //             avatar: test._data.avatar,
    //             username: test._data.username,
    //         })

    //         await firestore().collection('users').doc(test._data.displayName).collection('friends').doc(myData.displayName).set({
    //             avatar: myData.avatar,
    //             username: myData.username,
    //         })

    //         setff('')

    //         // await database().ref('/users/' + myData.displayName + '/friends/' + test._data.displayName).set({
    //         //     avatar: test._data.avatar,
    //         //     username: test._data.username,
    //         // })

    //         // await database().ref('/users/' + test._data.displayName + '/friends/' + myData.displayName).set({
    //         //     avatar: myData.avatar,
    //         //     username: myData.username,
    //         // })

    //     } else {
    //         console.log('User Not Found')
    //     }


    // }

    // const exists = async () => {
    //     const testing = await firestore().collection('users').doc(ff)
    //     return testing.get();
    // }

    return (
        <View style={{ flex: 1 }}>
            <TextInput style={{ position: 'absolute', width: windowWidth - 48, height: 50, borderBottomWidth: 1, top: '10%', left: 24 }} placeholder="Start typing..." value={ff} onChangeText={(text) => searchFilter(text)} />
            {/* <TouchableOpacity style={{ position: 'absolute', width: 100, height: 50, alignItems: 'center', justifyContent: 'center', top: '11%', left: '70%' }} onPress={FindFriends}>
                <Text style={{ color: "black", fontSize: 21 }}>Find</Text>
            </TouchableOpacity> */}
            {showFriends()}
        </View>
    );
}

export default FindFriendsScreen;