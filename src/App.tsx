import React from 'react';
import './App.scss';
import DevLicense from 'components/DevLicense/DevLicense';
import Navigation from 'components/Navigation/Navigation';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="appHeader">
        <Navigation />
      </header>
      <main className="appMain">
        <DevLicense />
      </main>
      <footer className="appFooter">
        <p>
          <small>© 2024 Jake Hahne. All rights reserved.</small>
        </p>
      </footer>
    </div>
  );
};

export default App;
