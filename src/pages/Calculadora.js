import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Botao from '../components/Botao';

export default function Calculadora() {

  const [primeiroNumero, setPrimeiroNumero] = useState('');
  const [segundoNumero, setSegundoNumero] = useState('');
  const [operador, setOperador] = useState(null);
  const [resultado, setResultado] = useState(null);

  const [controleNumeral, setControleNumeral] = useState(1);

  function handleNumeral(numero){
    if(controleNumeral===1){
      setPrimeiroNumero(primeiroNumero  + numero)
    }else{
      setSegundoNumero(segundoNumero  + numero)
    }
  }

  function handleOperacao(operacao){
    setOperador(operacao)
    setControleNumeral(2)
  }

  function handleClear(){
    setPrimeiroNumero('')
    setSegundoNumero('')
    setOperador(null)
    setControleNumeral(1)
  }

  function handleIgual(){
    switch(operador){
      case '+':
          setResultado(Number(primeiroNumero) + Number(segundoNumero));
          break;
      case '-':
          setResultado(Number(primeiroNumero) - Number(segundoNumero));
          break;
      case '/':
          setResultado(Number(primeiroNumero) / Number(segundoNumero));
          break;
    }
    handleClear()
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.telaDeResultado}>
        <Text style={{fontSize:80}}>{primeiroNumero}</Text>
        <Text style={{fontSize:80}}>{operador}</Text>
        <Text style={{fontSize:80}}>{segundoNumero}</Text>
      </View>

      <View style={styles.containerNumeral}>
        <Botao texto={1} onPressAction={handleNumeral}/>
        <Botao texto={2} onPressAction={handleNumeral} />
        <Botao texto={3} onPressAction={handleNumeral} />
      </View>

      <View style={styles.containerNumeral}>
        <Botao texto={4} />
        <Botao texto={5} />
        <Botao texto={6} />
      </View>

      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> handleNumeral(7)}>
          <Text style={{fontSize:10}}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> handleNumeral(8)}>
          <Text style={{fontSize:10}}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> handleNumeral(9)}>
          <Text style={{fontSize:10}}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> handleNumeral(0)}>
          <Text style={{fontSize:10}}>0</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botãoOperador}>
        <TouchableOpacity style={styles.botaoNumeral}  onPress={()=> handleOperacao('+')}>
          <Text style={{fontSize:30}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> handleOperacao('-')}>
          <Text style={{fontSize:30}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> handleOperacao('/')}>
          <Text style={{fontSize:30}}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral} onPress={handleIgual}>
          <Text style={{fontSize:30}}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={handleClear}>
          <Text style={{fontSize:30}}>C</Text>
        </TouchableOpacity>
      </View>

      <Text style={{fontSize:80}}>
        {resultado}
      </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  telaDeResultado: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },      
  containerNumeral: {
    flexDirection: 'row',
    marginTop: 20
  },
  botaoNumeral: {
    backgroundColor:'lightgray',
    padding: 20,
    borderRadius: 20,
    marginLeft: 10
  },
  botãoOperador: {
    flexDirection: 'row',
    alignItems: 'flex-end',



  }
});