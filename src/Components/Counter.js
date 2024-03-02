import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {

    const [inputToAdd, setInputToAdd] = useState(0)

    const count = 0

  return (
    <View style={styles.container}>

        {/* Modificador de contador */}
        <View style={styles.buttonsContainer}>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            
            <Text style={styles.span}>{count}</Text>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>

        <View style={buttonsContainer}>
            <TextInput
                placeholder='Cantidad a aumentar'
                style={styles.spanInput}
            />

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>

        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Reset</Text>
        </Pressable>

    </View>
  )
}

export default Counter

const styles = StyleSheet.create