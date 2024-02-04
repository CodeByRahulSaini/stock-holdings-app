import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { View, StyleSheet, LayoutAnimation } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Button from "./Button";
import { defaults } from "../theme";

interface IBottomSheet {
  children: React.ReactNode;
  visibleContent: React.ReactNode;
}

const BottomSheet = ({ children, visibleContent }: IBottomSheet) => {
  const [isShowBottomSheet, setBottomSheetVisibility] = useState(false);

  const toggleBottomSheet = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setBottomSheetVisibility(!isShowBottomSheet);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button onPress={toggleBottomSheet}>
          <AntDesign
            name={isShowBottomSheet ? "caretdown" : "caretup"}
            size={hp("3%")}
            color={defaults.colors.primary}
          />
        </Button>
      </View>
      {isShowBottomSheet && children}
      {visibleContent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: defaults.spacings.contentPaddingHorizontal,
    paddingBottom: hp("2.5%"),
    backgroundColor: defaults.colors.content,
  },
  header: {
    alignItems: "center",
  },
});
export default BottomSheet;
