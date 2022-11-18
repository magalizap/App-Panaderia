import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const BreadDetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del producto</Text>
      <Button title='Volver a inicio' color='#8543ab' onPress={() => navigation.popToTop()}/>
    </View>
  )
}

export default BreadDetailScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#43aba6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontFamily: 'Tillana',
    fontSize:25,
    fontWeight: 'bold',
    marginBottom: 20
  }
})