import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomTabs from '../components/bottomtab';
import CircleOptions from '../components/circleoptions';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import SmallDiamonds from '../components/smalldiamonds';

const windowWidth = Dimensions.get('window').width;

const PersonalProfileScreen = ({ navigation}) => {

    const [show, setShow] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [followers, setFollowers] = useState();
    const [following, setFollowing] = useState();
    const [username, setUsername] = useState();
    const [posted, setPosted] = useState();
    const [opinions, setOpinions] = useState();
    const [ft, setFt] = useState();

    useEffect(() => {  
        firestore().collection('users').doc(auth().currentUser.displayName).onSnapshot(doc => { setName(doc.data().displayName) })
        firestore().collection('users').doc(auth().currentUser.displayName).onSnapshot(doc => { setEmail(doc.data().email) })
        firestore().collection('users').doc(auth().currentUser.displayName).onSnapshot(doc => { setFollowers(doc.data().followers) })
        firestore().collection('users').doc(auth().currentUser.displayName).onSnapshot(doc => { setFollowing(doc.data().following) })
        firestore().collection('users').doc(auth().currentUser.displayName).onSnapshot(doc => { setUsername(doc.data().username) })
        firestore().collection('users').doc(auth().currentUser.displayName).onSnapshot(doc => { setPosted(doc.data().timesPosted) })
        firestore().collection('users').doc(auth().currentUser.displayName).onSnapshot(doc => { setOpinions(doc.data().opinionsMade) })
        firestore().collection('users').doc(auth().currentUser.displayName).onSnapshot(doc => { setFt(doc.data().followThroughs) })
        storage().ref(auth().currentUser.displayName + '/profilepicture').getDownloadURL().then((url) => { setImageUrl(url); }).catch((e) => console.log('Errors while downloading => ', e));

    }, []);

    // const setup = async () => {
    //     const temp = await firestore().collection('users').doc(auth().currentUser.displayName).get()
    //     setMyData(temp._data)
    // }


    const ShowOptions = () => {
        if (show)
            return (
                <CircleOptions />
            );
    }

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#93BCEC', '#E1E1E1']} style={{ position: 'absolute', width: '100%', height: '91%', }}></LinearGradient>
            <Text style={{ fontSize: 21, color: 'white', top: '9%', left: '5%', position: 'absolute' }}>PRIVATE PROFILE</Text>
            <View style={styles.piccont}>
                <View style={styles.profilePic}>
                    <Image style={{ flex: 1 }} source={{ uri: imageUrl}} />
                </View>
            </View>
            <ScrollView style={{ top: '15%', height: '52%' }}>
                <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', fontFamily: 'Nunito' }}>{auth().currentUser.displayName}</Text>
                <View style={{ position: 'absolute', flexDirection: 'row', left: '45%', top: '25%' }}>
                    <SmallDiamonds size={40} startcolor='#93BCEC' endcolor='#E1E1E1' title='POSTED' value={posted} secTitle={false} />
                    <SmallDiamonds size={40} startcolor='#93BCEC' endcolor='#E1E1E1' title='OPINIONS' value={opinions} secTitle={false} />
                    <SmallDiamonds size={40} startcolor='#93BCEC' endcolor='#E1E1E1' title='FOLLOW' titletwo='THROUGHS' secTitle={true} value={ft}/>
                </View>
                <Text style={{ fontSize: 21, color: 'white', top: '15%', marginBottom: 75, left: 24, fontFamily: 'Carrois Gothic SC', }}>ABOUT</Text>
                <Text style={styles.titles}>FULL NAME</Text>
                <View style={styles.textwrapper}><Text style={styles.text}>{name}</Text></View>
                <Text style={styles.titles}>USERNAME</Text>
                <View style={styles.textwrapper}><Text style={styles.text}>{username}</Text></View>
                <Text style={styles.titles}>EMAIL</Text>
                <View style={styles.textwrapper}><Text style={styles.text}>{email}</Text></View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.titles}>FOLLOWING</Text>
                    <Text style={[styles.titles, { marginLeft: '15%' }]}>FOLLOWERS</Text>
                </View>
                <View style={[styles.textwrapper, { flexDirection: 'row' }]}>
                    <Text style={styles.text}>{following}</Text>
                    <Text style={[styles.text, { left: '38%', position: 'absolute' }]}>{followers}</Text>
                </View>


            </ScrollView>
            <BottomTabs />
            <TouchableOpacity style={styles.arrow} onPress={() => setShow(!show)}></TouchableOpacity>
            {ShowOptions()}
        </View>
    );
}

export default PersonalProfileScreen;

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
    profilePic: {
        width: 140,
        height: '100%',
        borderWidth: 5,
        borderColor: '#C4C4C4',
        // transform: ([{
        //     rotateZ: '45deg'
        // }]),
    },
    piccont: {
        width: '100%',
        height: 140,
        top: '14%',
        alignItems: 'center',
    },
    titles: {
        marginBottom: 5,
        fontSize: 14,
        color: 'white',
        fontFamily: 'Carrois Gothic SC',
        left: 24
    },
    text: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Carrois Gothic SC',
    },
    textwrapper: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        left: 24,
        width: windowWidth - 48,
        height: 30,
        marginBottom: 5
    }
});