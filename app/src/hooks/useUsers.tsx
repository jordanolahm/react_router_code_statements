import React, { createContext, useContext, useState, useEffect} from "react";
import type { ReactNode } from "react";
import type { User } from "../types/interfaces";

interface UsersContextData {
  users: User[];
  filteredUsers: User[];
  searchTerm: string;
  loading: boolean;
  error: boolean;
  fetchUsers: () => Promise<void>;
  handleSearch: (term: string) => void;
  clearSearch: () => void;
}

const UsersContext = createContext<UsersContextData | undefined>(undefined);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Error to find Users.");
      const data = await response.json();
      const enriched = data.map((user: any) => ({
        ...user,
        createdAt: new Date().toISOString(),
      }));
      setUsers(enriched);
      setFilteredUsers(enriched);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = users.filter(
      (user) =>
        user.name?.toLowerCase().includes(term.toLowerCase()) ||
        user.email?.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        filteredUsers,
        searchTerm,
        loading,
        error,
        fetchUsers,
        handleSearch,
        clearSearch,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = (): UsersContextData => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("You must be used within a UsersProvider.");
  }
  return context;
};