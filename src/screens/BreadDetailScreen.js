import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addItem } from '../store/actions/cart.action'

const BreadDetailScreen = ({navigation}) => {

  const dispatch = useDispatch()
  const bread = useSelector((state) => state.breads.selected)

  const handleAddItemCart = () => {
    dispatch(addItem(bread))
  }
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>{bread.name}</Text>
        <Text style={styles.description}>{bread.description}</Text>
        <Text style={styles.price} >${bread.price}</Text>
        <View style={styles.button}>
         <Button color={'purple'} title='Agregar al carrito' onPress={handleAddItemCart}/>
        </View>
      </View>
    </View>
  )
}

export default BreadDetailScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,

  },
  screen: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Tillana',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10

  },
  price: {
    fontSize: 40,
    marginTop: 20
  },
  button: {
    marginTop: 15
  }
})


{/*<Text style={styles.title}>Detalle del producto</Text>
      <Button title='Volver a inicio' color='#6a6989' onPress={() => navigation.popToTop()}/>*/ }
    