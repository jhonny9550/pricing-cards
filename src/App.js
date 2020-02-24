import React, { useState, useCallback } from 'react';
import './App.css';
import Switch from './Switch';
import PriceCard from './PriceCard';
import { StyleSheet, css } from 'aphrodite';

const PRICE_VALUES = {
  anually: {
    basic: 199.99,
    proffessional: 249.99,
    master: 399.99
  },
  monthly: {
    basic: 19.99,
    proffessional: 24.99,
    master: 39.99
  }
};

function App() {
  const [prices, setPrices] = useState(PRICE_VALUES.anually);

  const handleToggle = useCallback(v => {
    if (v === 'Anually') {
      setPrices(PRICE_VALUES.anually);
    }
    if (v === 'Monthly') {
      setPrices(PRICE_VALUES.monthly);
    }
  }, []);

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
        <Switch
          className={styles.switch}
          labels={['Anually', 'Monthly']}
          onToggle={handleToggle}
        />
        <div className={css(styles.cards)}>
          <PriceCard
            title='Basic'
            price={prices.basic}
            features={['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB']}
          />
          <PriceCard
            title='Proffessional'
            price={prices.proffessional}
            features={['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB']}
            highlighted
          />
          <PriceCard
            title='Master'
            price={prices.master}
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
});

export default App;
