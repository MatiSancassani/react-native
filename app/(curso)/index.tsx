import Feather from "@expo/vector-icons/Feather";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function index() {
  return (
    <View className="bg-white flex-1 text-white w-screen">
      <View className="relative bg-[#4c1d95] pt-[48px] h-[215px] p-[24px] flex-col mb-12">
        <View className="flex-row items-center justify-between mb-[32px]">
          <View className="flex-row gap-4 items-center">
            <Ionicons name="menu-sharp" size={26} color="white" />

            <Text className="text-white">Home</Text>
          </View>
          <View>
            <MaterialIcons name="notifications-none" size={26} color="white" />
          </View>
        </View>
        <View className="flex-row justify-between mt-4">
          <View className="w-[70%]">
            <Text className="text-white text-[18px] font-bold mb-2">
              Welcome Sanca
            </Text>
            <Text className="text-white opacity-70">
              Choose a goal and star learning from Top Educators
            </Text>
          </View>
          <View>
            <Image
              className="w-20 h-20"
              source={require("../../assets/images/person.png")}
            />
          </View>
        </View>
        <View className="absolute -bottom-[20px] w-full mx-6">
          <TextInput
            className="bg-white mt-[24px] rounded-[8px] py-2 px-4 h-[50px] border-2 border-gray-400 placeholder:text-black"
            placeholder={"Search"}
          />
        </View>
      </View>

      <View className="pl-6">
        <Text className="font-semibold text-[18px]">Resume your course</Text>
        <View className="w-[300px] rounded-[20px] mt-4 overflow-hidden">
          <Image
            source={require("../../assets/images/class.jpg")}
            className="w-full h-[100px]"
          />
          <View className="p-2 bg-[#f3f4f6] flex-row justify-between">
            <View className=" flex gap-2">
              <Text className="text-[14px]">Chapter 1</Text>
              <Text className="font-bold text-[18px]">React Native</Text>
              <Text>Active Users: 114</Text>
            </View>
            <Pressable
              onPress={() => {
                router.push("/home");
              }}
            >
              <View className="bg-[#4c1d95] w-10 h-10 rounded-full flex items-center justify-center">
                <Foundation name="play" size={22} color="white" />
              </View>
            </Pressable>
          </View>
        </View>
      </View>

      <View className="px-6 mt-4 flex">
        <Text className=" font-bold text-[18px] mb-2">Categories</Text>
        <View className="flex-row justify-between">
          <View className="w-14 h-14 p-2 rounded-full bg-[#ede9fe]">
            <Ionicons name="logo-html5" size={35} color="orange" />
          </View>
          <View className="w-14 h-14 p-2 rounded-full bg-[#ede9fe]">
            <Ionicons name="logo-css3" size={35} color="blue" />
          </View>
          <View className="w-14 h-14 p-2 rounded-full bg-[#ede9fe]">
            <Ionicons name="logo-react" size={35} color="aqua" />
          </View>
          <View className="w-14 h-14 p-2 rounded-full bg-[#ede9fe]">
            <Ionicons name="logo-nodejs" size={35} color="green" />
          </View>
          <View className="w-14 h-14 p-2 rounded-full bg-[#ede9fe]">
            <Feather name="more-vertical" size={35} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
}
