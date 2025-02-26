import React from "react";
import { User } from "../interfaces/UserInterface";

export interface AuthContextType {
  user?: User,
}

export const AuthContext = React.createContext<AuthContextType>({
  user: undefined,
});