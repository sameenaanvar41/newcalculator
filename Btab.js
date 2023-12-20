import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/Home';
import Notification from './src/components/Notification';
import Settings from './src/components/Settings';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WhishList from './src/Whishlist';
import Profile from './src/components/Profile';


const MyTab=createBottomTabNavigator();
const MyDrawerTab=createDrawerNavigator();

const MyDrawer= () => {
    return(
            <MyDrawerTab.Navigator>
               <MyDrawerTab.Screen name="Home" component={Home} />
               <MyDrawerTab.Screen name="Wishlist" component={WhishList}/>
               <MyDrawerTab.Screen name="profile" component={Profile} />
             </MyDrawerTab.Navigator>
    
             );
};

const Btab= () => {
    return(
        <NavigationContainer>
            <MyTab.Navigator>
               <MyTab.Screen name="Home" component={Home} />
               <MyTab.Screen name="Notification" component={Notification} />
               <MyTab.Screen name="Settings" component={Settings} />
               <MyTab.Screen name="MyDrawer" component={MyDrawer} />
             </MyTab.Navigator>
        </NavigationContainer>
             );
};
export default Btab;