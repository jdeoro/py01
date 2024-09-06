import { Stack } from 'expo-router'
import React from 'react'

export default function MenuStack() {
    return (<Stack>
        <Stack.Screen name='index' options={{ title:'Menu' , headerShown:false,}} />
    </Stack>)
}

