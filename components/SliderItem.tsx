import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { ImageSliderType } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  item: ImageSliderType;
  index: number;
};

const { width } = Dimensions.get("screen");

const SliderItem = ({ item, index }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={item.image}
        style={{ width: 350, height: 300, borderRadius: 20 }}
      />
      <LinearGradient
        colors={["transparent", "#4c4c4e"]}
        style={styles.background}
      >
        <View>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: width,
  },
  background: {
    position: "absolute",
    width: 350,
    height: 300,
    justifyContent: "flex-end",
    padding: 10,
    borderRadius: 20,
  },
});
