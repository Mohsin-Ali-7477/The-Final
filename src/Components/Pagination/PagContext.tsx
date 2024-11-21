import React, { createContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface AppContextType {
  data: Post[];
  loading: boolean;
  fetchData: (url: string, page: number) => Promise<void>;
  pagination: Pagination;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
}


export const AppContext = createContext<AppContextType>({
  data: [],
  loading: false,
  fetchData: async () => {},
  pagination: { currentPage: 1, totalPages: 0 }, 
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<Pagination>({ currentPage: 1, totalPages: 0 });

  const fetchData = async (url: string, page: number = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}?_page=${page}&_limit=10`);
      setData(response.data);
      setPagination({ currentPage: page, totalPages: Math.ceil(100 / 10) }); 
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ data, loading, pagination, fetchData }}>
      {children}
    </AppContext.Provider>
  );
};
