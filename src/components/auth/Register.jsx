import { View, Image, TouchableOpacity, FlatList, Text } from "react-native";
import React from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { registerForm } from "../../utils/const/authForm";

export default function Register({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white px-5">
      <View>
        <Image source={require("../../../assets/images/auth-logo.png")} />
      </View>

      <View className="w-full">
        <FlatList
          data={registerForm}
          renderItem={({ item }) => (
            <View className="w-full mt-5">
              <Input item={item} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View className="w-full mt-5">
        <Button title="Kayıt Ol" />
      </View>

      <View className="w-full mt-5 flex-row">
        <Text className="text-primary">
          Yoksa bir hesabınız var mı?
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-[600] ml-[7px] underline">Giriş Yap</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}
