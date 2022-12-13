import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { spacing } from "../../theme/spacing";

const Header = ({ children }) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
      // onPress={() =>  navigation.navigate('Home')}
      >
        {children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing[8],
  },
});

export default Header;
