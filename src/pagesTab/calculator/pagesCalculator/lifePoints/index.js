import React, { useState } from 'react';
import { Text, View,Button,TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import {
    Container,
    ButtonContainer,ButtonContainerRed,ButtonText,
    NumberContainer,NumberText,
    ContainerLifeValue,LifeText,ClearLifeValue,ClearLifeValueText,
    ContainerChangeValue,ChangeText,ClearChangeValue,ClearChangeValueText,
    ContainerOperations,Calc,Func,
    ContainerCoinDice,ButtonCoinDice,TextCoinDice
} from './styles'

function LifePoints ({navigation}) {
    
    const [change, setChange] = useState({
        value : 0,
    });

    function addChange(number){
        setChange({
            value : (change.value + number)
        })
    }

    function resetChange(){
        setChange({
            value : 0
        })
    }
    const [life, setLife] = useState({
        value : 8000,
    });

    function resetLife(){
        setLife({
            value : 8000
        })
    }

    function addLife(){
        setLife({
            value : (life.value + change.value)
        });
        resetChange();
    }

    function removeLife(){
        setLife({
            value : (life.value - change.value)
        });
        resetChange();
    }

    function doubleLife(){
        setLife({
            value : (life.value *2)
        });
        
    }

    function halfLife(){
        setLife({
            value : (life.value /2)
        });
        
    }


    return (
        <Container style={ {marginTop: Constants.statusBarHeight} }>

            <ContainerLifeValue >
                <LifeText> {life.value}</LifeText>

                <TouchableHighlight onPress={ () => resetLife() }>
                    <ClearLifeValue>
                         <ClearLifeValueText>R</ClearLifeValueText>
                    </ClearLifeValue>
                </TouchableHighlight>

            </ContainerLifeValue>

            <ContainerChangeValue >
                <ChangeText> {change.value}</ChangeText>
                
                <TouchableHighlight onPress={ () => resetChange() }>
                    <ClearChangeValue>
                         <ClearChangeValueText>C</ClearChangeValueText>
                    </ClearChangeValue>
                </TouchableHighlight>

            </ContainerChangeValue>
            
            <ContainerOperations>

                <Calc>

                    <TouchableHighlight onPress={ () => addChange(4000) }>
                        <NumberContainer>
                            <NumberText>4000</NumberText>
                        </NumberContainer>
                    </TouchableHighlight>


                    <TouchableHighlight onPress={ () => addChange(2000) }>
                        <NumberContainer>
                            <NumberText>2000</NumberText>
                        </NumberContainer>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={ () => addChange(1000) }>
                        <NumberContainer>
                            <NumberText>1000</NumberText>
                        </NumberContainer>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={ () => addChange(800) }>
                        <NumberContainer>
                            <NumberText>800</NumberText>
                        </NumberContainer>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={ () => addChange(500) }>
                        <NumberContainer>
                            <NumberText>500</NumberText>
                        </NumberContainer>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={ () => addChange(200) }>
                        <NumberContainer>
                            <NumberText>200</NumberText>
                        </NumberContainer>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ () => addChange(100) }>
                        <NumberContainer>
                            <NumberText>100</NumberText>
                        </NumberContainer>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ () => addChange(50) }>
                        <NumberContainer>
                            <NumberText>50</NumberText>
                        </NumberContainer>
                    </TouchableHighlight>
                    
                </Calc>

                <Func>
                    <TouchableHighlight onPress={ () => addLife() }>
                        <ButtonContainerRed>
                            <ButtonText>+</ButtonText>
                        </ButtonContainerRed>
                    
                    </TouchableHighlight>

                    <TouchableHighlight onPress={ () => removeLife() }>
                        <ButtonContainerRed>
                            <ButtonText>-</ButtonText>
                        </ButtonContainerRed>
                        
                    </TouchableHighlight>

                    <TouchableHighlight onPress={ () => doubleLife() }>
                        <ButtonContainer>
                            <ButtonText>x2</ButtonText>
                        </ButtonContainer>
                        
                    </TouchableHighlight>

                    <TouchableHighlight onPress={ () => halfLife() }>
                        <ButtonContainer>
                            <ButtonText>/2</ButtonText>
                        </ButtonContainer>
                    </TouchableHighlight>
                </Func>
                
            </ContainerOperations>

            <ContainerCoinDice>
                <TouchableHighlight onPress={ () => navigation.navigate('Coin',{number : (Math.floor(Math.random() * 2)+1)})}>
                    <ButtonCoinDice>
                        <TextCoinDice>Coin!</TextCoinDice>
                    </ButtonCoinDice>
                </TouchableHighlight>

                <TouchableHighlight onPress={ () => navigation.navigate('Dice',{number : (Math.floor(Math.random() * 6)+1)})}>
                    <ButtonCoinDice>
                        <TextCoinDice>Dice!</TextCoinDice>
                    </ButtonCoinDice>
                </TouchableHighlight>

            </ContainerCoinDice>


            

            
        </Container>
        
            
        

        




    
    );
}

export default LifePoints;