// src/components/Navigation/Navigation.tsx

import React, { useState } from 'react';
import styles from './Navigation.module.scss';

interface NavItem {
  label: string;
  target: string;
}

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  const navItems: NavItem[] = [
    { label: 'About', target: 'about' },
    { label: 'Resume', target: 'resume' },
    { label: 'Projects', target: 'projects' },
    { label: 'Wallpapers', target: 'wallpapers' },
  ];

  const handleNavClick = (target: string) => {
    setActiveSection(target);
    // TODO: Implement some sort of swap out of the active section
  };

  return (
    <div className={styles.navContainer}>
      <nav className={styles.topNav}>
        {navItems.map((item) => (
          <button
            key={item.target}
            className={`${styles.navLink} ${activeSection === item.target ? styles.active : ''}`}
            onClick={() => handleNavClick(item.target)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
