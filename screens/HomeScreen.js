import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'green',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})