import { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import useCalculations from "./hooks/useCalculations";
import consts from "./config/consts";

import StockItem from "./components/StockItem";
import LabeledAmount from "./components/LabeledAmount";
import Typography from "./components/Typography";
import Header from "./components/Header";
import BottomSheet from "./components/BottomSheet";
import { Entypo } from "@expo/vector-icons";

import { colors } from "./theme/default";

export default function App() {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    fetch(consts.mockDataUrl)
      .then((res) => res.json())
      .then((res) => setMockData(res.userHolding))
      .catch();
  }, []);

  const {
    updatedHoldings,
    totalCurrentValue,
    totalInvestement,
    totalPnL,
    todayPnl,
  } = useCalculations({ holdings: mockData });

  return (
    <View style={styles.container}>
      <Header title="Upstox Holding" />
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
    backgroundColor: colors.background,
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
  totalContainer: { marginBottom: hp("2%"), gap: hp("1%") },
});
