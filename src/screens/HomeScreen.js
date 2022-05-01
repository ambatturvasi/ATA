import React, { Component } from "react";
import { View, Text } from "react-native-web";

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeScreen from './HomeScreen';
import TravelScreen from './src/screens/TravelScreen';
import ServiceScreen from './src/screens/ServiceScreen';
import ProfileScreen from './src/screens/ProfileScreen';


class HomeScreen extends Component
{
    render()
    {
        return(
            <View style={{flex:1, justifyContent:'center' , alignItem: 'center'}}>
                <Text style={{fontSize:40}}>Home Screen</Text>
            </View>
        );
    }
}

const TabNavigator=createMaterialBottomTabNavigator(
    {
        Home :{screen:HomeScreen,
            navigationOptions:{
                tabBarLabel:'Home',
                activeColor:'#ff0000',
                inactiveColor:'#0000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'home'} size={25} style={{color:'#ff0000'}}/>
                    </View>
                )
            }
        },

        Travel :{screen:TravelScreen,
            navigationOptions:{
                tabBarLabel:'Home',
                activeColor:'#ff0000',
                inactiveColor:'#0000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'home'} size={25} style={{color:'#ff0000'}}/>
                    </View>
                )
            }
        },

        Service :{screen:ServiceScreen,
            navigationOptions:{
                tabBarLabel:'Home',
                activeColor:'#ff0000',
                inactiveColor:'#0000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'home'} size={25} style={{color:'#ff0000'}}/>
                    </View>
                )
            }
        },

        Profile :{screen:ProfileScreen,
            navigationOptions:{
                tabBarLabel:'Home',
                activeColor:'#ff0000',
                inactiveColor:'#0000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'person'} size={25} style={{color:'#ff0000'}}/>
                    </View>
                )
            }
        }
    }
);

export default createAppContainer(TabNavigator);