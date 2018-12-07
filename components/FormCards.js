import React from 'react';
import { ScrollView, View, Button, StyleSheet, PanResponder} from 'react-native';
import { Card, FormLabel, FormInput } from 'react-native-elements';
import styles from '../shared/stylesheet';
import { Permissions, ImagePicker } from 'expo';


const setPanResponder = (handleNav) => {

    const recognizeDrag = ({ moveX, moveY, dx, dy }) => {
        if ( dx < -150 )
            return 'left';
        else if (dx > 150)
            return 'right';
        else
            return false;
    }
    
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gestureState) => {
            return true;
        },
        onPanResponderEnd: (e, gestureState) => {
    
            let drag = recognizeDrag(gestureState);
            if (drag == 'left')
                handleNav('left');
            else if (drag == 'right')
                handleNav('right');
        }
    })

    return panResponder;
}


export const AccCard = (props) => {

    const pickImage = async () => {

        let permission = await Expo.Permissions.getAsync(Permissions.CAMERA_ROLL); 

        if(permission.status !== 'granted'){

            permission = Expo.Permissions.askAsync(Permissions.CAMERA_ROLL); 
        }


        if(permission.status == 'granted'){

            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
              });
              
              if(!result.cancelled){

                props.handleChange('pic')(result);
              }
        }

    };

    const gestureHandler = setPanResponder(props.handleNav);
    
    return(

        <Card
            title='Account Settings'
            containerStyle={{backgroundColor: '#E8AAFF', borderColor:"#A64AC9"}}
            titleStyle={styles.title}
            dividerStyle={{width: 0}}
            {...gestureHandler.panHandlers}
        >
            
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>

                <View style={localStyles.formRow}>
                    <FormLabel 
                        labelStyle={{color: 'black'}}
                    >
                        Email:
                    </FormLabel>

                    <FormInput
                        
                        inputStyle={localStyles.input}
                        placeholderTextColor='#666633'
                        value={props.formState.email}
                        placeholder={props.userData.email}
                        onChangeText={props.handleChange('email')}

                    />
                </View>

                <View style={localStyles.formRow}>
                    <FormLabel 
                        
                        labelStyle={{color: 'black'}}
                    >
                        Password:
                    </FormLabel>

                    <FormInput
                        inputStyle={localStyles.input}
                        placeholderTextColor='#666633'
                        value={props.formState.pass}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={props.handleChange('pass')}
                    />
                </View>

                <View style={{marginTop: 20, width: '50%'}}>

                    <Button 
                        title='Change Avatar'
                        onPress={pickImage}
                    />

                </View>

                 <View style={{marginTop: 20}}>

                    <Button 
                        containerStyle={{width: '50%'}}
                        title='Submit'
                        onPress={() => props.handleSubmit()}
                    />

                </View>

            </ScrollView>
        </Card>

    );
}


