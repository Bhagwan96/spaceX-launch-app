import React from 'react';
import { PageTitle } from './PageTitle';
import { Content } from './Content/Content';
import { Footer } from './Footer';
import '../styles.css';


export default function App() {
  return (
    <div>
      <PageTitle />
      <Content />
      <Footer />
    </div>
  );
}
