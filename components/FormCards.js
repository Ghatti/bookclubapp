import React from 'react';
import { ScrollView, View, Text, Button} from 'react-native';
import { Card, FormLabel, FormInput } from 'react-native-elements';
import styles from '../shared/stylesheet';
import { Permissions, ImagePicker } from 'expo';


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

    return(

        <Card
            title='Account Settings'
            containerStyle={{backgroundColor: '#E8AAFF', borderColor:"#A64AC9"}}
            titleStyle={styles.title}
            dividerStyle={{width: 0}}
        >
            
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>

                <View style={{flexDirection: 'row'}}>
                    <FormLabel 
                        containerStyle={{width: 80}}
                        labelStyle={{color: 'black'}}
                    >
                        Email:
                    </FormLabel>

                    <FormInput
                        containerStyle={{width:'60%'}}
                        inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
                        placeholderTextColor='#666633'
                        value={props.formState.email}
                        placeholder={props.userData.email}
                        onChangeText={props.handleChange('email')}

                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <FormLabel 
                        containerStyle={{width: 80}}
                        labelStyle={{color: 'black'}}
                    >
                        Password:
                    </FormLabel>

                    <FormInput
                        containerStyle={{width:'60%'}}
                        inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
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
                        onPress={props.handleSubmit}
                    />

                </View>

            </ScrollView>
        </Card>

    );
}


export const PersCard = (props) => {
    return(

        <Card
            title='Personal Data'
            containerStyle={{backgroundColor: '#E8AAFF', borderColor:"#A64AC9"}}
            titleStyle={styles.title}
            dividerStyle={{width: 0}}
        >
            
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>

                <View style={{flexDirection: 'row'}}>
                    <FormLabel 
                        containerStyle={{width: 80}}
                        labelStyle={{color: 'black'}}
                    >
                        Name:
                    </FormLabel>

                    <FormInput
                        containerStyle={{width:'60%'}}
                        inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
                        placeholderTextColor='#666633'
                        value={props.formState.name}
                        placeholder={props.userData.name}
                        onChangeText={props.handleChange('name')}

                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <FormLabel 
                        containerStyle={{width: 80}}
                        labelStyle={{color: 'black'}}
                    >
                        Age:
                    </FormLabel>

                    <FormInput
                        containerStyle={{width:'60%'}}
                        inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
                        placeholderTextColor='#666633'
                        value={props.formState.age}
                        placeholder={props.userData.age}
                        onChangeText={props.handleChange('age')}

                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <FormLabel 
                        containerStyle={{width: 80}}
                        labelStyle={{color: 'black'}}
                    >
                        Country:
                    </FormLabel>

                    <FormInput
                        containerStyle={{width:'60%'}}
                        inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
                        placeholderTextColor='#666633'
                        value={props.formState.country}
                        placeholder={props.userData.country}
                        onChangeText={props.handleChange('country')}

                    />
                </View>
               

                <View style={{flexDirection: 'row'}}>
                    <FormLabel 
                        containerStyle={{width: 80}}
                        labelStyle={{color: 'black'}}
                    >
                        City:
                    </FormLabel>

                    <FormInput
                        containerStyle={{width:'60%'}}
                        inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
                        placeholderTextColor='#666633'
                        value={props.formState.city}
                        placeholder={props.userData.city}
                        onChangeText={props.handleChange('city')}

                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <FormLabel 
                        containerStyle={{width: 80}}
                        labelStyle={{color: 'black'}}
                    >
                        Profession:
                    </FormLabel>

                    <FormInput
                        containerStyle={{width:'60%'}}
                        inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
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
    return(
<Card
            title='Account Settings'
            containerStyle={{backgroundColor: '#E8AAFF', borderColor:"#A64AC9"}}
            titleStyle={styles.title}
            dividerStyle={{width: 0}}
        >
            
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>

                <View style={{flexDirection: 'row'}}>
                    <FormLabel 
                        containerStyle={{width: 80}}
                        labelStyle={{color: 'black'}}
                    >
                        Favorite Book:
                    </FormLabel>

                    <FormInput
                        containerStyle={{width:'60%'}}
                        inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
                        placeholderTextColor='#666633'
                        value={props.formState.fav}
                        placeholder={props.userData.fav}
                        onChangeText={props.handleChange('fav')}

                    />
                </View>

                                <View style={{flexDirection: 'row'}}>
                    <FormLabel 
                        containerStyle={{width: 80}}
                        labelStyle={{color: 'black'}}
                    >
                        Favorite Author:
                    </FormLabel>

                    <FormInput
                        containerStyle={{width:'60%'}}
                        inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
                        placeholderTextColor='#666633'
                        value={props.formState.author}
                        placeholder={props.userData.author}
                        onChangeText={props.handleChange('author')}

                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <FormLabel 
                        containerStyle={{width: 80}}
                        labelStyle={{color: 'black'}}
                    >
                        Favorite Genre:
                    </FormLabel>

                    <FormInput
                        containerStyle={{width:'60%'}}
                        inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
                        placeholderTextColor='#666633'
                        value={props.formState.genre}
                        placeholder={props.userData.genre}
                        onChangeText={props.handleChange('genre')}

                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <FormLabel 
                        containerStyle={{width: 80}}
                        labelStyle={{color: 'black'}}
                    >
                        Favorite Quote:
                    </FormLabel>

                    <FormInput
                        containerStyle={{width:'60%'}}
                        inputStyle={{borderBottomColor: "#666633", borderBottomWidth: 1, width: '100%'}}
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