import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Cabecalho() {
  return(
    <View style={styles.cabecalho}>
      <Text style={styles.titulo}>Itens</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cabecalho: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral'
  }, titulo: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold'
  }
})