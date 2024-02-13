import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect} from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { loginForm } from "../../utils/const/authForm";

export default function Login({ navigation }) {
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => { console.log(formInfo) }, [formInfo]);

  return (
    <View className="flex-1 items-center justify-center bg-white px-5">
      <View>
        <Image source={require("../../../assets/images/auth-logo.png")} />
      </View>

      <View className="w-full">
        <FlatList
          data={loginForm}
          renderItem={({ item }) => (
            <View className="w-full mt-5">
              <Input item={item} formInfo={formInfo} setFormInfo={setFormInfo} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
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
