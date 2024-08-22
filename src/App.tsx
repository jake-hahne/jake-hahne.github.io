import React from 'react';
import './App.scss';
import DevLicense from 'components/DevLicense/DevLicense';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <h1>Hello World!</h1>
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
}

export default App;
