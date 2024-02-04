import { View, StyleSheet } from "react-native";

import Typography from "./Typography";
import { consts } from "../config";
import { defaults } from "../theme";
import { number } from "../utils";

interface ILabeledAmount {
  label: string;
  labelVariant?: defaults.TextVariants;
  value: number;
  valueVariant?: defaults.TextVariants;
}

const LabeledAmount = ({
  label,
  labelVariant,
  value,
  valueVariant,
}: ILabeledAmount) => {
  return (
    <View style={styles.container}>
      <Typography variant={labelVariant || Typography.Variants.Body}>
        {label}:
      </Typography>
      <Typography variant={valueVariant || Typography.Variants.BodyBold}>
        {` ${consts.currency}`}
        {number.formatNumber(value)}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default LabeledAmount;
