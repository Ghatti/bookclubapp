import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { ButtonGroup, FormInput, FormLabel } from 'react-native-elements';

const mapStateToProps = state => ({
    user: state.user
})

class ProfileComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            form: 'acc'
        }
    }

    static navigationOptions = {
        title: 'Profile'
    }

    render(){
        return (
            <View>

                <View>
                    <Button 
                        title='Account Info'
                        onPress={() => console.log('acc')}/>
                    <Button 
                        title='Personal'
                        onPress={()=> console.log('pers')}
                    />
                    <Button 
                        title='Book Preferences'
                        onPress={() => console.log('bookpref')}/>
                </View>

                <View>
                    <Text>Acc Card</Text>
                    <Text>Pers Card</Text>
                    <Text>Book Card</Text>

                </View>
            </View>
        );
    }

}

export default connect(MapStateToProps)(ProfileComponent);