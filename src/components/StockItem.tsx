import { View, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import LabeledAmount from "./LabeledAmount";
import Typography from "./Typography";
import { defaults } from "../theme";
import { IHolding } from "../types/common";

const StockItem = ({ symbol, quantity, ltp, pnl }: IHolding) => {
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.section}>
          <Typography variant={Typography.Variants.H6Bold}>{symbol}</Typography>
          <LabeledAmount label="LTP" value={ltp} />
        </View>
        <View style={styles.section}>
          <Typography variant={Typography.Variants.Body}>{quantity}</Typography>
          <LabeledAmount label="P/L" value={pnl} />
        </View>
      </View>
    </View>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: defaults.spacings.contentPaddingHorizontal,
    display: "flex",
    alignContent: "center",
    backgroundColor: defaults.colors.content,
  },
  layout: {
    flex: 1,
    padding: defaults.spacings.contentPaddingHorizontal,
    gap: hp("0.7%"),
    paddingLeft: 0,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
  section: { flex: 1, justifyContent: "space-between", flexDirection: "row" },
});
