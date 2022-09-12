import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import Input from "../components/UI/Input";
import { GlobalColors } from "../constants/colors";

export default ManageUsers = ({ route, navigation }) => {
  const isEditing = route?.params?.isEditing;

  const confirmCreateHandler = () => {
    console.log("confirmCreateHandler");
    navigation.goBack();
  };

  const confirmEditHandler = () => {
    console.log("confirmEditHandler");
  };

  const deleteHandler = () => {
    console.log("confirmDeleteHandler");
  };

  return (
    <View style={styles.manageContainer}>
      <Input label="User Name" />
      <Input label="Email" />
      <View style={styles.buttonsContainer}>
        {!isEditing && (
          <IconButton
            icon="person-add-outline"
            size={30}
            color="white"
            customStyle={styles.personalizedButton}
            onPress={confirmCreateHandler}
          />
        )}
        {isEditing && (
          <>
            <IconButton
              icon="checkmark-outline"
              size={30}
              color="white"
              customStyle={styles.personalizedButton}
              onPress={confirmEditHandler}
            />
            <IconButton
              icon="trash-outline"
              size={30}
              color="white"
              customStyle={styles.personalizedButton}
              onPress={deleteHandler}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  manageContainer: {
    paddingVertical: 8,
    paddingBottom: 20,
  },
  personalizedButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalColors.tecsoPrimary,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  buttonsContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
});
