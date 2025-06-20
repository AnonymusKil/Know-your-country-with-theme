import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';
import { UserProvider } from './context/userContext';

function App() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  return (
    <UserProvider value={{ result, setResult, value, setValue }}>
      <main className="bg-lightmode dark:bg-darkmode min-h-screen transition-colors duration-300">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Countries />
              </>
            }
          />
          <Route path="/country/:code" element={<CountryDetails />} />
        </Routes>
      </main>
    </UserProvider>
  );
}

export default App;
