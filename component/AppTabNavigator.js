import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tab'
import BookDonationScreen from '../screen/BookDonationScreen'
import BookRequestScreen from '../screen/BookRequestScreen'

export const AppTabNavigator=createBottomTabNavigator({
    donationBooks : {
        screen:BookDonationScreen,
        navigationOptions:{
            tabBarIcon:<Image source ={require(

            )} style={{width:20,height:20}}></Image>,
            tabBarLabel:"donateBooks"
        }
    },
    BooksRequest : {
        screen:BookRequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source ={require(

            )} style={{width:20,height:20}}></Image>,
            tabBarLabel:"RequestBooks"
        }
    },
})