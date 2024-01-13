import { Text, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Input() {
  return (
    <View className="w-full h-12 rounded-[6px] border-[1px] border-border bg-white relative">
      <View className="absolute left-[10px] top-[12px]">
        <Ionicons name="mail-outline" size={20} color="#868E96" />
      </View>
      <TextInput className="h-full px-[37px]" placeholder="E-Mail Adresi" />
      <Text className="text-primary absolute top-[-10px] left-[10px] bg-white px-[10px] border-l-[1px] border-r-[1px] border-border">E-Mail Adresi</Text>
    </View>
  );
}
