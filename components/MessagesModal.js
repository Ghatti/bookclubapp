import React from 'react';
import { Modal, Alert, View, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../shared/stylesheet';


function MessagesModal(props){

    let message = props.message;


    if(message){
        return(
            <Modal 
                animationType='slide'
                visible={props.modalVisible}
                transparent={false}
                onRequestClose={props.toggleModal}
            >
                <View 
                    style={{...styles.background, flex: 1,justifyContent: 'center'}}>
    
                    <Card
                        title={message.title}
                        titleStyle={styles.title}
                        wrapperStyle={{padding:0}}
                        containerStyle={styles.container}
                        dividerStyle={{width: 0}}
                    >
    
                        <Text>{message.body}</Text>
    
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 25}}>

                            <Button 
                                title='Delete'
                                color='#d9534f'
                                onPress={() => {
                                    Alert.alert(
                                        'Delete Message',
                                        'Are you sure you want to delete this message?',
                                        [
                                            {text: 'No', style:'cancel'},
                                            {text: 'Yes', onPress: ()=> props.handleDelete(message.id)}
                                        ],
                                        {cancelable: false}

                                    )
                                }}
                            />
                            <Button 
                                title='Close'
                                color='#5bc0de'
                                onPress={props.toggleModal}
                            />
                            <Button 
                                title='Answer'
                                color='#5cb85c'
                                onPress={() => console.log('answer')}
                            />
                        </View>

                    </Card>
                </View>
            </Modal>
        );
    } else {
        return <View />
    }

}

export default MessagesModal;
