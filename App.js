// Lilyan Gabryella Guedes da Silva
// 01565435

import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import Cabecalho from './src/componentes/Cabecalho';
import NovosItens from './src/componentes/NovosItens';
import AdicionarItem from './src/componentes/AdicionarItem';

export default function App() {

  const [lista, setLista] = useState ([
    {texto: "Treinar", key: '1'},
    {texto: "estudar next.js", key:'2'},
    {texto: "arrumar o quarto", key: '3'}
  ])

  const apertarItem = (key) => {
    setLista(
      (prevLista) => {
        return prevLista.filter(texto => texto.key !=key)
      }
    )
  }
  const submeterInformacao = (texto) => {
    setLista((prevLista) => {
      return [
        {texto: texto, key: Math.random().toString()},
        ...prevLista
      ]
    })
  }
  return (
    <View style={styles.container}>
      <Cabecalho/>

      <View style={styles.conteudo}>
        <AdicionarItem funcao={submeterInformacao}/>
        <View>
          <FlatList
            data={lista}
            renderItem={({item}) => (
              <NovosItens props={item} funcao={apertarItem}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5'
  }, conteudo: {
    padding: 40
  }
});
