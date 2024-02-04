import { View, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Typography from "./Typography";
import { colors, spacings } from "../theme/default";

interface IHeader {
  title: string;
}

const Header = ({ title }: IHeader) => {
  return (
    <View style={headerStyles.container}>
      <Typography
        variant={Typography.Variants.H5Bold}
        style={[{ color: colors.textContrast }]}
      >
        {title}
      </Typography>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    height: hp("6.5%"),
    backgroundColor: colors.primary,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: spacings.headingPaddingHorizontal,
  },
});
export default Header;
