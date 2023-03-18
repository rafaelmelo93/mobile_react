import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, Pressable} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      peso: '',
      altura: '',
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }


  calcular(){

     res = this.state.peso / (this.state.altura * this.state.altura)
    
    
    if ( (this.state.peso === '') || (this.state.altura === '')){
      alert('É necessário colocar os valores')
      return;
    }

    res = this.state.peso / (this.state.altura * this.state.altura)

    if(res< 18.5){
      this.setState({resultado: 'IMC: '+ res.toFixed(2) + ' Abaixo do Peso'});
    }
    if(res >= 18.5 & res <= 24.9){
       this.setState({resultado: 'IMC: '+ res.toFixed(2) + ' Peso normal'});
    }
    if(res >= 25 & res <= 29.9){
      this.setState({resultado: 'IMC: '+ res.toFixed(2) + ' Sobre Peso'});
    }
    if(res >= 30 & res <= 34.9){
       this.setState({resultado: 'IMC: '+ res.toFixed(2) + ' Obesidade Grau I'});
    }
    if(res >= 35 & res <= 39.9){
       this.setState({resultado: 'IMC: '+ res.toFixed(2) + ' Obesidade Grau II'});
    }
    if(res >= 40){
       this.setState({resultado: 'IMC: '+ res.toFixed(2) + ' Obesidade Grau III ou Mórbida'});
    }
    
  }


  render(){
    return(
      <View style={styles.area}>

     <Text style={styles.titulo}>Cálculo de IMC</Text>

     <Image
        source={{uri: 'https://pt.calcuworld.com/wp-content/uploads/sites/6/2019/07/imc-.png'}}
        style={{ width: 240, height: 240, alignSelf: 'center',}}
      />
      
      <TextInput
      style={styles.input}
      placeholder="Altura"
      onChangeText={ (numero) => this.setState({altura: numero}) }
      keyboardType="numeric"
      />

      <TextInput
      style={styles.input}
      placeholder="Peso"
      onChangeText={ (numero) => this.setState({peso: numero}) }
      keyboardType="numeric"
      />
      

      {/*<Button style={styles.botao} title="Verificar Combustível" onPress={this.calcular} />*/}
      <Pressable style={styles.botao} onPress={this.calcular}><Text style={styles.textoBotao}>Calcular</Text></Pressable>
      
      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1    
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#6016C9',
    borderTopLeftRadius: 20,
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
    color: '#6016C9',
    marginTop: 20
  },
  botao:{    
    backgroundColor: '#1CB2B1',    
    borderWidth: 2,
    marginLeft: 40,
    marginRight: 40,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20     
  },
  textoBotao:{
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
    
    
  }
 
})


export default App;