import React from 'react'
import { View, Text, StyleSheet, Image  } from 'react-native'
import { Product } from '@/types/types'
import Colors from '@/constants/Colors'
import { Link, Tabs, useLocalSearchParams } from 'expo-router'

type Typeitem =  {
    item : Product
}

export const defaultImg = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const ListProduct = ( {item} : Typeitem ) => {


  return (
    <Link href={ `menu/${item.id}`} style={style.container}>
      <Image style={style.image}
       source={{ uri: item.image || defaultImg }} resizeMode='contain' />
      <Text style={style.title}>{item.name}</Text>
      <Text style={style.price}>{item.price}</Text>      
    </Link>
  );
}

export const style = StyleSheet.create( {
  container: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
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

export default ListProduct

