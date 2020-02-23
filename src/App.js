import React from 'react';
import './App.css';
import Switch from './Switch';
import PriceCard from './PriceCard';
import { StyleSheet } from 'aphrodite';

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
        <div className={styles.cards}>
          <PriceCard 
            title="Basic"
            price={199.99}
            features={['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB']}
          />
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  switch: {
    margin: '0 auto'
  }
})

export default App;
