import { View, Text, Image, ActivityIndicator } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { firebaseAuth, firestoreDB } from '../config/firebase.config';
import { Logo } from '../assets/index';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';
import { SET_USER } from '../context/actions/userActions';
import { useDispatch } from 'react-redux';

const SplashScreens = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    checkLoggedUser();
  }, [])
  const checkLoggedUser = async() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
        if(userCred?.uid) {
            getDoc(doc(firestoreDB, 'users', userCred?.uid)).then(docSnap => {
                if(docSnap.exists()) {
                  console.log("User Data: ", docSnap.data());
                  dispatch(SET_USER(docSnap.data()));
                }
            }).then(() => {
                setTimeout(() => {
                    navigation.replace("HomeScreen");
                }, 5000)
            })
        }else {
            navigation.replace("LoginScreen");
        }
    })
  }
  return (
    <View className="flex-1 items-center justify-center space-y-24">
      <Image source={Logo} className="w-24 h-24" resizeMode='contain' />
      <ActivityIndicator size={"large"} color={"#43C651"} />
    </View>
  )
}

export default SplashScreens;