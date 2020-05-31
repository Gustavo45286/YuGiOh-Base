import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CalculatorStack from './pagesTab/calculator/calculatorStack';
import DatabaseStack from './pagesTab/database/databaseStack';

export default function RoutesTab(){
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#ce324f',
                    inactiveTintColor: '#ce324f8e',
                    backgroundColor: 'black',
                    labelStyle: {
                        backgroundColor:'#101010',
                        fontSize: 16,
                    

                    },
                    style:{
                        backgroundColor: '#101010',    
                    },
                    tabStyle:{
                        backgroundColor: '#101010',
                    }
                }}
            >
                <Tab.Screen name="Database" component={DatabaseStack}/>
                <Tab.Screen name="Calculadora" component={CalculatorStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}