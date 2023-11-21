import { createContext, useState } from "react";

const UserContext = createContext({
  username: "",
});

export function UserContextProvider(props) {
  const [user, setUser] = useState("ajith@positra.com");

  const context = {
    username: user,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
