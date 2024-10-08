import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "@/src/global/themes";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/src/modules";

export default function Login() {
  const navigation = useNavigation<propsStack>(); 

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Bem vindo</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>ENDEREÇO DE EMAIL</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="email" size={30} color={themas.colors.gray} />
        </View>

        <Text style={style.titleInput}>SENHA</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="remove-red-eye" size={30} color={themas.colors.gray} />
        </View>
      </View>
      <View style={style.boxBotton}>
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.textBottom}>
        Não tem conta?
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}> 
          <Text style={[style.textBottom, { color: themas.colors.primary }]}>Crie Agora</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}