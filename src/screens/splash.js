import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Details from "../components/details/details";
import Header from "../components/header/header";
import Text from "../components/text/text";
import { colors } from "../theme/colors";

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Image source={require("../../assets/images/LOGO.png")} />
      </Header>
      <View style={styles.details}>
        <Details>
          <Text>Splash details</Text>
        </Details>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flex: 1,
    justifyContent: "space-between",
  },
});

export default Splash;
