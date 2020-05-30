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
                    activeTintColor: 'white',
                    inactiveTintColor: 'black',
                    backgroundColor: 'black',
                    labelStyle: {
                        backgroundColor:'#ce324f',
                        fontSize: 16,
                    

                    },
                    style:{
                        backgroundColor: '#ce324f',    
                    },
                    tabStyle:{
                        backgroundColor: '#ce324f',
                    }
                }}
            >
                <Tab.Screen name="Database" component={DatabaseStack}/>
                <Tab.Screen name="Calculadora" component={CalculatorStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}