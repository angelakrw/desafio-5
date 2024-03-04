import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../Components/ProductItem'
import Search from '../Components/Search'
import { useSelector } from 'react-redux'
import ShopReducer from '../features/shop/shopSlice'

const ItemListCategories = ({navigation}) => {

    const productsFilteredByCategory = useSelector(state => state.shopReducer.value.productsFilteredByCategory)
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
      const productsFiltered = productsFilteredByCategory.filter((product) =>
      product.title.toLowerCase().includes(keyword.toLowerCase())
      )
      setProducts(productsFiltered)
    }, [productsFilteredByCategory, keyword])

    return (
        <>
            <Search onSearch={setKeyword} />
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={({item}) => (
                        <ProductItem 
                            item={item}
                            navigation={navigation} />
                        
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

export default ItemListCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})