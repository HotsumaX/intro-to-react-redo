import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/core';

const NavBar = () => {
  const [padding, setPadding] = useState(15);

  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: pink;
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span role="img" aria-label="logo">
        🤣
      </span>
    </header>
  );
};

export default NavBar;
