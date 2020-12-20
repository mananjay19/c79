import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Icon} from 'react-native-elements';

const MyHeader=props=>{
    return(
        <Header 
           centerComponent={{text:props.title, style: {color:'white', textSize:20, fontWidth: bold}}}
           backgroundColor='blue'
        ></Header>
    )
}
export default MyHeader