import React, { Component } from 'react';
import { View, Text, Image, Pressable, ImageBackground} from 'react-native';
import {styles} from './src/style'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {      
      descobrir: ''
    };
    
    this.descobrir = this.descobrir.bind(this);
  }
  
//Função
  descobrir(){
    sortear = Math.floor(Math.random() * 10)
    this.setState({descobrir: sortear})

  }

  render(){
    return(
      <View style={styles.container}>
      <ImageBackground source={{uri: 'https://st.depositphotos.com/1244201/2424/i/450/depositphotos_24240965-stock-photo-red-jeans-background.jpg'}} style={styles.fundo}>

                  
        
         <Text style={styles.titulo} >
        Jogo de N° aleatórios
      </Text>

      <Image
        source={{uri: 'https://laopinion.com/wp-content/uploads/sites/3/2021/11/numeros-en-numerologia.jpg?quality=80&strip=all&w=1200'}}
        style={styles.logo}
      />

      <Text style={styles.texto}>Pense em um número de 0 à 10</Text>

      <Text  style={styles.descoberto}>{this.state.descobrir}</Text>

      
      <Pressable style={styles.botao} onPress={(this.descobrir)}><Text style={styles.botaoTexto}>Descobrir</Text></Pressable>
      </ImageBackground>
      </View> 
      
    )
  }    
}




export default App;


