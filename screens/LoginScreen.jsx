import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { BGImage, Logo } from '../assets/index';
import { UserTextInput } from '../components/index';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-start">
      <Image source={BGImage} resizeMode='cover' className="h-96" style={{width: screenWidth}} />
      {/** Main view */}
      <View className="w-full h-full bg-white rounded-tl-[40px] rounded-tr-[40px] -mt-60 flex items-center justify-start py-6 px-6 space-y-6">
        <Image source={Logo} className="w-16 h-16" resizeMode='contain' />
        <Text className="py-2 text-primaryText text-xl font-semibold">Welcome</Text>
        <View className="w-full flex items-center justify-center">
          {/** alert message */}
          {/** email filed */}
          <UserTextInput placeholder="Email" isPass={false} setStateValue={setEmail} />
          {/** password field */}
          <UserTextInput placeholder="Password" isPass={true} setStateValue={setPassword} />
          {/** login button */}
          <TouchableOpacity className="w-full px-4 py-2 rounded-xl bg-primary my-3 flex items-center justify-center">
            <Text className="py-2 text-white text-xl font-semibold">Sign in</Text>
          </TouchableOpacity>
          <View className="w-full py-12 flex-row items-center justify-center space-x-2">
            <Text className="text-base text-primaryText">Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
              <Text className="text-base font-semibold text-primaryBold">Create here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen;