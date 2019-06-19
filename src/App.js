/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import Pet from './Pet';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
  const themeHook = useState('darkblue');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
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

render(<App />, document.getElementById('root'));
