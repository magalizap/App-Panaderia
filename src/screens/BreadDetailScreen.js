import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const BreadDetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del producto</Text>
      <Button title='Volver a inicio' color='#6a6989' onPress={() => navigation.popToTop()}/>
    </View>
  )
}

export default BreadDetailScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,

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