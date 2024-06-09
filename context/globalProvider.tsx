import { getCurrentUser } from "@/appwrite";
import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext<any>(null);
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          setUser(user);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error: any) {
        console.error(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <GlobalContext.Provider value={{ isLoading, user, isLoggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
};
