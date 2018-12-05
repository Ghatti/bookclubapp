import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Button } from 'react-native';
import { AccCard, PersCard,BookCard } from './FormCards';
import styles from '../shared/stylesheet';
import { submitForm } from '../redux/ActionCreators';

const MapStateToProps = state => ({
    user: state.user
})

const MapDispatchToProps = dispatch => ({
    submitForm: (form, formData) => dispatch(submitForm(form, formData))
})

class ProfileComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            form: 'acc',
            acc: {
                email: '',
                pass: '',
                pic: ''
            },
            pers: {
                name: '',
                age: '',
                country: '',
                city: '',
                prof: '',
            },
            books: {
                fav: '',
                author: '',
                genre: '',
                quote: ''

            }
        }
    }

    static navigationOptions = {
        title: 'Profile'
    }

    setForm = (form) => {
        this.setState({form: form});
    }

    
    handleChange = (form) => (field) => (value) => {


        this.setState({
            [form]: {...this.state[form], [field]: value}
        });
    }

    handleSubmit = (form) => (formData) => {
        this.props.submitForm(form, formData);
    }

    render(){

        

        if(this.props.user.loading){
            return <View />
        }
        else{
            return (
                <View style={{...styles.background, flex: 1}}>
                    <ScrollView>
                   <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 25, marginBottom: 25}}>

                        <Button 
                            title='Account Info'
                            onPress={() => this.setForm('acc')}/>
                        <Button 
                            title='Personal'
                            onPress={() => this.setForm('pers')}/>
                        <Button 
                            title='Book Preferences'
                            onPress={() => this.setForm('books')}/>
                                    
                    </View>

                    <View>

                        {
                            this.state.form === 'acc'?
                                <AccCard 
                                    userData={this.props.user.user.acc}
                                    formState={this.state.acc}
                                    handleChange={this.handleChange('acc')}
                                    handleSubmit={this.handleSubmit('acc')}/>
                            : this.state.form === 'pers' ?
                                <PersCard 
                                userData={this.props.user.user.pers}
                                formState={this.state.pers}
                                handleChange={this.handleChange('pers')}
                                handleSubmit={this.handleSubmit('pers')}/>
                            : <BookCard 
                                userData={this.props.user.user.books}
                                formState={this.state.books}
                                handleChange={this.handleChange('books')}
                                handleSubmit={this.handleSubmit('books')}/>
                        
                        }

                    </View>
                    </ScrollView>
                </View>
            );
        }
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(ProfileComponent);