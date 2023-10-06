import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MessageCard = ({room}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity className="w-full flex-row items-center justify-start py-2" onPress={() => {navigation.navigate("ChatScreen", {room: room})}}>
        {/** image section  */}
        <TouchableOpacity className="w-16 h-16 rounded-full flex items-center border-2 border-primary p-1 justify-center">
          <FontAwesome5 name="users" size={24} color="#555" />
        </TouchableOpacity>
        {/** content section */}
        <View className="flex-1 flex items-start justify-center ml-4">
          <Text className="text-[#333] text-base font-semibold capitalize">
            {room.chatName}
          </Text>
          <Text className="text-primaryText text-sm">Lorem Ipsum is simply dummy text of the printing...</Text>
        </View>
        {/** time text section */}
        <Text className="text-primary px-4 text-base font-semibold">27 mins</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MessageCard;