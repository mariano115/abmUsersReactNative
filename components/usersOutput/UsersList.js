import { FlatList, Text, View } from "react-native";
import UserItem from "./UserItem";

const userItem = ({ item }) => {
  return <UserItem userData={item} />;
};

export default usersList = ({ users }) => {
  return (
    <FlatList
      data={users}
      renderItem={userItem}
      keyExtractor={(user) => user.id}
    />
  );
};
