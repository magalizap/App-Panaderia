import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const formatDay = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString()
}

const sumTotal = (list) => list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0)


const OrderItem = ({item, onDelete}) => {
  return (
    <View>
     <View style={styles.container}>
        <Text style={styles.text}>Fecha: {formatDay(item.date)}</Text>
        <Text style={styles.text}>Valor total: ${sumTotal(item.items)}</Text>
     </View>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ccc',
    borderRadius: 7,
    marginBottom: 20,
    padding:20
  },
  text:{
    fontSize: 18
  }
})