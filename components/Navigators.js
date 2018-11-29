import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';

export const HomeNavigator = createAppContainer(createStackNavigator({
    Home: {screen: Home}
}));