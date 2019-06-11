/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import Pet from './Pet';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  const loading = true;
  return (
    <React.StrictMode>
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
    </React.StrictMode>

    // React.createElement('div', { id: 'something-important' }, [
    //   React.createElement('h1', {}, 'Adopt Me!'),
    //   React.createElement(<Pet name="luna" animal="dog" breed="havanese" />),
    //   React.createElement(<Pet name="cow" animal="cow2" breed="havanese1" />)
    // ])
  );
};

render(<App />, document.getElementById('root'));
