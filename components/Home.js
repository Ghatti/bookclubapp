import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


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

    
            <ScrollView style={{backgroundColor: '#fccd04'}}>
                <Text style={styles.intro}> Welcome to the Book Club </Text>
                <Card
                    title='Your Books'
                    titleStyle={styles.title}
                    wrapperStyle={{padding:0}}
                    containerStyle={styles.container}
                    image={{uri: baseUrl + 'img/books.jpg'}} 
                />


                <Card
                    title='Your Profile'
                    titleStyle={styles.title}
                    wrapperStyle={{padding:0}}
                    containerStyle={styles.container}
                    image={{uri: baseUrl + 'img/profile.jpg'}}/>

                <Card
                    title='Your Messages'
                    titleStyle={styles.title}
                    wrapperStyle={{padding:0}}
                    containerStyle={styles.container}
                    image={{uri: baseUrl + 'img/mail.jpg'}} />
                
            </ScrollView>
            
        );
    }
}


const styles = StyleSheet.create({
    intro: {
        fontWeight: 'bold', 
        fontSize: 24, 
        textAlign: 'center', 
        marginTop: 15,
        marginBottom: 15
    },
    title: {
        backgroundColor: '#A64AC9', 
        padding: 15, 
        marginTop: 0, 
        marginBottom:0, 
        color: 'white'
    },
    container: {
        marginBottom: 20
    }
})

export default connect(MapStateToProps)(HomeScreen);
