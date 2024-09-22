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
    <View>
      <TouchableOpacity className="flex py-3 space-y-2">
        <View className=" bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={{ uri: item.gifUrl || fallbackUrl }}
            contentFit="cover"
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-[25px]"
            onError={(error) => {
              console.log("Image load error:", error);
              console.log("Failed URL:", item.gifUrl);
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
