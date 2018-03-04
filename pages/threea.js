import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class ThreeA extends Component {
  static navigationOptions = {
    title: 'Three',
    tabBarLabel: 'Three',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="shopping-basket" size={30} color={tintColor} />
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Three A</Text>
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
