import { Button, Text, View } from 'react-native'
import React from 'react'

export default function LoginScreen({navigation}) {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title='Kayıt Ol' onPress={() => navigation.navigate("Register")}/>
    </View>
  )
}

