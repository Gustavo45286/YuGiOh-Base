import React from 'react';
import { Text, View, Button } from 'react-native';

function AllCards ({navigation}) {                   
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Database!</Text>
        <Button
                title="ir para detalhes"
                onPress={ () => navigation.navigate('Details') }
            ></Button>
    </View>
    );
}

export default AllCards;