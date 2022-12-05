import { useFonts } from 'expo-font';
import ShopNavigation from './src/navigation/ShopNavigation'
import BottomTabNavigator from './src/navigation/BottomTabNavigator';


export default function App() {

  const [fontsLoaded] = useFonts({
    Tillana: require('./src/assets/fonts/Tillana-Regular.ttf')
  })

  if (!fontsLoaded){
    return null
  }

  return <BottomTabNavigator/>

}


