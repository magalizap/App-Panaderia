import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryBreadScreen from '../screens/CategoriesBreadScreen'
import BreadDetailScreen from '../screens/BreadDetailScreen'
import CategoriesScreen from '../screens/CategoriesScreen'

const Stack = createNativeStackNavigator()
export default ShopNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Categories' component={CategoriesScreen}/>
                <Stack.Screen name='Bread' component={CategoryBreadScreen}/>
                <Stack.Screen name='Details' component={BreadDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

