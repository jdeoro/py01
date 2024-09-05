import Colors from '@/constants/Colors'
import { useLocalSearchParams, usePathname } from 'expo-router'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import products from '@/data/products'
import { defaultImg } from '@/components/ListProduct'

const producto = () => {
  const {id} = useLocalSearchParams()

  const item = products.find( ele =>  ele.id.toString() === id )

  if (!item)
    return null

  return (
    <View style={style.container}>

      <Image style={style.image}
       source={{ uri: item.image || defaultImg }} resizeMode='contain'
        />
      <Text style={style.title}>{item.name}</Text>
      <Text style={style.price}>{item.price}</Text>     
    </View>
  );
}

export const style = StyleSheet.create( {
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },

  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    display:'flex',
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
 
})
export default producto

