import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/create'>Create Expense</Link>
      <Link to='/help'>Help</Link>
    </div>
  );
}

export default Navbar;
