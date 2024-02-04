import { View, StyleSheet } from "react-native";

import Typography from "./Typography";
import consts from "../config/consts";
import { TextVariants } from "../theme/default";
import { formatNumber } from "../utils/number";

interface ILabeledAmount {
  label: string;
  labelVariant?: TextVariants;
  value: number;
  valueVariant?: TextVariants;
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
        {formatNumber(value)}
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
