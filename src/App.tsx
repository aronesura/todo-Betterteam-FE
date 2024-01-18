import React from 'react';
// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//
import Routes from 'routes';
import ThemeProvider from './themes';

function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
