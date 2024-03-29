import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import Counter from './Counter'
import { useSelector } from 'react-redux'


const Categories = ({navigation}) => {

  const categories = useSelector(state => state.shopReducer.value.categories)

  return (
    <View style={styles.container}>
      <Counter/>
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