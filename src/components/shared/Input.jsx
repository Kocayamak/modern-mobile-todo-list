import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserValidationInput } from "../../redux/userSlice";

export default function Input({
  item: { title, icon, secureIcon, isSecure = false, type },
}) {
  const user = useSelector((state) => state.user);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleChangeIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const changeFormInfo = (type, value) => {
    dispatch(setUserValidationInput({ type, value }));
  };

  return isSecure ? (
    <View className="w-full h-12 rounded-[6px] border-[1px] border-border bg-white relative">
      <View className="absolute left-[10px] top-[12px]">{icon}</View>
      <TextInput
        className="h-full px-[37px] text-[13px]"
        placeholder={title}
        secureTextEntry={!isVisible}
        onChangeText={(value) => changeFormInfo(type, value)}
        value={user[type]}
      />
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
      <TextInput
        className="h-full px-[37px] text-[13px]"
        placeholder={title}
        onChangeText={(value) => changeFormInfo(type, value)}
        value={user[type]}
      />
      <Text className="text-[11px] text-primary absolute top-[-8px] left-[10px] bg-white px-[10px] border-l-[1px] border-r-[1px] border-border">
        {title}
      </Text>
    </View>
  );
}
