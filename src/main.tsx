import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './Navigation.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  </React.StrictMode>,
);
