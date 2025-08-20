import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function index() {
  return (
    <View className="relative">
      <View className="abosulute top-0 w-screen h-screen">
        <Image
          className="w-full h-full object-contain"
          source={require("../../assets/images/index.jpg")}
        />
      </View>

      <View className="absolute bottom-0 rounded-tr-[40px] bg-white w-screen h-[30%] flex items-start justify-center">
        <View>
          <Text className="text-[2.5rem] font-bold">Find your img</Text>
          <Text className="text-[1rem]">Choose from 1000+ images</Text>
        </View>
        <View className="w-screen text-white flex items-center justify-center p-4">
          <Pressable
            onPress={() => {
              router.push("./Home");
            }}
          >
            <View className="flex items-center justify-center">
              <Text className="text-[1.5rem] font-bold">Start</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
