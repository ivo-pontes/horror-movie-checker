import React from 'react';
import NavBar from './NavBar';
import SearchForm from './SearchForm';
import '../styles/App.css';


function App() {
  return (
          <>
            <div className="nav-main" style={{backgroundColor: '#20232a'}}>
              <div className="App">
                  <NavBar />
              </div>
              <SearchForm />
            </div>
          </>);
}

export default App;
