import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesBreadScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos de la categoría</Text>
      <Button title='Ir al detalle' color='#8543ab' onPress={() => navigation.navigate('Details')}/>
    </View>
  )
}

export default CategoriesBreadScreen

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