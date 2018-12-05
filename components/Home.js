import React, { Component } from 'react';
import { ScrollView, Text, TouchableHighlight} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import styles from '../shared/stylesheet';

/*
    GENERAL TODO:

    * Add Store Persistence
    * Add Gesture Responses
    * Add Animations

*/
const MapStateToProps = state => ({
    user: state.user,
    books: state.books,
    messages: state.messages
})

class HomeScreen extends Component{

    static navigationOptions = {
        title: 'Home'
    }
    

    render(){
        
        return (

    
            <ScrollView style={styles.background}>
                <Text style={styles.intro}> Welcome to the Book Club </Text>

                <TouchableHighlight  onPress = {() => this.props.navigation.navigate("Books")}>
                    <Card
                        title='Your Books'
                        titleStyle={styles.title}
                        wrapperStyle={{padding:0}}
                        containerStyle={styles.container}
                        image={{uri: baseUrl + 'img/books.jpg'}} 
                       
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress = {() => this.props.navigation.navigate("Messages")}>
                    <Card
                        title='Your Messages'
                        titleStyle={styles.title}
                        wrapperStyle={{padding:0}}
                        containerStyle={styles.container}
                        image={{uri: baseUrl + 'img/mail.jpg'}}
                        />
                </TouchableHighlight>
                <TouchableHighlight onPress = {() => this.props.navigation.navigate("Profile")}>
                    <Card
                        title='Your Profile'
                        titleStyle={styles.title}
                        wrapperStyle={{padding:0}}
                        containerStyle={styles.container}
                        image={{uri: baseUrl + 'img/profile.jpg'}}
                        />
                </TouchableHighlight>
                
            </ScrollView>
            
        );
    }
}




export default connect(MapStateToProps)(HomeScreen);
