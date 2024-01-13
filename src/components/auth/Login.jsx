import { Text, View, Image } from 'react-native'
import React from 'react'
import Input from '../shared/Input'

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-5">
        <View>
            <Image source={require("../../../assets/images/auth-logo.png")} />
        </View>

        <View className="w-full">
            <Input />
        </View>
    </View>
  )
}

