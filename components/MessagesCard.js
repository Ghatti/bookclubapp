
import React from 'react';
import { View, Text } from 'react-native';
import { Card, Badge } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

function MessagesCard(props){
    

    return (
        <Animatable.View animation='slideInLeft'>
        <Card
            key={props.index}
            containerStyle={{backgroundColor: '#E8AAFF', borderColor:"#A64AC9"}}
            >

            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                <View >
                    <Text style={{fontWeight: 'bold', fontSize:18}}>{props.message.title}</Text>
                    <Text style={{fontWeight: 'bold', fontSize:18, marginTop: 5}}>{props.message.author}</Text>
                </View>
        
                <View>
                    <Badge 
                        value='Read'
                        containerStyle={{backgroundColor: '#5cb85c'}}
                        onPress={() => {

                            props.selectMessage(props.message.id);
                            props.toggleModal();
                        }}
                    />
                    <Badge 
                        value='Delete'
                        containerStyle={{backgroundColor: '#d9534f', marginTop: 5}}
                        onPress={() => props.handleDelete(props.message.id)}
                    />
                </View>
            </View>
        </Card>
        </Animatable.View>
    );
}

export default MessagesCard;