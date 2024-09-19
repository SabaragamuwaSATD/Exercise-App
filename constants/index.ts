import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const sliderImages: ImageSliderType[] = [
  {
    title: "Birdy",
    image: require("../assets/images/slide1.jpg"),
    description:
      "Birdy is a singer-songwriter from the UK. She has released four studio albums and has won several awards for her music.",
  },
  {
    title: "Birdy",
    image: require("../assets/images/slide2.jpeg"),
    description:
      "Birdy is a singer-songwriter from the UK. She has released four studio albums and has won several awards for her music.",
  },
  {
    title: "Birdy",
    image: require("../assets/images/slide3.jpg"),
    description:
      "Birdy is a singer-songwriter from the UK. She has released four studio albums and has won several awards for her music.",
  },
  {
    title: "Birdy",
    image: require("../assets/images/slide4.jpeg"),
    description:
      "Birdy is a singer-songwriter from the UK. She has released four studio albums and has won several awards for her music.",
  },
  //   require("../assets/images/slide2.jpeg"),
  //   require("../assets/images/slide3.jpg"),
  //   require("../assets/images/slide4.jpeg"),
];
