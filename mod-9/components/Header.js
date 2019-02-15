import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  render() {
    return (
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' | '}
        <Link href="/jokes">
          <a>Jokes</a>
        </Link>
      </nav>
    );
  }
}

export default Header;
