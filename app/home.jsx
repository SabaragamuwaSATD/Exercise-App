import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
      <StatusBar style={"dark"} />
      {/* //Note: Punchline and Avatar....................................................... */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            className="font-bold tracking-wider text-neutral-700"
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
      </View>
    </SafeAreaView>
  );
}
