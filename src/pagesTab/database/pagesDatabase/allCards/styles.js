import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background-color: #eee;

`;

export const Header = styled.View`
    background-color: #151515;
    height: 15%;
    border-bottom-width: 1px;
    border-bottom-color: #ce324f; 
    padding: 5%;
`;

export const Logo = styled.Text`
    color: #ce324f;
    font-size: 30px;
`;

export const Description = styled.Text`
    color: #ce324f8e;
    font-size: 10px;
`;

export const CardDetails = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    background-color: #202020;
    height: 15px;
    border-bottom-width: 1px;
    border-bottom-color: #ffffff1e; 

`;

export const CardDetailsText = styled.Text`
    color: #ffffff8e;
    font-size: 10px;
    margin-left: 5%;
    width: 90px;
`;

export const ListaCards = styled.View`
    background-color: #101010;
    flex:1;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    background-color: #353535;
    height: 135px;
    border-bottom-width: 1px;
    border-bottom-color: #ffffff1e; 
    padding: 1px;
`;

export const ButtonText = styled.Text`
    color: #ffffff9e;
    padding: 3%;
`;

