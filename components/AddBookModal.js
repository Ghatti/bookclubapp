import React, { Component } from 'react';
import { Modal, View, Button } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';

class AddBookModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: "",
            author: ""
        };
    }

    reset = () => {
        this.setState({
            title: "",
            author: ""
        });
    }

    handleChange = (statePiece) => (value) => {
        this.setState({
            [statePiece]: value
        });
    };

    handleSubmit = () => {

        this.props.addBook({...this.state, list: this.props.list})
        this.reset();
        this.props.toggleModal();
    }

    render(){
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => this.props.toggleModal()}
                >

                <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#00000080'}}>

                    <View style={{backgroundColor: "#fccd04", padding: 20}}>
                        <View style={{flexDirection: 'row'}}>
                            <FormLabel
                                containerStyle={{width: 80}}
                                labelStyle={{color: 'black'}}> 
                                    Title:
                            </FormLabel>
                            <FormInput
                                containerStyle={{width:'60%'}}
                                inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
                                placeholderTextColor='#666633'
                                value={this.state.title}
                                placeholder='Title'
                                onChangeText={this.handleChange('title')}
                                />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <FormLabel 
                                containerStyle={{width: 80}}
                                labelStyle={{color: 'black'}}> 
                                    Author:
                            </FormLabel>
                            <FormInput
                                containerStyle={{width:'60%'}}
                                inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
                                placeholderTextColor='#666633'
                                value={this.state.author}
                                placeholder='Author'
                                onChangeText={this.handleChange('author')}/>
                        </View>

                        <View style={{width: '70%', alignSelf: 'center', marginTop: 25, flexDirection:'row', justifyContent: 'space-around'}}>
                            <Button 
                                title='Cancel'
                                color='#d9534f'
                                onPress={() => { 
                                    this.reset() 
                                    this.props.toggleModal();
                                }}/>
                            <Button 
                                title='Add'
                                color='#428bca'
                                onPress={this.handleSubmit}
                                />
                        </View>
                    </View>
                </View>

            </Modal>
        );
    }
}

export default AddBookModal;