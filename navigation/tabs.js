import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostScreen from '../screens/InMyOpinonScreen';
import SocialScreen from '../screens/SocialScreen';
import { View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import ShouldIScreen from '../screens/ShouldIScreen';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Tabs = ({ navigation }) => {


    return (
        <Tab.Navigator screenOptions={{
            headerTransparent: true,
            tabBarShowLabel: false,
            headerTitle: '',
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#E0DFE0',
                height: 73,
                width: '100%',
            }
        }}>
            <Tab.Screen name="PostScreen" component={PostScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <LinearGradient colors={['#CFCCCC', '#E0DFE0']} style={{
                            transform: ([{
                                rotateZ: '-45deg'
                            }])
                        }}><View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, }}>
                                <Image source={require('../pics/opinion.png')}
                                    resizeMode="contain"
                                    style={{
                                        flex: 1,
                                        transform: ([{
                                            rotateZ: '45deg'
                                        }])
                                    }} />
                            </View></LinearGradient>
                        <View style={{ position: 'absolute', width: 100, height: 5, borderRadius: 100, backgroundColor: focused ? 'black' : '#E0DFE0', bottom: -13, right: -25 }}>


                        </View></View>
                )
            }} />
            <Tab.Screen name="ShouldIScreen" component={ShouldIScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <LinearGradient colors={['#CFCCCC', '#E0DFE0']} style={{
                            transform: ([{
                                rotateZ: '-45deg'
                            }])
                        }}><View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, }}>
                                <Image source={require('../pics/shouldi.png')}
                                    resizeMode="contain"
                                    style={{
                                        flex: 1,
                                        transform: ([{
                                            rotateZ: '45deg'
                                        }])
                                    }} />
                            </View></LinearGradient>
                        <View style={{ position: 'absolute', width: 100, height: 5, borderRadius: 100, backgroundColor: focused ? 'black' : '#E0DFE0', bottom: -13, right: -25 }}></View>
                    </View>
                )
            }} />
            <Tab.Screen name="SocialScreen" component={SocialScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <LinearGradient colors={['#CFCCCC', '#E0DFE0']} style={{
                            transform: ([{
                                rotateZ: '-45deg'
                            }])
                        }}><View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, }}>
                                <Image source={require('../pics/social.png')}
                                    resizeMode="contain"
                                    style={{
                                        flex: 1,
                                        transform: ([{
                                            rotateZ: '45deg'
                                        }])
                                    }} />
                            </View></LinearGradient>
                        <View style={{ position: 'absolute', width: 100, height: 5, borderRadius: 100, backgroundColor: focused ? 'black' : '#E0DFE0', bottom: -13, right: -25 }}></View>
                    </View>
                )
            }} />


        </Tab.Navigator>
    );




}





export default Tabs;
