import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseAuth } from '../config/firebase.config';
import { SET_USER_NULL } from '../context/actions/userActions';

const ProfilesScreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleLogout = async() => {
    await firebaseAuth.signOut().then(() => {
        dispatch(SET_USER_NULL());
        navigation.replace("LoginScreen");
    })
  }
  return (
    <SafeAreaView className="flex-1 top-8 items-center justify-start">
        {/** icons */}
        <View className="w-full flex-row items-center justify-between px-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="chevron-left" size={32} color={"#555"} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color={"#555"} />
            </TouchableOpacity>
        </View>
        {/** profile */}
        <View className="items-center justify-center">
            <View className="relative border-2 border-primary p-1 rounded-full">
                <Image source={{uri: user?.profilePic}} className="w-24 h-24" resizeMode='contain' />
            </View>
            <Text className="text-xl font-semibold text-primaryBold pt-3">{user?.fullName}</Text>
            <Text className="text-base font-semibold text-primaryText">{user?.providerData.email}</Text>
        </View>
        {/** icons */}
        <View className="w-full flex-row items-center justify-evenly py-6">
            <View className="items-center justify-center">
                <TouchableOpacity className="items-center justify-center w-12 h-12 rounded-full bg-green-600">
                    <MaterialIcons name="messenger-outline" size={24} color={"#FFF"} />
                </TouchableOpacity>
                <Text className="text-sm text-primaryText py-1">Message</Text>
            </View>
            <View className="items-center justify-center">
                <TouchableOpacity className="items-center justify-center w-12 h-12 rounded-full bg-green-600">
                    <Ionicons name="ios-videocam-outline" size={24} color={"#FFF"} />
                </TouchableOpacity>
                <Text className="text-sm text-primaryText py-1">Video call</Text>
            </View>
            <View className="items-center justify-center">
                <TouchableOpacity className="items-center justify-center w-12 h-12 rounded-full bg-green-600">
                    <Ionicons name="call-outline" size={24} color={"#FFF"} />
                </TouchableOpacity>
                <Text className="text-sm text-primaryText py-1">Call</Text>
            </View>
            <View className="items-center justify-center">
                <TouchableOpacity className="items-center justify-center w-12 h-12 rounded-full bg-green-600">
                    <Entypo name="dots-three-horizontal" size={24} color={"#FFF"} />
                </TouchableOpacity>
                <Text className="text-sm text-primaryText py-1">More</Text>
            </View>
        </View>
        {/** media shared section */}
        <View className="w-full px-6 space-y-3">
            <View className="w-full flex-row items-center justify-between">
                <Text className="text-base font-semibold text-primaryText">Media shared</Text>
                <TouchableOpacity>
                    <Text className="text-base font-semibold uppercase text-primaryText">View all</Text>
                </TouchableOpacity>
            </View>
            {/** images and other media section */}
            <View className="w-full flex-row items-center justify-between">
                <TouchableOpacity className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden">
                    <Image source={{uri: "https://imgd.aeplcdn.com/370x208/n/cw/ec/149345/suzuki-hayabusa-right-side-view0.jpeg?isig=0&q=80"}} className="w-full h-full" resizeMode='cover' />
                </TouchableOpacity>
                <TouchableOpacity className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden">
                    <Image source={{uri: "https://static.autox.com/uploads/2021/09/2022-MV-Agusta-F3-RR-front-three-quarter-static.jpg"}} className="w-full h-full" resizeMode='cover' />
                </TouchableOpacity>
                <TouchableOpacity className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden">
                    <Image source={{uri: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/23190/cbr1000rr-right-front-three-quarter.jpeg?isig=0"}} className="w-full h-full" resizeMode='cover' />
                    <View className="absolute w-full h-full items-center justify-center bg-[#00000068]">
                        <Text className="text-base text-white font-semibold">250+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        {/** settings options */}
        <View className="w-full px-6 py-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
                <MaterialIcons name='security' size={24} color={"#555"} />
                <Text className="text-base font-semibold text-primaryText px-3">Privacy</Text>
            </View>
            <MaterialIcons name='chevron-right' size={32} color={"#555"} />
        </View>
        <View className="w-full px-6 py-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
                <MaterialIcons name='message' size={24} color={"#555"} />
                <Text className="text-base font-semibold text-primaryText px-3">Groups</Text>
            </View>
            <MaterialIcons name='chevron-right' size={32} color={"#555"} />
        </View>
        <View className="w-full px-6 py-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
                <MaterialIcons name='music-note' size={24} color={"#555"} />
                <Text className="text-base font-semibold text-primaryText px-3">Media and downloads</Text>
            </View>
            <MaterialIcons name='chevron-right' size={32} color={"#555"} />
        </View>
        <View className="w-full px-6 py-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
                <MaterialIcons name='person' size={24} color={"#555"} />
                <Text className="text-base font-semibold text-primaryText px-3">Account</Text>
            </View>
            <MaterialIcons name='chevron-right' size={32} color={"#555"} />
        </View>
        <TouchableOpacity onPress={handleLogout} className="w-full px-6 py-4 flex-row items-center justify-center">
            <Text className="text-lg font-semibold text-primaryBold px-3">Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProfilesScreen;