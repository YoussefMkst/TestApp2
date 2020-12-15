import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native'

const TextInput = ({ errorText, description, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
    },
    input: {
        backgroundColor: "#90EE90",
    },
    description: {
        fontSize: 13,
        color: "#90EE90",
        paddingTop: 8,
    },
    error: {
        fontSize: 14,
        color: "red",
        paddingTop: 6,
    },
})

export default TextInput