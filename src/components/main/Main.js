import React from 'react';
 
import { Aside } from '../aside/Aside';
import { Content } from '../content/Content';

import './main.scss';

export const Main  = () => (
  <main className="main">
    <Aside />
    <Content />
  </main>
);