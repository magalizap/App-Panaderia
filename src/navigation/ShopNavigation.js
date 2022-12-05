import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryBreadScreen from '../screens/CategoriesBreadScreen'
import BreadDetailScreen from '../screens/BreadDetailScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
;
import { COLORS } from "../constants/colors";


const Stack = createNativeStackNavigator()
export default ShopNavigation = () => {
    return(

            <Stack.Navigator initialRouteName="Categories" screenOptions={{   
                headerStyle: {backgroundColor:COLORS.primary},
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name='Categories' component={CategoriesScreen} options={{
                    title: 'Mi Panadería'
                }}/>
                <Stack.Screen name='Bread' component={CategoryBreadScreen} options={({route}) => ({
                    title:  route.params.name
                })}/>
                <Stack.Screen name='Details' component={BreadDetailScreen} options={({route}) => ({
                    title:  route.params.name
                })}/>
            </Stack.Navigator>

    )
}

