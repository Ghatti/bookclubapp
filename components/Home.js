import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight} from 'react-native';
import { Card, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import styles from '../shared/stylesheet';
import * as Animatable from 'react-native-animatable';

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

                <View style={{alignItems:'center'}}>
                    <SearchBar 
                        round
                        onChangeText={() => console.log('wow')}
                        onClear={() => console.log('uau')}
                        placeholder='Search our catalogue'
                        containerStyle={{marginTop: 15, marginBottom: 15, width: '80%', backgroundColor: '#fccd04'}}
                        inputStyle={{backgroundColor: 'white'}}
                    />
                </View>
                <TouchableHighlight  onPress = {() => this.props.navigation.navigate("Books")}>
                    <Animatable.View animation='slideInLeft'>
                        <Card
                            title='Your Books'
                            titleStyle={styles.title}
                            wrapperStyle={{padding:0}}
                            containerStyle={styles.container}
                            image={{uri: baseUrl + 'img/books.jpg'}} 

                        />
                    </Animatable.View>
                </TouchableHighlight>
                <TouchableHighlight onPress = {() => this.props.navigation.navigate("Messages")}>
                    <Animatable.View animation='slideInLeft'>
                        <Card
                            title='Your Messages'
                            titleStyle={styles.title}
                            wrapperStyle={{padding:0}}
                            containerStyle={styles.container}
                            image={{uri: baseUrl + 'img/mail.jpg'}}
                            />
                        </Animatable.View>
                </TouchableHighlight>
                <TouchableHighlight onPress = {() => this.props.navigation.navigate("Profile")}>
                    <Animatable.View animation='slideInLeft'>
                        <Card
                            title='Your Profile'
                            titleStyle={styles.title}
                            wrapperStyle={{padding:0}}
                            containerStyle={styles.container}
                            image={{uri: baseUrl + 'img/profile.jpg'}}
                            />
                    </Animatable.View>
                </TouchableHighlight>
                
            </ScrollView>
            
        );
    }
}




export default connect(MapStateToProps)(HomeScreen);
