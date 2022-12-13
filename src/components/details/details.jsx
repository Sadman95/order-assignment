import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

const Details = ({ children, style }) => {
  return (
    <View style={StyleSheet.compose(style, styles.container)}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingVertical: spacing[6],
    paddingHorizontal: spacing[3],
    borderTopLeftRadius: spacing[6],
    borderTopRightRadius: spacing[6],
  },
});

export default Details;
