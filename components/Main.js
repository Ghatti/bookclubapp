import React, {Component} from 'react';
import { Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchUser, fetchBooks, fetchMessages } from '../redux/ActionCreators';
import NavContainer from './Navigators';
import { View, Text, FlatList } from 'react-native';

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

            <NavContainer />

        );
    }

}

export default connect(MapStateToProps, MapDispatchToProps)(Main);