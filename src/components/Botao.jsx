import React from 'react';
import { Text,TouchableOpacity, StyleSheet } from 'react-native';

export default function Botao({texto, onPressAction}){
    return (
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> onPressAction(texto)}>
          <Text style={{fontSize:30}}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  botaoNumeral: {
    backgroundColor:'lightgray',
    padding: 20,
    borderRadius: 20,
    marginLeft: 10
  }
});