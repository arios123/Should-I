import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const BottomTabs = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.iconsbox}>
            <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Tabs', { screen: 'PostScreen' })}><LinearGradient colors={['#CFCCCC', '#E0DFE0']} style={{ flex: 1 }} ><View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, }}>
                <Image source={require('../pics/opinion.png')}
                    resizeMode="contain"
                    style={{
                        flex: 1,
                        transform: ([{
                            rotateZ: '45deg'
                        }])
                    }} />
            </View></LinearGradient></TouchableOpacity>
            <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Tabs', { screen: 'ShouldIScreen' })}><LinearGradient colors={['#CFCCCC', '#E0DFE0']} style={{ flex: 1 }}><View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, }}>
                <Image source={require('../pics/shouldi.png')}
                    resizeMode="contain"
                    style={{
                        flex: 1,
                        transform: ([{
                            rotateZ: '45deg'
                        }])
                    }} />
            </View></LinearGradient></TouchableOpacity>
            <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Tabs', { screen: 'SocialScreen' })}><LinearGradient colors={['#CFCCCC', '#E0DFE0']} style={{ flex: 1 }}><View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, }}>
                <Image source={require('../pics/social.png')}
                    resizeMode="contain"
                    style={{
                        flex: 1,
                        transform: ([{
                            rotateZ: '45deg'
                        }])
                    }} />
            </View></LinearGradient></TouchableOpacity>
        </View>
    );
}

export default BottomTabs;

const styles = StyleSheet.create({
    iconsbox: {
        position: 'absolute',
        backgroundColor: '#E0DFE0',
        width: '100%',
        height: 73,
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: '#bfbfbf',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    icons: {
        width: 50,
        height: 50,
        transform: ([{
            rotateZ: '-45deg'
        }]),
        margin: 35,
    },
});