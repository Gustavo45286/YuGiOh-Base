import React from 'react'; 
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import AllCards from './pagesDatabase/allCards';
import Details from './pagesDatabase/details';

export default function DatabaseStack(){
    const Stack = createStackNavigator();

    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator >
                <Stack.Screen name="All Cards" component={AllCards}></Stack.Screen>
                <Stack.Screen name="Details" component={Details}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}