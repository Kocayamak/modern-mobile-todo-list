import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({title}) {
  return (
    <View>
        <TouchableOpacity className="h-12 bg-main w-full rounded-[6px] justify-center items-center">
            <Text className="text-white text-[16px] font-bold ">{title}</Text>
        </TouchableOpacity>
    </View>
  )
}
