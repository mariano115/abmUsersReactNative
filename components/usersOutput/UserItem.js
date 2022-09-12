import { Pressable, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalColors } from "../../constants/colors";

export default UserItem = ({ userData }) => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate("Manage Users", { isEditing: true });
  };
  return (
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.userItem}>
        <View style={styles.textContainer}>
          <Text style={styles.titleItem}>Usuario</Text>
          <Text style={styles.textBase}>{userData.userName}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleItem}>Email</Text>
          <Text style={styles.textBase}>{userData.userEmail}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  userItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    backgroundColor: GlobalColors.tecsoSecondary,
    borderRadius: 10,
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  titleItem: {},
  textBase: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  titleItem: {
    fontSize: 15,
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
