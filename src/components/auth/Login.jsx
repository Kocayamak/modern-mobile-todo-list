import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function Login({ navigation}) {
  return (
    <View className="flex-1 items-center justify-center bg-white px-5">
      <View>
        <Image source={require("../../../assets/images/auth-logo.png")} />
      </View>

      <View className="w-full mt-5">
        <Input title="E-Mail Adresi" />
      </View>

      <View className="w-full mt-5">
        <Input title="Şifre" />
      </View>

      <View className="w-full mt-5">
        <Button title="Giriş Yap" />
      </View>

      <View className="w-full mt-5 flex-row">
        <Text className="text-primary">
          Hala bir hesabınız yok mu?
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text className="font-[600] ml-[7px] underline">Kayıt Olun</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}
