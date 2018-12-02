import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles } from '../shared/stylesheet';

const MapStateToProps = state => ({

    messages: state.messages
});

class MessagesComponent extends Component{

    static navigationOptions = {
        title: 'Inbox'
    }

    render(){
        return (
            <View style={styles.background}>
                <Text>MessagesComponent</Text>
            </View>
        );
    }

}

export default connect(MapStateToProps)(MessagesComponent);