import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { BGImage, Logo } from '../assets/index';
import { UserTextInput } from '../components/index';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { avatars } from '../utils/supports';
import { MaterialIcons } from '@expo/vector-icons';

const SignupScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(avatars[0]?.image.asset.url);
  const [isAvatarMenu, setIsAvatarMenu] = useState(false);
  const navigation = useNavigation();
  const handleAvatar = (item) => {
    setAvatar(item?.image.asset.url);
    setIsAvatarMenu(false);
  }
  return (
    <View className="flex-1 items-center justify-start">
      <Image source={BGImage} resizeMode='cover' className="h-96" style={{width: screenWidth}} />
      { isAvatarMenu && ( <>
        {/** list of avatars section */}
        <View className="absolute inset-0 z-10" style={{width: screenWidth, height: screenHeight}}>
          <ScrollView>
            <BlurView className="w-full h-full px-4 py-16 flex-row flex-wrap items-center justify-evenly" tint='light' intensity={40} style={{width: screenWidth, height: screenHeight}}>
              <Text className="absolute top-2 mt-7 flex-1 items-center justify-start text-center text-xl font-semibold text-primaryBold">Pick an avatar</Text>
              {
                avatars?.map((item) => (
                  <TouchableOpacity key={item._id} className="w-20 m-2 h-20 p-1 rounded-full border-2 border-primary relative" onPress={() => handleAvatar(item)}>
                    <Image source={{uri: item?.image.asset.url}} className="w-full h-full" resizeMode='contain' />
                  </TouchableOpacity>
                ))
              }
            </BlurView>
          </ScrollView>
        </View>
      </>)}
      {/** Main view */}
      <View className="w-full h-full bg-white rounded-tl-[40px] rounded-tr-[40px] -mt-60 flex items-center justify-start py-6 px-6 space-y-6">
        <Image source={Logo} className="w-16 h-16" resizeMode='contain' />
        <Text className="py-2 text-primaryText text-xl font-semibold">Join with us</Text>
        <View className="w-full flex items-center justify-center">
          {/** alert message */}
          {/** avatar section */}
          <View className="w-full flex items-center justify-center relative">
              <TouchableOpacity className="w-20 h-20 p-1 rounded-full border-2 border-primary relative" onPress={() => setIsAvatarMenu(true)}>
                <Image source={{uri: avatar}} className="w-full h-full" resizeMode='contain' />
                <View className="w-6 h-6 bg-primary rounded-full absolute top-0 right-0 flex-items-center justify-center">
                  <MaterialIcons name="edit" size={18} color={"#fff"} />
                </View>
              </TouchableOpacity>
          </View>
          {/** name field */}
          <UserTextInput placeholder="Full Name" isPass={false} setStateValue={setName} />
          {/** email filed */}
          <UserTextInput placeholder="Email" isPass={false} setStateValue={setEmail} />
          {/** password field */}
          <UserTextInput placeholder="Password" isPass={true} setStateValue={setPassword} />
          {/** login button */}
          <TouchableOpacity className="w-full px-4 py-2 rounded-xl bg-primary my-3 flex items-center justify-center">
            <Text className="py-2 text-white text-xl font-semibold">Sign in</Text>
          </TouchableOpacity>
          <View className="w-full py-12 flex-row items-center justify-center space-x-2">
            <Text className="text-base text-primaryText">Have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
              <Text className="text-base font-semibold text-primaryBold">Login here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SignupScreen