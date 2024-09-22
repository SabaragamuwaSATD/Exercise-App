import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntIcons from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-virtualized-view";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseDetails() {
  const item = useLocalSearchParams();
  console.log("got item:", item);
  const router = useRouter();

  return (
    <Animated.View
      entering={FadeInDown.duration(400).springify().damping(3)}
      className="flex flex-1"
    >
      <Animated.View
        entering={FadeInDown.delay(100).duration(400).springify().damping(3)}
        className="shadow-md bg-neutral-200 rounded-b-[40px]"
      >
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ height: wp(100), width: wp(100) }}
          className="rounded-b-[40px]"
        ></Image>
      </Animated.View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute right-0 mx-2 mt-10 rounded-full"
      >
        <AntIcons name="closesquare" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>
      <ScrollView
        className="mx-4 mt-3 space-y-2"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 5 }}
      >
        <Animated.Text
          entering={FadeInDown.delay(200).duration(400).springify().damping(3)}
          className="font-semibold tracking-wide text-neutral-700"
          style={{ fontSize: hp(3.5) }}
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(400).springify().damping(3)}
          className="tracking-wide text-neutral-700"
          style={{ fontSize: hp(2) }}
        >
          Equipment{" "}
          <Text className="font-bold text-neutral-800">{item?.equipment}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(400).springify().damping(3)}
          className="tracking-wide text-neutral-700"
          style={{ fontSize: hp(2) }}
        >
          Secondary Muscles{" "}
          <Text className="font-bold text-neutral-800">
            {item?.secondaryMuscles}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(500).duration(400).springify().damping(3)}
          className="tracking-wide text-neutral-700"
          style={{ fontSize: hp(2) }}
        >
          Target Muscles{" "}
          <Text className="font-bold text-neutral-800">{item?.target}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(600).duration(400).springify().damping(3)}
          className="font-semibold tracking-wide text-neutral-700"
          style={{ fontSize: hp(3) }}
        >
          Instructions{" "}
        </Animated.Text>
        {item.instructions.split(",").map((instruction, index) => {
          return (
            <Animated.Text
              entering={FadeInDown.delay(700)
                .duration(400)
                .springify()
                .damping(3)}
              key={instruction}
              className="tracking-wide text-neutral-700"
              style={{ fontSize: hp(2) }}
            >
              {instruction}
            </Animated.Text>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
