import React from 'react';
import { Text, View,Button } from 'react-native';

function LifePoints ({navigation}) {
                                
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Life points!</Text>
        <Button title="Dice Roll!" onPress={ () => navigation.navigate('Dice') }></Button>
        <Button title="Coin Flip" onPress={ () => navigation.navigate('Coin') }></Button>
    </View>
    );
}

export default LifePoints;