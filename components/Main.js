import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchUser, fetchBooks, fetchMessages } from '../redux/ActionCreators';

const MapStateToProps = state => ({
    user: state.user,
    books: state.books,
    messages: state.messages
})

const MapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchBooks: (userId) => dispatch(fetchBooks(userId)),
    fetchMessages: (userId) => dispatch(fetchMessages(userId))
})

class Main extends Component{

    componentDidMount(){
        this.props.fetchUser(0);
        this.props.fetchBooks(0);
        this.props.fetchMessages(2);
    }

    render(){
        return(

            <View>
                <Text>{ !this.props.user.loading ? this.props.user.user.acc.username : 'Not ready'}</Text>
                <Text>{ !this.props.books.loading ? "Books user id is: " + this.props.books.booklist.userId : 'Not ready' }</Text>
                <Text>{ !this.props.messages.loading ? this.props.messages.messages[0].body : 'Not ready'}</Text>
            </View>
    
        );
    }

}

export default connect(MapStateToProps, MapDispatchToProps)(Main);