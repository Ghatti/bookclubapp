import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchBooks, fetchMessages } from '../redux/ActionCreators';
import NavContainer from './Navigators';

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

        if(this.props.user.user === {})
            this.props.fetchUser(0);
        if(this.props.books.my === [] && this.props.books.wanted === [] && this.props.books.offers === [])
            this.props.fetchBooks(0);
        if(this.props.messages.messages === [])
            this.props.fetchMessages(2);
    }

    render(){

        return(

            <NavContainer />

        );
    }

}

export default connect(MapStateToProps, MapDispatchToProps)(Main);