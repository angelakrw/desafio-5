import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screens/Home'
import ItemListCategories from '../Screens/ItemListCategories'
import ItemDetail from '../Screens/ItemDetail'
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={
                ({route, navigation}) => (
                    {
                        header: () => {
                            return <Header title={
                                route.name === 'Home' ? 'Categories':
                                route.name === 'ItemListCategory' ? route.params.category:
                                'Detail'
                            }
                            navigation={navigation}/>
                        }
                    }
                )
            }
        >
            <Stack.Screen
                name='Home'
                component={Home}
            />

            <Stack.Screen
                name='ItemListCategory'
                component={ItemListCategories}
            />

            <Stack.Screen
                name='Detail'
                component={ItemDetail}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})