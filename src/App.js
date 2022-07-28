import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Details from './pages/details';
import Home from './pages/home';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';
import ReadingList from './pages/reading-list';

const App = ({ children }) => {

  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { suspense: true },
    }
  })
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<CircularProgress style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading-list" element={<ReadingList />} />
          {/* <Route path='/details/:slug' element={<Details />} /> */}
        </Routes>
      </React.Suspense>
    </QueryClientProvider>
  )
}

export default App
