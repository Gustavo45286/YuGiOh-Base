import React from 'react'; 
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


import LifePoints from './pagesCalculator/lifePoints';
import Coin from './pagesCalculator/coin';
import Dice from './pagesCalculator/dice';

export default function CalculatorStack(){
    const Stack = createStackNavigator();

    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: 'white',
                    headerTransparent: true,
                    title:''
                }}
            >
                <Stack.Screen name="Life Points" component={LifePoints}></Stack.Screen>
                <Stack.Screen name="Coin" component={Coin}></Stack.Screen>
                <Stack.Screen name="Dice" component={Dice}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}