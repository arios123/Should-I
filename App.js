import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, LogBox} from 'react-native';
import Tabs from './navigation/tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './screens/SettingsScreen';
import AcolyteProfileScreen from './screens/AcolyteProfileScreen';
import MSGScreen from './screens/MSGScreen';
import PersonalProfileScreen from './screens/PersonalProfileScreen';
import PublicProfileScreen from './screens/PublicProfileScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import LoadingScreen from './screens/LoadingScreen';
import ProfileSetupScreen from './screens/ProfileSetupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import FindFriendsScreen from './screens/FindFriendsScreen'
import ChatroomScreen from './screens/ChatroomScreen';
import FriendReqScreen from './screens/FriendReqScreen';
import FriendsScreen from './screens/FriendsScreen';

export default function App() {
  const Stack = createStackNavigator();
  LogBox.ignoreAllLogs();
  //ternary operator

  return (
    
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        tabBarShowLabel: false,
        headerTitle: '',
        animationEnabled: false,
      }}>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen}  options={{headerBackVisible:false}}/>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerBackVisible:false}} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerBackVisible:false}}/> 
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name='Tabs' component={Tabs}  options={{headerBackVisible:false}}/>
        <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
        <Stack.Screen name='PublicProfileScreen' component={PublicProfileScreen} options={{headerBackVisible:false}} />
        <Stack.Screen name='PersonalProfileScreen' component={PersonalProfileScreen} options={{headerBackVisible:false}} />
        <Stack.Screen name='AcolyteProfileScreen' component={AcolyteProfileScreen} options={{headerBackVisible:false}} />
        <Stack.Screen name='MSGScreen' component={MSGScreen} options={{headerBackVisible:false}} />
        <Stack.Screen name='ProfileSetupScreen' component={ProfileSetupScreen} />
        <Stack.Screen name='ChatroomScreen' component={ChatroomScreen}/>
        <Stack.Screen name='FindFriendsScreen' component={FindFriendsScreen} />
        <Stack.Screen name='FriendReqScreen' component={FriendReqScreen} />
        <Stack.Screen name='FriendsScreen' component={FriendsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



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

  }
});

