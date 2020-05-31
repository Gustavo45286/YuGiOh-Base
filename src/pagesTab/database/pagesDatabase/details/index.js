import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {useRoute, useFocusEffect} from '@react-navigation/native'
import {Container,Detalhes,Imagem,CardImage,Name,Effect,Type,PriceDetails,Website,WebsiteName,Price} from './styles';
import Constants from 'expo-constants';

import RenderMonster from './renderMonster';
/*
    useFocusEffect(
        React.useCallback(()=> {
            loadCards();
        },[])
    )

*/
const Details = ()=> {
    const route = useRoute();
    const card = route.params.card;

    const [cardInfo, setCardInfo] = useState({});

    const [cardPrices, setCardPrices] = useState({});

    useFocusEffect(
        React.useCallback(()=> {
            if((route.params.card.type !== 'Spell Card')||(route.params.card.type !== 'Trap Card') ){
                setCardInfo({
                    name: card.name,
                    race: card.race,
                    type: card.type,
                    desc: card.desc,
                    img : card.card_images[0].image_url,
                    atk : card.atk,
                    def : card.def,
                    attribute: card.attribute,
                    level: card.level,

                })
            }else{
                setCardInfo({
                    name: card.name,
                    race: card.race,
                    type: card.type,
                    desc: card.desc,
                    img : card.card_images[0].image_url,
                    atk : '',
                    def : '',
                    attribute: '',
                    level: '',
                    
                })
            }
            setCardPrices(card.card_prices[0]);
        },[])
    )

    

    return(
        <Container style={ {marginTop: Constants.statusBarHeight} } >
            <Imagem>
                <CardImage source={{uri: cardInfo.img} } resizeMode='contain'></CardImage>
            </Imagem>

            <Detalhes>
                <Name>{cardInfo.name}</Name>
                <RenderMonster card = {card}/>
                <Type>{cardInfo.race} {cardInfo.type}</Type>
                <Effect>{cardInfo.desc}</Effect>
            </Detalhes>
            
            <PriceDetails>
                <Name>Prices</Name>
                <Type>Average prices for the following websites:</Type>
                <Website>
                    <WebsiteName>Amazon</WebsiteName>
                    <Price>{cardPrices.amazon_price}$</Price>
                </Website>
                <Website>
                    <WebsiteName>Card Market</WebsiteName>
                    <Price>{cardPrices.cardmarket_price}$</Price>
                </Website>
                <Website>
                    <WebsiteName>Cool Stuff</WebsiteName>
                    <Price>{cardPrices.coolstuffinc_price}$</Price>
                </Website>
                <Website>
                    <WebsiteName>Ebay</WebsiteName>
                    <Price>{cardPrices.ebay_price}$</Price>
                </Website>
                <Website>
                    <WebsiteName>TCG Player</WebsiteName>
                    <Price>{cardPrices.tcgplayer_price}$</Price>
                </Website>
                
                
            </PriceDetails>

        </Container>
    );
}

export default Details;