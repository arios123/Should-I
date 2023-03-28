import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const ProfileSetupScreen = (props) => {

    const navigation = useNavigation();

    const [image, setImage] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const [avatar, setAvatar] = useState();
    const following = 0;
    const followers = 0;
    const followThroughs = 0;
    const timesPosted = 0;
    const opinionsMade = 0;

    useEffect(() => {
        // DefaultPath()
        setEmail(props.route.params.email)
        storage()
            .ref('/' + 'blank-profile-picture.jpg')
            .getDownloadURL()
            .then((url) => {
                setImageUrl(url);  
                setImage(url)
                setAvatar(url)
            })
            .catch((e) => console.log('Errors while downloading => ', e));
    }, []);

    const ChoosePic = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path)
            // console.log(image.path.substring(image.path.lastIndexOf('/')+1))
            setImageUrl(image.path);
        });
    }

    // const DefaultPath = async () => {
    //     const metadata = await storage().ref('/' + 'blank-profile-picture.jpg').getMetadata();
    //     setImage("/" + metadata.fullPath)
    // }

    const UploadAll = async () => {

        setIsUploading(true)
        const task = storage().ref('/' + displayName + '/profilepicture').putFile(image);
        
        task.on('state_changed', taskSnapshot => {
            setPercentage(Math.round(taskSnapshot.bytesTransferred/taskSnapshot.totalBytes)*100);
        })

        await task;
        setIsUploading(false);

        await firestore().collection('users').doc(displayName).set({
            email,
            username,
            displayName,
            following,
            followers,
            followThroughs,
            opinionsMade,
            timesPosted,
            avatar
        }).catch(error => { console.log(error) })

        auth().currentUser.updateProfile({
            displayName: displayName
        })

        if(!isUploading){
            navigation.navigate('Tabs', {screen: 'ShouldIScreen'})
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}>
            <View style={{ width: '100%', alignItems: 'center', top: '3%' }}>
                <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Monserrat' }}>Profile Setup</Text>
            </View>
            {/* <TouchableOpacity style={{ color: 'white', position: 'absolute', right: '4%', top: '7%', fontSize: 21, width: 50, height:50 }} onPress={UploadPic}><Text>Finish </Text></TouchableOpacity> */}
            <View style={styles.profilePic}>
                <Image style={{ flex: 1 }} source={{ uri: imageUrl }} />
                <TouchableOpacity style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={ChoosePic}><Text style={{ color: 'black' }}>Set Profile Picture</Text></TouchableOpacity>
            </View>
            {isUploading ? <View style={{position: 'absolute', height: 30, width: 100, top: '72%', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: "white", fontSize: 16}}>{percentage}% Done</Text>
            </View>  : null}
            
            <ScrollView style={{ top: '20%', width: '100%'}}>
                <Text style={styles.headers}>Pick username</Text>
                <TextInput style={styles.fields} placeholder='   John Doe' value={username} onChangeText={setUsername} />
                <Text style={styles.headers}>Display name</Text>
                <TextInput style={styles.fields} placeholder='   John Doe' value={displayName} onChangeText={setDisplayName} />
                <View style={{width: '100%', height: 55, alignItems: 'center', marginTop: 40}}>
                    <TouchableOpacity style={styles.button} onPress={UploadAll}><Text style={{ fontSize: 18, fontFamily: 'Monserrat', fontWeight: 'bold', color: 'black' }}>Finish</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default ProfileSetupScreen;

const styles = StyleSheet.create({
    profilePic: {
        width: 140,
        height: 140,
        borderWidth: 5,
        borderColor: '#C4C4C4',
        // transform: ([{
        //     rotateZ: '45deg'
        // }]),
        top: '15%',
    },
    headers: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Monserrat',
        left: '4%',
    },
    fields: {
        color: 'white',
        borderWidth: 1,
        left: '4%',
        width: '92%',
        borderBottomColor: 'white',
        height: 40,
        fontSize: 17,
        marginBottom: 30
    },
    button: {
        backgroundColor: 'white',
        width: 191,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    }
});