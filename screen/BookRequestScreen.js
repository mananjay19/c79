import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import db from '../config'
import {fireBase} from 'firebase'
import MyHeader from '../component/myHeader'
export default class BookRequestScreen extends React.Component{
    constructor(){
        super()
        this.state={userId:fireBase.auth().currentUser.email,
            BookName='',
            reasonToRequest:''
            }
    }
    render(){
        return(
            <View>
                <MyHeader title='requestBook'></MyHeader>
                <KeyboardAvoidingView>
                    <TextInput
                    placeholder="Enter Book name"
                    maxLength={15}
                    onChangeText={(text)=>{
                      this.setState({
                          BookName:text
                      })
                    }}
                    >
                        </TextInput>
                    <TextInput
                    placeholder="reasonToRequest"
                    maxLength={8}
                    onChangeText={(text)=>{
                      this.setState({
                          reasonToRequest:text
                      })
                    }}
                    ></TextInput>
                    <TouchableOpacity
                    onPress={()=>{
                        
                    }}
                    >
                        <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}