import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Input({ item : { title, icon, secureIcon, isSecure = false}}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return isSecure ? (
    <View className="w-full h-12 rounded-[6px] border-[1px] border-border bg-white relative">
      <View className="absolute left-[10px] top-[12px]">{icon}</View>
      <TextInput className="h-full px-[37px] text-[13px]" placeholder={title} secureTextEntry={!isVisible} />
      <Text className="text-[11px] text-primary absolute top-[-8px] left-[10px] bg-white px-[10px] border-l-[1px] border-r-[1px] border-border">
        {title}
      </Text>
      <TouchableOpacity
        className="absolute right-[10px] top-[12px]"
        onPress={handleChangeIsVisible}
      >
        {isVisible ? secureIcon.invisible : secureIcon.visible}
      </TouchableOpacity>
    </View>
  ) : (
    <View className="w-full h-12 rounded-[6px] border-[1px] border-border bg-white relative">
      <View className="absolute left-[10px] top-[12px]">{icon}</View>
      <TextInput className="h-full px-[37px] text-[13px]" placeholder={title} />
      <Text className="text-[11px] text-primary absolute top-[-8px] left-[10px] bg-white px-[10px] border-l-[1px] border-r-[1px] border-border">
        {title}
      </Text>
    </View>
  );
}
