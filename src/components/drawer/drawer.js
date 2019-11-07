import React from 'react';

import './drawer.scss';

const Drawer = props => {
  return (
    <aside class='sidebar'>
      <button class='sidebar'>≡</button>
      {props.children}
    </aside>
  );
};

export default Drawer;

Drawer.defaultProps = {
  children: [
    <div>Home</div>,
    <div>Forums</div>,
    <div>Store</div>,
    <div>About Us</div>,
    <div>Company Policy</div>,
    <div>Grading Ruberic</div>,
    <div>Play Chess</div>,
    <div>Google</div>,
    <div>Test</div>,
    <div>Stuff</div>,
    <div>Stuff</div>,
    <div>Stuff</div>,
    <div>Stuff</div>,
    <div>Stuff</div>,
    <div>Stuff</div>,
    <div>Stuff</div>,
    <div>Stuff</div>,
    <div>Stuff</div>,
  ],
};
