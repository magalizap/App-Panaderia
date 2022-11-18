import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Categorias</Text>
      <Button title='Ir a productos' color='#8543ab' onPress={() => navigation.navigate('Bread')}/>
    </View>
  )
}

export default CategoriesScreen

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