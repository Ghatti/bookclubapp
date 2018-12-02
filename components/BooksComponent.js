import React, {Component} from 'react';
import { Card, Icon } from 'react-native-elements';
import { StyleSheet, ScrollView ,View, Text, FlatList, Image, Modal, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from '../shared/stylesheet'; 
import { removeBook, addBook } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';
import AddBookModal from './AddBookModal';

const MapStateToProps = state => ({
    books: state.books
})

const MapDispatchToProps = dispatch => ({

    removeBook: (list, bookId) => dispatch(removeBook(list, bookId)),
    addBook: (list, bookData) => dispatch(addBook(list, bookData))
});

class BooksComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: 'my',
            modalVisible: false
        };
    }

    static navigationOptions = {
        title: 'Books',
        drawerLabel: 'Books',
        drawerIcon: () => {
            <Icon name='book' type='font-awesome' size={24}
            iconStyle={{ color: 'white', marginLeft: 30 }} 
            />
        }
    }

    toggleModal = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    }

    renderBooks = ({item, index}) => {

        return (
            <Card 
                key={index} 
                title={item.title}
                titleStyle={styles.title}
                containerStyle={{backgroundColor: '#E8AAFF'}}
            >
                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                    
                    <Image source={{uri: baseUrl + item.cover}} style={{width: 110, height: 160}}/>
                    
                    <View style={{alignSelf: 'stretch', justifyContent: 'space-around', maxWidth: "50%"}}>
                        <Text style={{fontWeight: 'bold'}}>Author: {item.author}</Text>
                        <Text style={{fontWeight: 'bold'}}>Rating: {item.rating}</Text>
                        <Button 

                            onPress={() => this.props.removeBook(this.state.list, item.id)}
                            title='Remove Book'
                            color="#d9534f"
                        />
                    </View>
                </View>
            </Card>
               
        );
    }

    render(){

        let booklist = this.props.books;
        
        if(!booklist.loading){

            return (
                <ScrollView style={styles.background}>

                    <AddBookModal
                        modalVisible={this.state.modalVisible}
                        toggleModal={this.toggleModal}
                        list={this.state.list}
                        addBook={this.props.addBook}
                    />

                    <View style={localStyles.header}>
                        <Text style={localStyles.headerTitle}>Your Books</Text>
                        <Button 
                            style={{alignSelf: 'center'}}
                            onPress={this.toggleModal}
                            title='Add Book'
                            color='#428bca'

                        />
                    </View>
                    
                    <FlatList
                        data={booklist[this.state.list]}
                        renderItem={this.renderBooks}
                        keyExtractor={(book) => book.id.toString()}
                
                    />
                </ScrollView>
            );     
        }
        else{
            return (
                <View/>
            );
        }

    }

}

const localStyles = StyleSheet.create({

    header: {
        marginTop: 20,
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#A64AC9',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    headerTitle: {
        fontWeight: 'bold', 
        fontSize: 18, 
        textAlign: 'left', 
        color: 'white'
    }

});

export default connect(MapStateToProps, MapDispatchToProps)(BooksComponent);