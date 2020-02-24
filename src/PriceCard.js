import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import colors from './colors';

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
        {/* Create a line with custom style for each array item */}
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
    backgroundColor: colors.paper,
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    minWidth: 300,
    zIndex: 1,
    '@media (max-width: 400px)': {
      minWidth: 250
    }
  },
  price: {
    fontSize: 54,
    fontWeight: 'bold',
    '@media (max-width: 400px)': {
      fontSize: 42
    }
  },
  feature: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottom: '1px solid',
    borderColor: colors.medium,
    maxWidth: '85%',
    color: colors.dark,
    margin: '0 auto',
    fontWeight: 700
  },
  first: {
    borderTop: '1px solid',
    borderColor: colors.medium
  },
  button: {
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 12,
    margin: '24px 0',
    letterSpacing: 1,
    backgroundImage: `linear-gradient(to right, ${colors.light}, ${colors.primary})`,
    border: '1px solid transparent',
    padding: '13px 54px',
    borderRadius: 5,
    color: 'white',
    cursor: 'pointer',
    ':hover': {
      backgroundImage: 'none',
      backgroundColor: 'transparent',
      color: colors.primary,
      border: '1px solid',
      borderColor: colors.primary
    }
  },
  highlighted: {
    backgroundImage: `linear-gradient(135deg, ${colors.light} 10%, ${colors.primary})`,
    transform: 'scale(1.1)',
    zIndex: 2,
    '@media (max-width: 980px)': {
      transform: 'none'
    }
  },
  highlightedText: {
    color: 'white'
  },
  highlightedButton: {
    backgroundColor: 'white',
    backgroundImage: 'none',
    color: colors.primary,
    ':hover': {
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid white'
    }
  }
});

export default PriceCard;
