import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// import style
import './styles/custom.css';
import './styles/dark-theme.css';
import './styles/responsive.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
