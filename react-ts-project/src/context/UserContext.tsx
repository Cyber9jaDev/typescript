import React, { createContext, ReactNode, useState } from 'react';

export type AuthUser = {
  username: string,
  email: string,
}

type UserContextType = {
  user: AuthUser | null,
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type ChildrenType = {
  children: ReactNode,
}

// export const UserContext = createContext<UserContextType | null>(null);
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
