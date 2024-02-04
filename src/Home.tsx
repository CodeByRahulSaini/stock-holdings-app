import { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import {
  BottomSheet,
  Header,
  LabeledAmount,
  StockItem,
  Typography,
} from "./components";
import { consts } from "./config";
import { useAPI, useCalculations } from "./hooks";
import { defaults } from "./theme";
import { IHolding } from "./types/common";

interface IAPIRespone {
  userHolding: IHolding[];
}

export default function App() {
  const [mockData, error] = useAPI<IAPIRespone>(consts.mockDataUrl, []);

  const {
    updatedHoldings,
    totalCurrentValue,
    totalInvestement,
    totalPnL,
    todayPnl,
  } = useCalculations({ holdings: mockData?.userHolding || [] });

  return (
    <View style={styles.container}>
      <Header title="Upstox Holding" />
      {error && (
        <Typography
          style={styles.errorText}
          variant={Typography.Variants.BodyBold}
        >
          {error}
        </Typography>
      )}
      <View style={styles.listContainer}>
        <FlatList
          data={updatedHoldings}
          renderItem={({ item }) => <StockItem {...item} />}
        />
      </View>
      <BottomSheet
        visibleContent={
          <LabeledAmount
            label="Profit & Loss"
            labelVariant={Typography.Variants.H5Bold}
            valueVariant={Typography.Variants.H5}
            value={totalPnL}
          />
        }
      >
        <View style={styles.totalContainer}>
          <LabeledAmount
            labelVariant={Typography.Variants.H5Bold}
            valueVariant={Typography.Variants.H5}
            label="Current Value"
            value={totalCurrentValue}
          />
          <LabeledAmount
            labelVariant={Typography.Variants.H5Bold}
            valueVariant={Typography.Variants.H5}
            label="Total Investment"
            value={totalInvestement}
          />
          <LabeledAmount
            labelVariant={Typography.Variants.H5Bold}
            valueVariant={Typography.Variants.H5}
            label="Today's Profit & Loss"
            value={todayPnl}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaults.colors.background,
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
  totalContainer: { marginBottom: hp("2%"), gap: hp("1%") },
  errorText: {
    padding: wp("2%"),
    color: defaults.colors.textContrast,
  },
});
