import React, { createContext } from "react";

export const UserContext = createContext({
  loggedInUser: "Default User",
});
