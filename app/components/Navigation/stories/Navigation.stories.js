import React from 'react';
import Navigation from '../Navigation';
import { navItems } from './exampleData';

export default {
  title: 'Navigation',
};

export const NavigationBar = () => <Navigation navs={navItems} />;
