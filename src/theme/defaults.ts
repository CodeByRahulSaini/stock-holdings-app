import { TextStyle } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const colors = {
  primary: "#7D007D",
  background: "grey",
  content: "white",
  text: "black",
  textContrast: "white",
};

export enum TextVariants {
  H5 = "h5",
  H5Bold = "h5Bold",
  H6 = "h6",
  H6Bold = "h6Bold",
  Body = "body",
  BodyBold = "bodyBold",
}

interface TextVariant {
  fontSize: TextStyle["fontSize"];
  fontWeight: TextStyle["fontWeight"];
}

const textVariants: Record<TextVariants, TextVariant> = {
  // Can add more variants like h5, h4, h3, h2, h1, subtitle1, subtitle2
  [TextVariants.H5]: {
    fontSize: hp("1.9%"),
    fontWeight: "normal",
  },
  [TextVariants.H5Bold]: {
    fontSize: hp("1.9%"),
    fontWeight: "700",
  },
  [TextVariants.H6]: {
    fontSize: hp("1.7%"),
    fontWeight: "normal",
  },
  [TextVariants.H6Bold]: {
    fontSize: hp("1.7%"),
    fontWeight: "700",
  },
  [TextVariants.Body]: {
    fontSize: hp("1.55%"),
    fontWeight: "normal",
  },
  [TextVariants.BodyBold]: {
    fontSize: hp("1.55%"),
    fontWeight: "500",
  },
};

const spacings = {
  contentPaddingHorizontal: 15,
  headingPaddingHorizontal: 20,
};

export { colors, textVariants, spacings };
