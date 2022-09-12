import { useState } from "react";
import { View, Text } from "react-native";
import UsersList from "../components/usersOutput/UsersList";
import { DUMMY_VALUES } from "../utils/http";

export default AllUsers = () => {
  const [users, setUsers] = useState(DUMMY_VALUES);
  return (
    <View>
      <UsersList users={users} />
    </View>
  );
};
