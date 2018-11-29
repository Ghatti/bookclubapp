import React, {Component} from 'react';
import { Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import { fetchUser, fetchBooks, fetchMessages } from '../redux/ActionCreators';
import HomeScreen from './Home';

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

const NavStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    }  
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#A64AC9',
        },
        headerTintColor: 'white',
        headerLeft: <Icon name="home" size={24}
        iconStyle={{ color: 'white', marginLeft: 30 }} 
        />    
    }
});

const NavContainer = createAppContainer(NavStack);

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