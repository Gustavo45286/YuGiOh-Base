import React,{useState} from 'react';
import { Text, View,Button } from 'react-native';
import {useRoute, useFocusEffect} from '@react-navigation/native'

import Constants from 'expo-constants';

import {
    Container,
    CoinContainer,CoinText
} from './styles'

function Coin () {
    const route = useRoute();
    const [face,setFace] = useState( 
        () => {
            if(route.params.number===1){
                return 'Heads';
            }else{
                return 'Tails';
            }
        }
    );

    function coinAgain(num){
        if(num ===1){
            setFace('Heads');
        }else{
            setFace('Tails');
        }
    }


    return (
        <Container style={ {marginTop: Constants.statusBarHeight} }>
                <CoinContainer>
                    <CoinText>{face}</CoinText>
                </CoinContainer>
                
                <Button title={"Coin Again!"} color={'#ce324f'}onPress={ () => coinAgain((Math.floor(Math.random() * 2)+1))}></Button>
        </Container>
    
    );
}

export default Coin;