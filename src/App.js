import React, { useState, useCallback } from 'react';
import Switch from './Switch';
import PriceCard from './PriceCard';
import { StyleSheet, css } from 'aphrodite';
import colors from './colors';

// Think this came from an API
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
  // Setup initial info
  const [prices, setPrices] = useState(PRICE_VALUES.anually);

  /**
   * This function handle when the toggle value is changing.
   * It's gonna changes the prices value based on the component callback (cb)
   * TIP: UseCallback avoid to create unuseful new functions on every update/change/render
   */
  const handleToggle = useCallback(v => {
    if (v === 'Anually') {
      setPrices(PRICE_VALUES.anually);
    }
    if (v === 'Monthly') {
      setPrices(PRICE_VALUES.monthly);
    }
  }, []);

  return (
    <div className={css(styles.app)}>
      <img
        className={css(styles.bgIcon, styles.bgBottom)}
        // proccess.env.PUBLIC_URL means the host URL, wherever it's gonna be hosted
        // It just points to local URL
        src={`${process.env.PUBLIC_URL}/assets/images/bg-bottom.svg`}
        alt='Background'
      />
      <img
        className={css(styles.bgIcon, styles.bgTop)}
        src={`${process.env.PUBLIC_URL}/assets/images/bg-top.svg`}
        alt='Background'
      />
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
          className={styles.card}
        />
        <PriceCard
          title='Proffessional'
          price={prices.proffessional}
          features={['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB']}
          className={styles.card}
          highlighted
        />
        <PriceCard
          title='Master'
          price={prices.master}
          features={['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB']}
          className={styles.card}
        />
      </div>
    </div>
  );
}

// Default stylesheet using aphrodite
const styles = StyleSheet.create({
  app: {
    backgroundColor: colors.background,
    height: '100%',
    textAlign: 'center',
    position: 'relative',
    overflowX: 'hidden',
    padding: 12
  },
  switch: {
    margin: '48px auto'
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    padding: 12,
    // Aphrodite responsive style 😎
    '@media (max-width: 980px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'space'
    }
  },
  card: {
    '@media (max-width: 980px)': {
      marginBottom: 24,
      marginTop: 24
    }
  },
  bgIcon: {
    position: 'absolute',
    zIndex: 0,
    '@media (max-width: 980px)': {
      height: 'auto',
      width: 150
    }
  },
  bgTop: {
    right: 0,
    top: 0,
    '@media (max-width: 980px)': {
      right: -70
    }
  },
  bgBottom: {
    bottom: 0,
    left: 0
  }
});

export default App;
