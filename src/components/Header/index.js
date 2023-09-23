import React from 'react';
import { FaHome, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a>
        <FaHome size={24} />
      </a>
      <a>
        <FaUser size={24} />
      </a>
      <a>
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
