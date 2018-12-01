import React, {Component} from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

const MapStateToProps = state => ({
    books: state.books
})


class BooksComponent extends Component{

    constructor(props){
        super(props);
        this.state = {list: 'my'};
    }

    static navigationOptions = {
        title: 'Books',
        drawerLabel: 'Books',
        drawerIcon: () => {
            <Icon name='book' type='font-awesome' size={24}
            iconStyle={{ color: 'white', marginLeft: 30 }} 
            />
        }
    }

    render(){
        return (
            <View>
                <Text>
                    BooksComponent
                </Text>
            </View>
        );     
    }

}

export default connect(MapStateToProps)(BooksComponent);