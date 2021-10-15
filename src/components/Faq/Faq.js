import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { listData, pageContents } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={listData.title} image={listData.image}/>
    <h2>{pageContents.faqTitle}</h2>
    <p>{pageContents.faqSubtitle}</p>
  </Container>
);

export default Faq;