import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Abas/welcome.js'
import Login from './Abas/login.js';
import Register from './Abas/register.js';
import ContaCriada from './Abas/contaCriada.js';
import News from './Abas/News.js';
import EditProfile from './Abas/EditProfile.js';
import Home from './Abas/Home.js';
import AddProduct from './Abas/AddProduct.js';
import Product from './Abas/Product.js';
import NewsItem from './Abas/NewsItem.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default function App() {
  const Stack = createStackNavigator();
  return (
    
     <AddProduct/>
     
  );
}


