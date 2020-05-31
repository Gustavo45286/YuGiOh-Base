import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CalculatorStack from './pagesTab/calculator/calculatorStack';
import DatabaseStack from './pagesTab/database/databaseStack';

import Icon from '@expo/vector-icons/AntDesign';

export default function RoutesTab(){
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator

                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Database') {
                        iconName = focused
                        ? 'database'
                        : 'database';
                    } else if (route.name === 'Calculator') {
                        iconName = focused ? 'calculator' : 'calculator';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                    },
                })}






                tabBarOptions={{
                    activeTintColor: '#ce324f',
                    inactiveTintColor: '#ce324f8e',
                    backgroundColor: 'black',
                    labelStyle: {
                        
                        backgroundColor:'#101010',
                        fontSize: 14,
                    },
                    style:{
                        backgroundColor: '#101010',
                        margin: 0,
                        height: 60,
                        borderTopWidth: 0,
                        paddingTop: 3,
                        paddingBottom: 4,
                        height: 60,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 20,
                        shadowOffset: { width: 0, height: 0 }
                        
                    }
                }}
            >
                <Tab.Screen name="Database" component={DatabaseStack}/>
                <Tab.Screen name="Calculator" component={CalculatorStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}