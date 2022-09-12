import { TextInput, View, Text, StyleSheet } from "react-native";
import { GlobalColors } from "../../constants/colors";

export default Input = ({ label }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.baseText, styles.labelText]}>{label}</Text>
      <TextInput style={[styles.baseText, styles.inputText]} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: GlobalColors.tecsoSecondary,
    margin: 8,
    borderRadius: 10,
  },
  baseText: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  labelText: {
    fontSize: 20,
  },
  inputText: {
    fontSize: 25,
  },
});
