import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type UserLevel = "guest" | "silver" | "gold" | "platinum";

export interface User {
  id: string;
  name: string;
  phone: string;
  points: number;
  level: UserLevel;
  visits: number;
  totalSpent: number;
  lastVisit?: string;
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (name: string, phone: string) => void;
  logout: () => void;
  addPoints: (points: number) => void;
  spendPoints: (points: number) => boolean;
  addVisit: (amount: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const calculateLevel = (points: number): UserLevel => {
  if (points >= 150) return "platinum";
  if (points >= 51) return "gold";
  if (points >= 0) return "silver";
  return "guest";
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("rira_user");
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...parsed, level: calculateLevel(parsed.points) };
    }
    return null;
  });

  const isLoggedIn = user !== null;

  useEffect(() => {
    if (user) {
      localStorage.setItem("rira_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("rira_user");
    }
  }, [user]);

  const login = (name: string, phone: string) => {
    const newUser: User = {
      id: Date.now().toString(),
      name,
      phone,
      points: 10, // Welcome bonus!
      level: "silver",
      visits: 0,
      totalSpent: 0,
      lastVisit: new Date().toISOString(),
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const addPoints = (points: number) => {
    if (user) {
      const newPoints = user.points + points;
      const newLevel = calculateLevel(newPoints);
      setUser({ ...user, points: newPoints, level: newLevel });
    }
  };

  const spendPoints = (points: number): boolean => {
    if (user && user.points >= points) {
      setUser({ ...user, points: user.points - points });
      return true;
    }
    return false;
  };

  const addVisit = (amount: number) => {
    if (user) {
      setUser({
        ...user,
        visits: user.visits + 1,
        totalSpent: user.totalSpent + amount,
        lastVisit: new Date().toISOString(),
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, login, logout, addPoints, spendPoints, addVisit }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};
