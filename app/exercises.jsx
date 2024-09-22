import { View, Text, StatusBar, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyParts } from "../api/exerciseDB";
import { demoExercises } from "../constants/index";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";

export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState(demoExercises);
  const item = useLocalSearchParams();
  console.log("got item:", item);

  useEffect(() => {
    //if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodyPart) => {
    let data = await fetchExercisesByBodyParts(bodyPart);
    // console.log("get exercises for:", data);
    setExercises(data);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ height: hp(45), width: wp(100) }}
        className="rounded-b-[30px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute flex items-center justify-center pr-1 mx-4 mt-4 rounded-full bg-rose-500 top-5 left-5"
        style={{ height: hp(5.5) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      <View className="mx-4 mt-4 space-y-3">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          {item.name} exercise
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
