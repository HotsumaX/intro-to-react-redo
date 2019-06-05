/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div id="something-important">
      <h1>Adopt Me!</h1>
      <Pet name="luna" animal="dog" breed="havanese" />
    </div>

    // React.createElement('div', { id: 'something-important' }, [
    //   React.createElement('h1', {}, 'Adopt Me!'),
    //   React.createElement(<Pet name="luna" animal="dog" breed="havanese" />),
    //   React.createElement(<Pet name="cow" animal="cow2" breed="havanese1" />)
    // ])
  );
};

render(React.createElement(App), document.getElementById('root'));
