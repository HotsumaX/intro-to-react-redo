/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {
  const loading = true;
  return (
    <div id="something-important">
      <h1>Adopt Me!</h1>
      <SearchParams />
      {loading ? <h3>...select an animal</h3> : <Pet />}
    </div>

    // React.createElement('div', { id: 'something-important' }, [
    //   React.createElement('h1', {}, 'Adopt Me!'),
    //   React.createElement(<Pet name="luna" animal="dog" breed="havanese" />),
    //   React.createElement(<Pet name="cow" animal="cow2" breed="havanese1" />)
    // ])
  );
};

render(<App />, document.getElementById('root'));
