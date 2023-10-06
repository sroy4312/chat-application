import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Logo } from '../assets/index';
import { MessageCard } from '../components/index';
import { useNavigation } from '@react-navigation/native';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firestoreDB } from '../config/firebase.config';

const HomeScreen = () => {
  const user = useSelector(state => state.user.user);
  const [isLoading, setIsLoading] = useState(true);
  const [chats, setChats] = useState(null);
  const navigation= useNavigation();
  useLayoutEffect(() => {
    const chatQuery = query(collection(firestoreDB, "chats"), orderBy("_id", "desc"));
    //onSnapshot() is like an event listener on the firestore
    const unsubscribe = onSnapshot(chatQuery, (querySnapshot) => {
      const chatRooms = querySnapshot.docs.map(doc => doc.data())
      setChats(chatRooms);
      setIsLoading(false);
    })
    return unsubscribe; //By returning the unsubscribe function to stop listening to the updates
  }, [])
  return (
    <View className="flex-1 py-8">
      <SafeAreaView>
        <View className="w-full flex-row items-center justify-between px-4 py-2">
          <Image source={Logo} className="w-12 h-12" resizeMode='contain' />
          <TouchableOpacity className="w-12 h-12 rounded-full border border-primary flex items-center justify-center" onPress={() => navigation.navigate("ProfilesScreen")}>
            <Image source={{uri: user?.profilePic}} className="w-full h-full" resizeMode='cover' />
          </TouchableOpacity>
        </View>
        <ScrollView className="w-full px-4 pt-4">
          <View className="w-full">
            {/** message title */}
            <View className="w-full flex-row items-center justify-between px-2">
              <Text className="text-primaryText text-base font-extrabold pb-2">Messages</Text>
              <TouchableOpacity onPress={() => navigation.navigate("AddToChatScreen")}>
                <Ionicons name="chatbox" size={28} color={"#555"} />
              </TouchableOpacity>
            </View>
            {
              isLoading ? <><View className="w-full flex items-center justify-center">
                <ActivityIndicator size={"large"} color={"#43C651"} />
              </View></> : <>
                {
                  chats && chats?.length > 0 ? (<>{chats?.map(room => (<MessageCard key={room._id} room={room} />))}</>) : (<></>)
                }
              </>
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}


export default HomeScreen;