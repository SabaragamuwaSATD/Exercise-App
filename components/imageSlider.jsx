import { View, Text, FlatList } from "react-native";
import React from "react";
import { sliderImages } from "../constants/index.ts";
import SliderItem from "./SliderItem.tsx";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageSlider() {
  return (
    <View>
      <FlatList
        data={sliderImages}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}
