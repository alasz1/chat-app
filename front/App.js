import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button, Text, View } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
import socketIO from 'socket.io-client';
const config = require('./config.json');

const Stack = createStackNavigator();



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Chat"
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chat Screen</Text>
    </View>
  );
}



export default class App extends React.Component {

  componentDidMount() { 
    const socket = socketIO(config.SERVER_URL, {      
    transports: ['websocket'], jsonp: false });   
    socket.connect(); 
    socket.on('connect', () => { 
      console.log('connected to socket server'); 
    }); 

    
  }

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
          <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chatty Chat' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
