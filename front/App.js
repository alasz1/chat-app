import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button, Text, View } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
import socketIO from 'socket.io-client';
import AppNavigator from './components/AppNavigator';
const config = require('./config.json');


const Stack = createStackNavigator();



// function HomeScreen({ navigation, route }) {
//   let msg = route.params?.msg;
//   let message = route.params?.message;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen {message}</Text>
//       <Button
//         title="Go to Chat"
//         onPress={() => navigation.navigate('Chat', { msg } )}
//       />
//     </View>
//   );
// }

// function ChatScreen({ route }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Chat Screen</Text>
//       {/* <Text>Chat Message: {{ msg }}</Text> */}
//       <Text style={{ margin: 10 }}>Post: {route.params?.msg}</Text>

//     </View>
//   );
// }



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { msg: '' };

    this.socket = socketIO(config.SERVER_URL); // replace 'environment.serverUrl' with your server url
    // this.socket.on('connection', () => { 
    //   console.info('connected!')
    // });
    this.socket.on('newuser', () => { 
      console.info('new user connected!')
      this.state = { msg: 'New user connected' };
      console.log(this.state.msg)
    });
		this.socket.emit('connection', 'Hi server'); // emits 'hi server' to your server
		
		// Data from server
    this.socket.on('chat message', (data) => {
        console.log('Data recieved from server', data); //this will console 'channel 2'
      });

  }


  
  componentDidMount() {


    // const socket = socketIO(config.SERVER_URL, {
    //   transports: ['websocket'], rejectUnauthorized: false, path:'', jsonp: false
    // });
    // socket.connect();
    // console.log("connecting to socket")    
    // socket.on('connection', () => {
    //   socket.emit('hello world');
    //   console.info('connected to socket server');

    //   socket.on('disconnect', () => {
    //     console.log('connection to server lost.');
    //   });

    //   socket.on('chat message', (message) => {
    //     console.log(message)
    //     this.setState({ msg: message })
    //   });

    // });


  }

  render() {
console.log(this.state.msg)

// message = () => {
		
//   // const dataObj = {
//   //   action: 'click'
//   // };
  
//   this.socket.emit('newuser');
// }
    return (

      
      //   <Stack.Navigator initialRouteName="Home">
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{ title: 'Overview' }}
      //       initialParams={{ msg: this.state.msg, message: this.message }}
      //     />
      //     <Stack.Screen
      //       name="Chat"
      //       component={ChatScreen}
      //       options={{ title: 'Chatty Chat' }}
      //       initialParams={{ msg: this.state.msg }}
            
      //     />
      //   </Stack.Navigator>

      <NavigationContainer>
      <AppNavigator/>
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
