import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import '../src/index.css';
import ThemeContextProvider from './contexts/ThemeContext';
const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
};

export default App;
