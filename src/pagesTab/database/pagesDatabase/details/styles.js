import styled from 'styled-components';
import Constants from 'expo-constants';


export const Container = styled.ScrollView`
    margin-top: 24px;
    flex: 1;
    background-color: #EEE;

`;

export const Imagem = styled.View`
    height: 420px;
    flex 1;
    background-color: #353535;
    padding:2%;

`;

export const CardImage = styled.Image`
    height: 100%;
    width: 100%;
    margin-top:1%;
`;

export const Detalhes = styled.View`
    border-top-width: 1px;
    border-top-color: #ce324f; 
    background-color: #353535;
    height: auto;
    flex: 1;
    padding: 20px 10px;
`;

export const Name = styled.Text`
    font-size: 30px;
    color: #fff;
`;

export const Filler = styled.Text`
    
    color: #fff;
`;

export const Type = styled.Text`
    
    color: #fff;
`;

