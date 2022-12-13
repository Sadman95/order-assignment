import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

const Button = ({ children, style, onPressHandler }) => {
  return (
    <Pressable
      onPress={onPressHandler}
      style={StyleSheet.compose(style, styles.btnStyle)}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.green,
    paddingHorizontal: spacing[8],
    paddingVertical: spacing[4],
    borderRadius: spacing[2],
    alignItems: "center",
  },
});

export default Button;