export const PersCard = (props) => {

    const gestureHandler = setPanResponder(props.handleNav);

    return(

        <Card
            title='Personal Data'
            containerStyle={{backgroundColor: '#E8AAFF', borderColor:"#A64AC9"}}
            titleStyle={styles.title}
            dividerStyle={{width: 0}}
            {...gestureHandler.panHandlers}
        >
            
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>

                <View style={localStyles.formRow}>
                    <FormLabel 
                        labelStyle={{color: 'black'}}
                    >
                        Name:
                    </FormLabel>

                    <FormInput
                        inputStyle={localStyles.input}
                        placeholderTextColor='#666633'
                        value={props.formState.name}
                        placeholder={props.userData.name}
                        onChangeText={props.handleChange('name')}

                    />
                </View>

                <View style={localStyles.formRow}>
                    <FormLabel 
                        labelStyle={{color: 'black'}}
                    >
                        Age:
                    </FormLabel>

                    <FormInput
                        inputStyle={localStyles.input}
                        placeholderTextColor='#666633'
                        value={props.formState.age}
                        placeholder={props.userData.age}
                        onChangeText={props.handleChange('age')}

                    />
                </View>

                <View style={localStyles.formRow}>
                    <FormLabel 
                        labelStyle={{color: 'black'}}
                    >
                        Country:
                    </FormLabel>

                    <FormInput
                        inputStyle={localStyles.input}
                        placeholderTextColor='#666633'
                        value={props.formState.country}
                        placeholder={props.userData.country}
                        onChangeText={props.handleChange('country')}

                    />
                </View>
               

                <View style={localStyles.formRow}>
                    <FormLabel 
                        labelStyle={{color: 'black'}}
                    >
                        City:
                    </FormLabel>

                    <FormInput
                        inputStyle={localStyles.input}
                        placeholderTextColor='#666633'
                        value={props.formState.city}
                        placeholder={props.userData.city}
                        onChangeText={props.handleChange('city')}

                    />
                </View>

                <View style={localStyles.formRow}>
                    <FormLabel 
                        labelStyle={{color: 'black'}}
                    >
                        Profession:
                    </FormLabel>

                    <FormInput
                        inputStyle={localStyles.input}
                        placeholderTextColor='#666633'
                        value={props.formState.prof}
                        placeholder={props.userData.prof}
                        onChangeText={props.handleChange('prof')}

                    />
                </View>

                 <View style={{marginTop: 20}}>

                    <Button 
                        containerStyle={{width: '50%'}}
                        title='Submit'
                        onPress={props.handleSubmit}
                    />

                </View>

            </ScrollView>
        </Card>

    );
}

export const BookCard = (props) => {
    
    const gestureHandler = setPanResponder(props.handleNav);
    
    return(

        <Card
            title='Book preferences'
            containerStyle={{backgroundColor: '#E8AAFF', borderColor:"#A64AC9"}}
            titleStyle={styles.title}
            dividerStyle={{width: 0}}
            {...gestureHandler.panHandlers}
        >
            
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>

                <View style={localStyles.formRow}>
                    <FormLabel 
                        labelStyle={{color: 'black'}}
                    >
                        Favorite Book:
                    </FormLabel>

                    <FormInput
                        inputStyle={localStyles.input}
                        placeholderTextColor='#666633'
                        value={props.formState.fav}
                        placeholder={props.userData.fav}
                        onChangeText={props.handleChange('fav')}

                    />
                </View>

                <View style={localStyles.formRow}>
                    <FormLabel 
                        labelStyle={{color: 'black'}}
                    >
                        Favorite Author:
                    </FormLabel>

                    <FormInput
                        inputStyle={localStyles.input}
                        placeholderTextColor='#666633'
                        value={props.formState.author}
                        placeholder={props.userData.author}
                        onChangeText={props.handleChange('author')}

                    />
                </View>

                <View style={localStyles.formRow}>
                    <FormLabel 
                        labelStyle={{color: 'black'}}
                    >
                        Favorite Genre:
                    </FormLabel>

                    <FormInput
                        inputStyle={localStyles.input}
                        placeholderTextColor='#666633'
                        value={props.formState.genre}
                        placeholder={props.userData.genre}
                        onChangeText={props.handleChange('genre')}

                    />
                </View>

                <View style={localStyles.formRow}>
                    <FormLabel 
                        labelStyle={{color: 'black'}}
                    >
                        Favorite Quote:
                    </FormLabel>

                    <FormInput
                        inputStyle={localStyles.input}
                        placeholderTextColor='#666633'
                        value={props.formState.quote}
                        placeholder={props.userData.quote}
                        onChangeText={props.handleChange('quote')}

                    />
                </View>

                 <View style={{marginTop: 20}}>

                    <Button 
                        containerStyle={{width: '50%'}}
                        title='Submit'
                        onPress={props.handleSubmit}
                    />

                </View>

            </ScrollView>
        </Card>
    );
}

const localStyles = StyleSheet.create({

    formRow:{
        alignItems: 'center'
    },
    input: {
        borderBottomColor: "#666633", 
        borderBottomWidth: 1, 
        width: 250
    }
});