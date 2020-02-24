import React from 'react';
import './App.css';
import Switch from './Switch';
import PriceCard from './PriceCard';
import { StyleSheet, css } from 'aphrodite';

function App() {
  return (
    <div className='App'>
      <img
        className='bg-icon bg-bottom'
        src={`${process.env.PUBLIC_URL}/assets/images/bg-bottom.svg`}
        alt='Background'
      />
      <img
        className='bg-icon bg-top'
        src={`${process.env.PUBLIC_URL}/assets/images/bg-top.svg`}
        alt='Background'
      />
      <div className='content'>
        <h1>Our Pricing</h1>
        <Switch className={styles.switch} />
        <div className={css(styles.cards)}>
          <PriceCard 
            title="Basic"
            price={19.99}
            features={['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB']}
          />
          <PriceCard 
            title="Proffessional"
            price={24.99}
            features={['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB']}
            highlighted
          />
          <PriceCard 
            title="Master"
            price={39.99}
            features={['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB']}
          />
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  switch: {
    margin: '48px auto'
  },
  cards: {
    display: 'flex',
    justifyContent: 'center'
  }
})

export default App;
