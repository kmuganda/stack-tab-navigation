import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import One from '../pages/one';
import Onea from '../pages/onea';
import Two from '../pages/two';
import Twoa from '../pages/twoa';
import Three from '../pages/three';
import ThreeA from '../pages/threea';

export default class Router extends Component {
  render() {
    const Footer = TabNavigator({
      one: {
        screen: StackNavigator({
          one: { screen: One },
          onea: { screen: Onea }
        })
      },
      two: {
        screen: StackNavigator({
          two: { screen: Two },
          twoa: { screen: Twoa }
        })
      },
      three: {
        screen: StackNavigator({
          three: { screen: Three },
          threea: { screen: ThreeA }
        })
      }
    }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        labelStyle: { fontSize: 10 }
      }
    });
    return (
      <View style={{ flex: 1 }}>
        <Footer />
      </View>
    );
  }
}
