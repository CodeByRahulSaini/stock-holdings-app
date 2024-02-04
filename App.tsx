import { StyleSheet, SafeAreaView } from "react-native";

import Home from "./src/Home";

export default function AppRoot() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
