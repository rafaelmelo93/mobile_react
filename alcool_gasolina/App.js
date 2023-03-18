import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, Pressable} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      etanol: '',
      gasolina: '',
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }


  calcular(){
    if ( (this.state.etanol === '') || (this.state.gasolina === '')){
      alert('É necessário colocar os valores')
      return;
    }

    res = this.state.etanol / this.state.gasolina
    if(res< 0.7){
      this.setState({resultado: 'Resultado: '+ res.toFixed(2) + ' o derivado da cana-de-açúcar é o melhor para abastecer'});
    }
    if(res>= 0.7){
       this.setState({resultado: 'Resultado: '+ res.toFixed(2) + ' a gasolina é melhor.'});
    }
    
  }


  render(){
    return(
      <View style={styles.area}>

     <Text style={styles.titulo}>Álcool ou Gasolina</Text>

     <Image
        source={{uri: 'https://img.freepik.com/vector-premium/coche-gasolinera-bomba-gasolina_1639-38390.jpg'}}
        style={{ width: 240, height: 240, alignSelf: 'center',}}
      />

      <TextInput
      style={styles.input}
      placeholder="Preço do Álcool"
      onChangeText={ (numero) => this.setState({etanol: numero}) }
      keyboardType="numeric"
      />

      <TextInput
      style={styles.input}
      placeholder="Preço da Gasolina"
      onChangeText={ (numero) => this.setState({gasolina: numero}) }
      keyboardType="numeric"
      />

      {/*<Button style={styles.botao} title="Verificar Combustível" onPress={this.calcular} />*/}
      <Pressable style={styles.botao} onPress={this.calcular}><Text style={styles.textoBotao}>Verificar Combustível</Text></Pressable>


      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#FF003C',
    margin: 10,
    fontSize: 20,
    padding: 10,
    marginLeft: 40,
    marginRight: 40
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 30,
    alignSelf: 'center',
    color: 'orange',
    marginTop: 20
  },
  botao:{    
    backgroundColor: '#005388',    
    borderWidth: 2,
    marginLeft: 40,
    marginRight: 40    
  },
  textoBotao:{
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center'
  }
 
})


export default App;