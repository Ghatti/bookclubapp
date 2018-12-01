import React, {Component} from 'react';
import { View, Text } from 'react-native';

class MessagesComponent extends Component{

    static navigationOptions = {
        title: 'Inbox'
    }

    render(){
        return (
            <View>
                <Text>MessagesComponent</Text>
            </View>
        );
    }

}

export default MessagesComponent;