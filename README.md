# YuGiOh-Base

Uma das grandes dificuldade de quem joga e comercializa o card game de Yu-Gi-Oh! é o acesso a informação de forma rapida, pratica e simplies, pois o acervo atualmente passa de 10000 cards, pensando nesse problema surge a ideia para desenvolvimento de um aplicação mobile que consiga auxiliar o usuario na busca por informações gerais e preços de cartas além de possuir algumas ferramentas para facilitar calculos durante a partida.  
O Yu-Gi-Oh!-Base! é uma aplicação desenvolvida para fins academicos  com o intuito de servir de apoio para jogares de yugioh através da disposição de uma base de dados completa com todas as cartas, suas informações e precos além de possuir uma calculadora adaptada para calcular as informações sobre pontos de vida do jogador e fornecer funções para simulação de lançamentos de dados e moedas.


## Dentre as tecnologias uzadas que se destacam estão:

- JavaScript/React
  - Principais linguagens utilizadas.
- React Native
  - Framework para construção do app atravez de React em conjunto capacidades nativas da plataforma (https://reactnative.dev/).
- React Navigation
  - Rotas e navegação para a aplicação em react(https://reactnavigation.org/).
- Expo
  - Plataforma para criação de aplicativos para android que utiliza JavaScript e React (https://expo.io/).
- Styled Components
  - Estilização dos components do react atravez de ES6 e CSS (https://styled-components.com/).
- APIs
  - Axios
    - Cliente para requisições em promisse da API(https://github.com/axios/axios).
  - YGOPRODeck
    - Api par0a busca completa de qualquer tipo de informação sobre cards, archtypes, sets e precos (https://db.ygoprodeck.com/api-guide/).

## Screenshots:

Tela inicial:
  https://i.imgur.com/wenhhYs.jpg
Detalhes de uma carta:
  https://i.imgur.com/E9DB3W6.jpg
  https://i.imgur.com/Rxjj07R.jpg
Calculadora;
  https://i.imgur.com/VLq43i9.jpg
  https://i.imgur.com/SET04tW.jpg
  https://i.imgur.com/T9NJBIO.jpg
  

## Como Testar:

O aplicativo possui duas janelas principais:
### Database 
Comtém uma lista com todas as cartas disponiveis onde é possivel selecionar algum dos elementos da lista para exibição de uma telha de detalhes contendo todas as informações sobra o card em especifico, sua imagem, e as informações de preços em certos websites especializados.

### Calculator
 Contem uma calculadora com um cabeçario que possui dois campos em destaque : pontos de vida atuais iniciados em 8000(valor em verde) e o valor a ser calculado dos pontos de vida(em vermelho), além de um botão em ambos os campos representado pela letra c para resetar seus respectivos valores.  
Abaixo a esses campos é possivel encontrar varios botões que possuem valores inteiros em vermelho e tem a funcionalidade de acionar qualquer valor que o descreve ao valor a ser caculado dos pontos de vida (valor em vermelho).  
Ao lado direito superior é possivel emcontrar dois botões com bordas vermelhas e valor verde com os respectivos sinais: +, - e executam o calculo do valor a ser retirado dos pontos de vida correspondendo ao seu sinal. Logo após se encontram dois botoes com as bordas verdes e valor em verde com os respectivos sinais: X2, /2 e respectivamente multiplicam por 2 e dividem por dois o valor dos pontos de vida atuais  
Por fim existem dois botões com valores: Coin e Dice que respectivamente simulam o lançamento de uma moeda ou dado.
