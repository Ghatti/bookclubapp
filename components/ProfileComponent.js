import React, {Component} from 'react';
import { View, Text } from 'react-native';

class ProfileComponent extends Component{

    static navigationOptions = {
        title: 'Profile'
    }

    render(){
        return (
            <View>
                <Text>ProfileComponent</Text>
            </View>
        );
    }

}

export default ProfileComponent;