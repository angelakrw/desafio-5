import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../Components/ProductItem'
import allProducts from '../Data/products.json'
import Search from '../Components/Search'

const ItemListCategories = ({route, navigation}) => {

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState('')

    const {category} = route.params

    useEffect(() => {
        if (category) {
            const products = allProducts.filter(product => product.category === category)
            const productsFiltered = products.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))
            setProducts(productsFiltered)
        } else {
            const productsFiltered = allProducts.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))
            setProducts(productsFiltered)
        }
    }, [category, keyword])

    return (
        <>
            <Search onSearch={setKeyword} />
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={({item}) => <ProductItem item={item}/>}
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