import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button/button";
import Details from "../components/details/details";
import LoveShape from "../components/svg/LoveShape";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

const Item = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/Media.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <Details>
          <View style={styles.details}>
            <Text preset="h2">Boston Lettuce</Text>
            <View style={styles.price}>
              <Text preset="h1" style={{ marginRight: spacing[2] }}>
                1.10
              </Text>
              <Text preset="h4">
                <FontAwesome name="euro" size={16} color={colors.grey} /> /
                piece
              </Text>
            </View>

            <Text preset="small" style={styles.tag}>
              ~ 150 gr / piece
            </Text>

            <Text preset="h3">Spain</Text>
            <Text preset="h4" style={styles.description}>
              Lettuce is an annual plant of the daisy family, Asteraceae. It is
              most often grown as a leaf vegetable, but sometimes for its stem
              and seeds. Lettuce is most often used for salads, although it is
              also seen in other kinds of food, such as soups, sandwiches and
              wraps; it can also be grilled.
            </Text>

            <View style={styles.btnView}>
              <Pressable style={styles.loveShape}>
                <LoveShape />
              </Pressable>
              <Button
                style={styles.button}
                onPressHandler={() => navigation.navigate("Splash")}
              >
                <Ionicons
                  name="cart-outline"
                  size={spacing[5]}
                  color={colors.white}
                />
                <Text preset="h5" style={styles.btnText}>
                  ADD TO CART
                </Text>
              </Button>
            </View>
          </View>
        </Details>
      </ImageBackground>
    </SafeAreaView>
  );
};

/* <<<<<<<<< Styles >>>>>>>>>>>> */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    height: "50%",
  },

  loveShape: {
    backgroundColor: colors.white,
    padding: spacing[4],
    borderRadius: spacing[2],
    marginRight: spacing[4],
    borderColor: colors.lightGrey,
    borderWidth: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    lineHeight: spacing[6],
    marginTop: spacing[4],
    marginBottom: spacing[6],
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
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
  tag: {
    marginBottom: spacing[6],
    marginRight: spacing[2],
    color: colors.green,
    fontFamily: typography.primaryMedium,
  },
  btnView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    marginVertical: spacing[8],
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: colors.white,
    marginLeft: spacing[4],
  },
});

export default Item;
