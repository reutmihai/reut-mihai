import React from 'react';
import { RouterProvider } from 'react-router-dom'; 
import router from './routes'; 

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white">
      <main className="relative z-10">
      <RouterProvider router={router} /> 
      </main>
    </div>
  );
};

export default App;
