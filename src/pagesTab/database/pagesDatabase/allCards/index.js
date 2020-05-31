import React, { useState,useEffect}  from 'react';
import { Text, View, Button,Image,FlatList,TouchableHighlight } from 'react-native';

import ygoApi from '../../../../services/ygoApi'
import { useFocusEffect } from '@react-navigation/native';
import { set } from 'react-native-reanimated';

import {Container,ListaCards,Header,Logo,Description,ButtonContainer,ButtonText,CardDetails,CardDetailsText,Botao} from './styles';

import Constants from 'expo-constants';

function AllCards ({navigation}) {  

    const [cards, setCards] = useState([]);
    const [total,setTotal] = useState(0);
    const [offSet,setOffSet] = useState(0);
    const [loading,setloading] = useState(false);
    async function loadCards(){

        const totalCartas = 10000;

        if(loading){
            return;
        }
            
        if(total>0 && cards.length > totalCartas){
            return;
        }

        setloading(true);

        let limit = 50;

        const response = await ygoApi.get('?&num='+limit+'&offset='+offSet);
        
        setCards([...cards,...response.data.data]);

        setOffSet(offSet+50);
        setloading(false);

    }

    function verDetalhes(carta){
        if(carta != undefined){
            navigation.navigate('Details',{card: carta});
        }
    }

    useEffect(()=> {
        loadCards();
    },[])
    

    return (
        <Container style={ {marginTop: Constants.statusBarHeight}}>
            <Header>
                <Logo>Yu-Gi-Oh!-Base!</Logo>
                <Description>A complete database for prices and card information</Description>
            </Header>
            <CardDetails>
                <CardDetailsText>
                    Artwrok                        
                </CardDetailsText>
                <CardDetailsText>
                    Name                            
                </CardDetailsText>
            </CardDetails>
            <ListaCards>
                <FlatList
                    data={cards}
                    keyExtractor={card => String(card.name)}
                    onEndReached={() =>loadCards()}
                    onEndReachedThreshold={0.1}
                    renderItem={
                        ({item: card}) =>(
                            <TouchableHighlight  onPress={ ()=> verDetalhes(card)} onLongPress={() => verDetalhes(card)}> 
                                <ButtonContainer>
                                    <Image style={{height: 130,width: 90}} source={{uri: card.card_images[0].image_url}}></Image>
                                    <ButtonText>{card.name}</ButtonText>
                                </ButtonContainer> 
                            </TouchableHighlight>
                        )
                    }
                />
            </ListaCards>
            
            

        </Container>
    );
}

export default AllCards;