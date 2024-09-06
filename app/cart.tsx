import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text,  Platform, StyleSheet } from 'react-native'

const shoppingcart = () => {
  return (
    <View>
      <Text>shoppingcart</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default shoppingcart