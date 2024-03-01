import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import categories from '../Data/categories.json'
import CategoryItem from './CategoryItem'


const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        renderItem={({item}) => <CategoryItem
            category={item}
            navigation={navigation}
        />}
        data = {categories}
        keyExtractor={category => category}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})