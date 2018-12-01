import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import HomeScreen from './Home';
import BooksComponent from './BooksComponent';
import MessagesComponent from './MessagesComponent';
import ProfileComponent from './ProfileComponent';


const defaultNavigationOptions = ({ navigation }) => ({
    headerStyle: {
        backgroundColor: '#A64AC9',
    },
    headerTintColor: 'white',
    headerLeft: <Icon name="menu" size={24}
    iconStyle={{ color: 'white', marginLeft: 30 }} 
    onPress={() => navigation.toggleDrawer()}
    />    
});



const HomeNavigator = createStackNavigator({
    Home: HomeScreen,
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: defaultNavigationOptions
});

const BooksNavigator = createStackNavigator({
    Books: BooksComponent
},{
    initialRouteName: 'Books',
    defaultNavigationOptions: defaultNavigationOptions
});

const ProfileNavigator = createStackNavigator({
    Profile: ProfileComponent
},{
    initialRouteName: 'Profile',
    defaultNavigationOptions: defaultNavigationOptions
});

const MessagesNavigator = createStackNavigator({
    Messages: MessagesComponent,
},{
    initialRouteName: 'Messages',
    defaultNavigationOptions: defaultNavigationOptions
});

const DrawerNav = createDrawerNavigator({
    Home: {screen: HomeNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) =>  <Icon name='home' type='font-awesome' size={20}
                iconStyle={{ color: tintColor }} 
                />
            
        }},
    Books: {screen: BooksNavigator,
            navigationOptions: {
                drawerLabel: 'Books',
                drawerIcon: ({tintColor}) => <Icon name='book' type='font-awesome' size={20}
                iconStyle={{color: tintColor}}/>
            }},
    Messages: {screen: MessagesNavigator,
            navigationOptions:{
                drawerLabel: 'Messages',
                drawerIcon: ({tintColor}) => <Icon name='inbox' type='font-awesome' size={20}
                iconStyle={{color: tintColor}}/>
        }},
    Profile: {screen: ProfileNavigator,
            navigationOptions: {
                drawerLabel: 'Profile',
                drawerIcon: ({tintColor}) => <Icon name='user' type='font-awesome' size={20}
                iconStyle={{color: tintColor}}/>
            }
    }
},
{
    initialRouteName: 'Books',
    drawerBackgroundColor: '#A64AC9',
    contentOptions: {
        activeTintColor: '#fccd04',
        inactiveTintColor: 'white'
    }
   
});




const NavContainer = createAppContainer(DrawerNav);

export default NavContainer;