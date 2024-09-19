import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const sliderImages: ImageSliderType[] = [
  {
    title: "Bodybuilding",
    image: require("../assets/images/slider1.jpeg"),
    description:
      "Bodybuilding is the use of progressive resistance exercise to control and develop one's musculature.",
  },
  {
    title: "Custom Workouts",
    image: require("../assets/images/slider2.jpg"),
    description:
      "Workout is any bodily activity that enhances or maintains physical fitness and overall health and wellness.",
  },
  {
    title: "Strength Training",
    image: require("../assets/images/slider3.jpg"),
    description:
      "Training is a type of physical exercise specializing in the use of resistance to induce muscular contraction.",
  },
  {
    title: "Yoga",
    image: require("../assets/images/slider4.jpg"),
    description:
      "Yoga is a group of physical, mental, and spiritual practices or disciplines that originated in ancient India.",
  },
  {
    title: "Pilates",
    image: require("../assets/images/slider5.jpg"),
    description:
      "Pilates is a physical fitness system developed in the early 20th century by Joseph Pilates.",
  },
];

export const bodyParts = [
  {
    name: "back",
    image: require("../assets/images/part1.jpg"),
  },
  {
    name: "cardio",
    image: require("../assets/images/part2.jpg"),
  },
  {
    name: "lower arm",
    image: require("../assets/images/part3.jpg"),
  },
  {
    name: "lower leg",
    image: require("../assets/images/part4.jpg"),
  },
  {
    name: "chest",
    image: require("../assets/images/part4.jpg"),
  },
];
