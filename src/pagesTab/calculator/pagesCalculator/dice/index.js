import React,{useState} from 'react';
import { Text, View,Button } from 'react-native';
import {useRoute, useFocusEffect} from '@react-navigation/native'

import Constants from 'expo-constants';

import {
    Container,
    DiceContainer,DiceText
} from './styles'



function Dice ({navigation}) {
    const route = useRoute(); 
    const [num,setNum] = useState(route.params.number);


    return (
        <Container style={ {marginTop: Constants.statusBarHeight} }>
                <DiceContainer>
                    <DiceText>{num}</DiceText>
                </DiceContainer>
                

                <Button title={"Dice Again!"} color={'#ce324f'}onPress={ () => setNum((Math.floor(Math.random() * 6)+1))}></Button>
        </Container>
    
    );
}

export default Dice;