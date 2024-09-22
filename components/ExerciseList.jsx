import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
// import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseList({ data }) {
  const router = useRouter();
  //   console.log("ExerciseList data:", data);

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 5, paddingTop: 5 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <ExerciseCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
}

const ExerciseCard = ({ item, router, index }) => {
  //   console.log("ExerciseCard item:", item);
  const fallbackUrl = "https://via.placeholder.com/150";
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()
        .damping(3)}
    >
      <TouchableOpacity
        onPress={() =>
          router.push({ pathname: "/exerciseDetails", params: item })
        }
        className="flex py-3 space-y-2"
      >
        <View className=" bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={{ uri: item.gifUrl || fallbackUrl }}
            contentFit="cover"
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{ fontSize: hp(1.7) }}
          className="ml-1 font-semibold tracking-wide font text-neutral-700"
        >
          {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
