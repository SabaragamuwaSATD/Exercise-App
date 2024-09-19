import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/imageSlider";
import { sliderImages } from "../constants/index";

export default function Home() {
  return (
    <SafeAreaView className="flex flex-1 space-y-5 bg-white" edges={["top"]}>
      <StatusBar style={"dark"} />
      {/* //Note: Punchline and Avatar....................................................... */}
      <View className="flex-row items-center justify-between mx-5">
        <View className="space-y-2">
          <Text
            className="mt-2 font-bold tracking-wider text-neutral-700"
            style={{ fontSize: hp(4.5) }}
          >
            READY TO
          </Text>
          <Text
            className="font-bold tracking-wider text-rose-500"
            style={{ fontSize: hp(4.5) }}
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex items-center justify-center space-y-2">
          <Image
            source={require("../assets/images/profile.jpeg")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <View
            className="flex items-center justify-center border-[3px] rounded-full bg-neutral-200 border-neutral-200"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name="notifications" size={30} color="#000000" />
          </View>
        </View>
      </View>

      <View>
        <ImageSlider itemList={sliderImages} />
      </View>
    </SafeAreaView>
  );
}
