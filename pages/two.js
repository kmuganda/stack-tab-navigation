import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Two extends Component {
  static navigationOptions = {
    title: 'Two',
    tabBarLabel: 'Two',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="shopping-basket" size={30} color={tintColor} />
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="click to go to Two #2"
        onPress={() => navigate('twoa')}
      />
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
