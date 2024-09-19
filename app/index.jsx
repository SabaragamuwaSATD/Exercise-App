import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Animated, {
  FadeInDown,
  FlipInEasyX,
  FlipOutEasyX,
} from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Index() {
  //Note: Hooks........................................................

  const router = useRouter();

  return (
    <View className="flex justify-end flex-1">
      <StatusBar style="light" />

      <Image
        className="absolute w-full h-full"
        source={require("../assets/images/part3.jpg")}
      ></Image>

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            style={{ fontSize: hp(5) }}
            className="font-bold tracking-wide text-white"
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className="font-bold tracking-wide text-white"
          >
            For you
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          className="flex items-center"
        >
          <TouchableOpacity
            onPress={() => router.push("home")}
            style={{ height: hp(7), width: wp(80) }}
            className="flex items-center justify-center mx-auto rounded-lg bg-rose-500"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="font-bold tracking-wide text-white"
            >
              Get Stated
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
