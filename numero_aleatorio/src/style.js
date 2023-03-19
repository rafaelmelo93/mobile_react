import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
     flex: 1,
     flexDirection: 'column',
     alignSelf: 'center'     
  },
  fundo: {
    flex:1,
    justfyContent: 'center',
    alignItens: 'center',
    width: 400
  },
  titulo: {
    fontSize: 38,
    marginTop: 64,
     textAlign: 'center',
     fontWeight: 'bold',
     color: '#f0f0f0'    
  },
  logo: {
    justfyContent: 'center',
    alignItens: 'center',
    alignSelf: 'center',
    width: 300,
    height: 200,
    marginTop: 8,
    borderRadius: 90
  },
  texto: {
    textAlign: 'center',
    color: '#f0f0f0',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 30
  },
  descoberto: {
    textAlign: 'center',
    color: '#f0f0f0',
    fontSize: 72,
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: '#CB3E37',
    padding: 4,
    width: 160,
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#f0f0f0'
     
      
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#f0f0f0'
  }
  
})

export {styles};