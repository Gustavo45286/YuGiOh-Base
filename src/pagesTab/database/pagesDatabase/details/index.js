import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {useRoute, useFocusEffect} from '@react-navigation/native'
import {Container,Detalhes,Imagem,CardImage,Name,Filler} from './styles';


const Details = ()=> {
    const route = useRoute();
    const card = route.params.card;

    const [cardInfo, setCardInfo] = useState({});

    useFocusEffect(
        React.useCallback(()=> {
            setCardInfo({
                name: card.name,
                race: card.race,
                type: card.type,
                desc: card.desc,
                img : card.card_images[0].image_url
            })
        },[])
    )

    return(
        <Container >
            <Imagem>
                <CardImage source={{uri: cardInfo.img} } resizeMode='contain'></CardImage>
            </Imagem>

            <Detalhes>
                <Name>{cardInfo.name}</Name>
                <Filler>{cardInfo.race} {cardInfo.type}</Filler>
                <Filler>{cardInfo.desc}</Filler>
            </Detalhes>
            

        </Container>
    );
}

export default Details;