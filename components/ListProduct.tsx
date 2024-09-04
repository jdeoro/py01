import React from 'react'
import { View, Text } from 'react-native'
import { Product } from '@/types/types'

type Typeitem =  {
    item : Product
}

const ListProduct = ( {item} : Typeitem ) => {
    console.log(item)
  return (
    <View><Text>name</Text></View>
  )
}

export default ListProduct