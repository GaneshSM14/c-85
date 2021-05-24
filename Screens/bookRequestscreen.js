import * as React from 'react'
import{View,Text, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BookDonateScreen from './bookDonatescreen'
import db from '../Config'
import firebase from 'firebase'
import MyHeader from '../Components/Header'
export default class BookRequestScreen extends React.Component{
    constructor(){
        super()
        this.state={
            BookName:'',
            Reason:''
        }
    }
    addRequest=()=>{
        db.collection('Requests').add({
            Name:this.state.BookName,
            Reason:this.state.Reason,
            Userid:firebase.auth().currentUser.email,
            Requestid: Math.random().toString(36).substring(7)
        })

        this.setState({BookName:'', Reason:''})
    }
    render(){
        return(
            <View>
                 <MyHeader navigation={this.props.navigation} title="Book Request Screen "/>
                <TextInput value={this.state.BookName}onChangeText={(Text)=>{this.setState({BookName:Text})}} placeholder="BookName"/>
                <TextInput value={this.state.Reason}onChangeText={(Text)=>{this.setState({Reason:Text})}}placeholder="Reason to Request"/>
                <TouchableOpacity onPress={()=>{this.addRequest()}}>
                    <Text>
                        Request
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}