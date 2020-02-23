import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const PriceCard = props => {
  const { title, price, features, handleClick, highlighted } = props;

  return (
    <div className={css(styles.root)}>
      <h3 className={css(styles.title)}>{title}</h3>
      <h1 className={css(styles.price)}>${price}</h1>
      <div className={css(styles.list)}>
        {features && features.map((f, i) => (
          <div className={css(styles.feature, i === 0 && styles.first)}>{f}</div> 
        ))}
      </div>
      <button className={css(styles.button)}>
        Learn more
      </button>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    maxWidth: 300
  },
  price: {
    fontSize: 54,
    fontWeight: 'bold'
  },
  feature: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottom: '1px solid #e2e2e2',
    maxWidth: '85%',
    color: 'hsl(232, 13%, 33%)',
    margin: '0 auto',
    fontWeight: 700
  },
  first: {
    borderTop: '1px solid #e2e2e2'
  },
  button: {
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 12,
    margin: '24px 0',
    letterSpacing: 1,
    backgroundImage: 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
    border: 'none',
    padding: '13px 54px',
    borderRadius: 5,
    color: 'white',
    cursor: 'pointer'
  }
});

export default PriceCard;
