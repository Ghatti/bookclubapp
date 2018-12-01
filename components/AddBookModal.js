import React, { Component } from 'react';
import { Modal, View, Text } from 'react-native';


function AddBookModal(props){

    return (
        <Modal
            animationType='slide'
            transparent={false}
            visible={props.visible}
            onRequestClose={() => props.toggleModal()}
            >

            <View>
                <Text>
                    AddBookModal
                </Text>
            </View>

        </Modal>
    );
}

export default AddBookModal;