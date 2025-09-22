import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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