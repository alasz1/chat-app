import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Chat extends React.Component {
  render() {
    return (
<View style={styles.container}>
      <Text>Chat Screen</Text>
      {/* <Text>Chat Message: {{ msg }}</Text> */}
      {/* <Text style={{ margin: 10 }}>Post: {route.params?.msg}</Text> */}
      <Button
          title="Go Home"
          onPress={() => 
            this.props.navigation.navigate('Home', 'Went home' )
        }
        />
    </View>
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