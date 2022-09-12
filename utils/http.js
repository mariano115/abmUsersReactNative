import axios from "axios";

export const DUMMY_VALUES = [
  {
    id: 1,
    userName: "userTest1",
    userEmail: "emailTest1@Test.com",
  },
  {
    id: 2,
    userName: "userTest2",
    userEmail: "emailTest2@Test.com",
  },
  {
    id: 3,
    userName: "userTest3",
    userEmail: "emailTest3@Test.com",
  },
  {
    id: 4,
    userName: "userTest4",
    userEmail: "emailTest1@Test.com",
  },
  {
    id: 5,
    userName: "userTest5",
    userEmail: "emailTest2@Test.com",
  },
  {
    id: 6,
    userName: "userTest6",
    userEmail: "emailTest3@Test.com",
  },
  {
    id: 7,
    userName: "userTest7",
    userEmail: "emailTest2@Test.com",
  },
  {
    id: 8,
    userName: "userTest8",
    userEmail: "emailTest3@Test.com",
  },
];

const USERS_ENDPOINT = "DUMMY";
const fetchUsers = async () => {
  const users = await axios.get(USERS_ENDPOINT);
  return;
};
