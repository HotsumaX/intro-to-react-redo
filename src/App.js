/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Router } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';
import NavBar from './NavBar';

const App = () => {
  const theme = useState('darkblue');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
          {/* {loading ? <h3>...select an animal</h3> : <Pet />} */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>

    // React.createElement('div', { id: 'something-important' }, [
    //   React.createElement('h1', {}, 'Adopt Me!'),
    //   React.createElement(<Pet name="luna" animal="dog" breed="havanese" />),
    //   React.createElement(<Pet name="cow" animal="cow2" breed="havanese1" />)
    // ])
  );
};

export default App;
