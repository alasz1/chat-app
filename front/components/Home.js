import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Home extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Chat"
          onPress={() => 
            this.props.navigation.navigate('Chat', 'Hello!' )
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