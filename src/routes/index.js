import React,{Component} from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Route=createStackNavigator(
    {
        Login:Login,
        Register:Register,
        Dashboard:Dashboard,
    },
    {
        initialRouteName:'Login'
    },

);

const RouterConfig=createAppContainer(Route);

export default RouterConfig;

