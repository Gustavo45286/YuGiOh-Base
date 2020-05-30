import React, { useState,useEffect}  from 'react';
import { Text, View, Button,Image,FlatList } from 'react-native';

import ygoApi from '../../../../services/ygoApi'
import { useFocusEffect } from '@react-navigation/native';
import { set } from 'react-native-reanimated';

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

        let limit = 20;

        const response = await ygoApi.get('?&num='+limit+'&offset='+offSet);
        
        setCards([...cards,...response.data.data]);

        setOffSet(offSet+20);
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
        <View style={{ flex: 1,marginTop:24 }}>
            <FlatList
                data={cards}
                keyExtractor={card => String(card.name)}
                onEndReached={() =>loadCards()}
                onEndReachedThreshold={0.1}
                renderItem={
                    ({item: card}) =>(
                        <View >
                            <Button title={card.name} style={{fontSize: 18}}  onPress={ ()=> verDetalhes(card)}></Button>
                        </View>
                    )
                }
            />
            

        </View>
    );
}

export default AllCards;