import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button/button";
import Details from "../components/details/details";
import Header from "../components/header/header";
import VectorShape from "../components/svg/VectorShape";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

const Splash = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Image source={require("../../assets/images/LOGO.png")} />
      </Header>
      <Details>
        <View style={styles.details}>
          <View style={styles.shape}>
            <VectorShape />
          </View>
          <Text preset="h1" style={styles.title}>
            Non-Contact Deliveries
          </Text>
          <Text preset="h4" style={styles.description}>
            When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.
          </Text>
          <Button
            style={styles.button}
            onPressHandler={() => navigation.navigate("Item")}
          >
            <Text preset="h5" style={{ color: colors.white }}>
              ORDER NOW
            </Text>
          </Button>
          <Text style={styles.dismiss} preset="small">
            DISMISS
          </Text>
        </View>
      </Details>
    </SafeAreaView>
  );
};

/* <<<<<<<<< Styles >>>>>>>>>>>> */
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "space-between",
  },
  description: {
    textAlign: "center",
    lineHeight: spacing[6],
  },
  shape: {
    backgroundColor: colors.white,
    marginTop: spacing[8],
    height: 80,
    width: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  dismiss: {
    fontFamily: typography.primarySemiBold,
  },
  title: {
    paddingHorizontal: spacing[8],
    textAlign: "center",
  },
  details: {
    alignItems: "center",
  },
  button: {
    marginVertical: spacing[8],
    width: "100%",
  },
});

export default Splash;
