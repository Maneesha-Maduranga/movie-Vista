import axios from 'axios';

export const apiService = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines?sources=bbc-news',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});
