import React from 'react';
import { Text, View } from 'react-native';

import {MonsterDetails} from './styles';

function monsterCard(carta){
    if((carta.type === 'Spell Card')||(carta.type === 'Trap Card')){
        return<View></View>
    }else if(carta.attribute !== ''){
        return(
            <MonsterDetails>LEVEL {carta.level}  ATTRIBUTE {carta.attribute}  ATK/{carta.atk} DEF/{carta.def}</MonsterDetails>
        )
    }
}

const RenderMonster = props =>  {
    return monsterCard(props.card)
   
}
export default RenderMonster;
