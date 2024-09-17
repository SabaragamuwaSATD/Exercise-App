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
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />

      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/welcome-back.jpg")}
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
            className="text-white font-bold tracking-wide"
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide"
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
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-lg"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-wide"
            >
              Get Stated
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
