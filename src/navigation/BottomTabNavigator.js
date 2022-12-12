import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './ShopNavigation'
import CartNavigator from './CartNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';
import IonIcons from '@expo/vector-icons/Ionicons'
import OrderNavigator from './OrderNavigator';

const BottomTabs = createBottomTabNavigator();


export default MyTabs = () =>  {
  return (

    <NavigationContainer>
        <BottomTabs.Navigator
        initialRouteName='ShopTab'
        screenOptions={{
          headerShown: false, 
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar
        }}>

        <BottomTabs.Screen 
        name='ShopTab'
        component={ShopNavigator}
        options={{
          tabBarIcon: ({focus}) => (
            <View style={styles.item}>
              <IonIcons name='home' size={20} color={ focus ? 'black' : '#a19594'}/>
              <Text>Tienda</Text>
            </View>
          )
      }}
        />

        <BottomTabs.Screen 
          name='CartTab'
          component={CartNavigator}
          options={{
            tabBarIcon: ({focus}) => (
              <View style={styles.item}>
              <IonIcons name='cart' size={20} color={ focus ? 'black' : '#a19594'}/>
                <Text>Carrito</Text>
              </View>
            )
          }}
        /> 
        <BottomTabs.Screen 
          name='OrdersTab'
          component={OrderNavigator}
          options={{
            tabBarIcon: ({focus}) => (
              <View style={styles.item}>
              <IonIcons name='list' size={20} color={ focus ? 'black' : '#a19594'}/>
                <Text>Ordenes</Text>
              </View>
            )
          }}
        /> 
    </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create ({
  tabBar: {
    shadowColor: '#7f5df0',
    shadowOffset: {with: 0, heigh: 0},
    shadowOpacity: 0.5,
    shadowRadius:0.5,
    elevation: 5,
    position: 'absolute',
    bottom: 25,
    left:20,
    right: 20,
    borderRadius: 15,
    height: 90
  },
  item: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})