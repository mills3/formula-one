import React from 'react';
import Logo from './Logo';

const divStyles = {
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  background: '#333',
  zIndex: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const LoadingScreen = () => {
  return (  
    <div className="loading-screen" style={divStyles}>
      <Logo width={'500px'} animate={true} />
    </div>
  );
}
 
export default LoadingScreen;