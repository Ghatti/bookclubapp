import React, {Component} from 'react';
import { Card, Icon } from 'react-native-elements';
import { StyleSheet, ScrollView ,View, Text, FlatList, Image, Alert, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from '../shared/stylesheet'; 
import { removeBook, addBook } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';
import AddBookModal from './AddBookModal';


/* 
    TODO:
    
        * Add gesture responsiveness for book cards (left swipe to remove a book)
        * Add gesture responsiveness to the local header, so navigation becomes possible by swiping
        * Possibly rework navigation structure - Two bars at the top are lame, solution for tabs seems too improvised and transition to no addBookButton is terrible
        * Add animations so transitions feel smother

        
    */

const MapStateToProps = state => ({
    books: state.books
})

const MapDispatchToProps = dispatch => ({

    removeBook: (list, bookId) => dispatch(removeBook(list, bookId)),
    addBook: (list, bookData) => dispatch(addBook(list, bookData))
});

/* Types os lists */

const OPTIONS = ['my', 'wanted', 'offers'];

function LocalHeader(props){

    let header = props.list === 0 ? 'Your Books' : props.list === 1 ? 'Wanted Books' : 'Your Offers';

    let addBookButton = <Button 
                            style={{alignSelf: 'center'}}
                            onPress={props.toggleModal}
                            title='Add Book'
                            color='#428bca'
                        />;
    return (
    
        <View style={localStyles.header}>

            {/* Custom Tab Nav Component. Feels bad */}

            <View style={localStyles.headerNavBox}>
                <Icon 
                    name='chevron-left'
                    type='font-awesome'
                    size={16}
                    color='white'
                    onPress={() => props.setList(-1)}
                />

                <Text style={localStyles.headerTitle}>{header}</Text>

                <Icon 
                    name='chevron-right'
                    type='font-awesome'
                    size={16}
                    color='white'
                    onPress={() => props.setList(1)}
                />
            </View>

            {props.list !== 2? addBookButton : null}

        </View>
    );

};

class BooksComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: 0,
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

    /* User this.state.list as index to retrieve a list type from the OPTIONS list.
    This function should be used anytime you want to have access to the list (to update or retrieve data*/

    getList = () => {

        return OPTIONS[this.state.list];
    }

    /* Anytime this.state.list is updated, this function makes sure it doesn't exceed the array length*/

    setList = (val) => {

        
        if(val === -1 && this.state.list === 0)
            this.setState({ list: OPTIONS.length -1 });
        else
            this.setState({list: (this.state.list+val)%OPTIONS.length});
    }

    renderBooks = ({item, index}) => {

        return (
            <Card 
                key={index} 
                title={item.title}
                titleStyle={styles.title}
                containerStyle={{backgroundColor: '#E8AAFF', borderColor:"#A64AC9"}}
                dividerStyle={{width: 0}}
            >
                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                    
                    <Image source={{uri: baseUrl + item.cover}} style={{width: 110, height: 160}}/>
                    
                    <View style={{alignSelf: 'stretch', justifyContent: 'space-around', maxWidth: "50%"}}>
                        <Text style={{fontWeight: 'bold'}}>Author: {item.author}</Text>
                        <Text style={{fontWeight: 'bold'}}>Rating: {item.rating}</Text>
                        <Button 

                            onPress={() => {
                                Alert.alert(
                                    'Remove Book?',
                                    'You are about to remove the book ' + item.title + ". Are you sure?",
                                    [
                                        {text: 'No', style:'cancel'},
                                        {text: 'Yes', onPress:()=> this.props.removeBook(this.getList(), item.id)}
                                    ],
                                    {cancelable: false}
                                );
                                
                            }}
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
                        list={this.getList()}
                        addBook={this.props.addBook}
                    />

                    <LocalHeader toggleModal={this.toggleModal} setList={this.setList} list={this.state.list}/>
                    
                    <FlatList
                        data={booklist[this.getList()]}
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
        fontSize: 20, 
        textAlign: 'center', 
        color: 'white',
        width: "80%"
    },
    headerNavBox: {
        flexDirection:'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width:'55%'
    }

});

export default connect(MapStateToProps, MapDispatchToProps)(BooksComponent);