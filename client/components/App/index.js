import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

const App = ({children}) => (
  <div>
    <NavBar />
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
