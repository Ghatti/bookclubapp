import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import styles from '../shared/stylesheet';
import MessagesCard from './MessagesCard';
import MessagesModal from './MessagesModal';
import { deleteMessage } from '../redux/ActionCreators';

const MapStateToProps = state => ({

    messages: state.messages
});

const MapDispatchToProps = dispatch => ({
    deleteMessage: (mesId) => dispatch(deleteMessage(mesId))
});

class MessagesComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            selectedMessage: null
        };
    }
    static navigationOptions = {
        title: 'Inbox'
    }

    toggleModal = () => {
        this.setState(
            {
                modalVisible: !this.state.modalVisible
            }
        );
    }

    selectMessage = (mesId) => {
        this.setState(
            {selectedMessage: mesId}
        )
    }

    handleDelete = (mesId) => {
        
        this.props.deleteMessage(mesId);
    }

    renderMessageBoxes = ({item, index}) => {

        return (
            <MessagesCard 
                index={index}
                message={item}
                toggleModal={this.toggleModal}
                handleDelete={this.handleDelete}
                selectMessage={this.selectMessage}
            />
        );
    }

    render(){

        return (
            <View style={{...styles.background, flex: 1}}>

                <MessagesModal 
                    modalVisible={this.state.modalVisible}
                    toggleModal={this.toggleModal}
                    handleDelete={this.handleDelete}
                    message={this.props.messages.messages.filter( message => {
                        return message.id === this.state.selectedMessage;
                    })[0]}
                />

                <FlatList
                    data={this.props.messages.messages}
                    keyExtractor={(message) => message.id.toString()}
                    renderItem={this.renderMessageBoxes}
                />

            </View>
        );
    }

}

export default connect(MapStateToProps, MapDispatchToProps)(MessagesComponent);