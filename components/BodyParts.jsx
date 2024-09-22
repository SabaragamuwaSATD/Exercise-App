import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function BodyParts() {
  const router = useRouter();

  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className="mb-10 font-semibold text-neutral-700"
      >
        Excersices
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 5, paddingTop: 5 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
}

const BodyPartCard = ({ item, router, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()
        .damping(3)}
    >
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        style={{
          width: wp(44),
          height: wp(52),
        }}
        className="flex justify-end p-4 mb-10"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: wp(44),
            height: wp(52),
          }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            width: wp(44),
            height: hp(15),
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute rounded-b-[35px]"
        />
        <Text
          style={{ fontSize: hp(2.5) }}
          className="font-semibold tracking-wide text-center text-white"
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
