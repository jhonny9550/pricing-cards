import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const PriceCard = props => {
  const { className, title, price, features, handleClick, highlighted } = props;

  return (
    <div
      className={css(styles.root, className, highlighted && styles.highlighted)}
    >
      <h3 className={css(styles.title, highlighted && styles.highlightedText)}>
        {title}
      </h3>
      <h1 className={css(styles.price, highlighted && styles.highlightedText)}>
        ${price}
      </h1>
      <div className={css(styles.list)}>
        {features &&
          features.map((f, i) => (
            <div
              key={i}
              className={css(
                styles.feature,
                i === 0 && styles.first,
                highlighted && styles.highlightedText
              )}
            >
              {f}
            </div>
          ))}
      </div>
      <button
        className={css(styles.button, highlighted && styles.highlightedButton)}
        onClick={handleClick}
      >
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
    minWidth: 300,
    zIndex: 1
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
    backgroundImage:
      'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
    border: '1px solid transparent',
    padding: '13px 54px',
    borderRadius: 5,
    color: 'white',
    cursor: 'pointer',
    ':hover': {
      backgroundImage: 'none',
      backgroundColor: 'transparent',
      color: 'hsl(237, 63%, 64%)',
      border: '1px solid hsl(237, 63%, 64%)'
    }
  },
  highlighted: {
    backgroundImage:
      'linear-gradient(135deg, hsl(236, 72%, 79%) 10%, hsl(237, 63%, 64%))',
    transform: 'scale(1.1)',
    zIndex: 2,
    '@media (max-width: 600px)': {
      transform: 'none'
    }
  },
  highlightedText: {
    color: 'white'
  },
  highlightedButton: {
    backgroundColor: 'white',
    backgroundImage: 'none',
    color: 'hsl(237, 63%, 64%)',
    ':hover': {
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid white'
    }
  }
});

export default PriceCard;
