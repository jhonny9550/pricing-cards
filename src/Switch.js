import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import colors from './colors';

const Switch = props => {
  const { className, labels, onToggle } = props;

  // Set first labels array value to the value property from component state
  const [value, setValue] = useState(labels[0]);
  const [animated, setAnimated] = useState(null);

  /**
   * This function keeps listen value changes for value, labels and onToggle props
   * It means when some of these property changes it will be recreated
   * Important: animated prop will have 3 different values: null, 'left' and 'right'.
   * These values will be used for fire the handle element animations
   */
  const handleToggle = useCallback(() => {
    if (value === labels[1]) {
      setAnimated('left');
    }
    if (value === labels[0]) {
      setAnimated('right');
    }
    setValue(v => {
      const val = v === labels[0] ? labels[1] : labels[0];
      if (onToggle) {
        onToggle(val);
      }
      return val;
    });
  }, [value, labels, onToggle]);

  /**
   * This hook adds a keydown event listener to the document object
   * And fires the handleToggle function when the key pressed is the space key
   */
  useEffect(() => {
    const keydownCallback = e => {
      if (e.keyCode === 32) {
        handleToggle();
      }
    };
    document.addEventListener('keydown', keydownCallback, false);
    return () => {
      document.removeEventListener('keydown', keydownCallback, false);
    };
  }, [handleToggle]);

  return (
    <>
      <div className={css(styles.root, className)}>
        <span className={css(styles.label)}>{labels[0]}</span>
        <div className={css(styles.toggle)} onClick={handleToggle}>
          <div
            className={css(
              styles.handler,
              animated === 'right' && styles.animatedRight,
              animated === 'left' && styles.animatedLeft
            )}
          ></div>
        </div>
        <span className={css(styles.label)}>{labels[1]}</span>
      </div>
    </>
  );
};

const translateKeyRightFrames = {
  '0%': {
    transform: 'translateX(0)'
  },
  '100%': {
    transform: 'translateX(28px)'
  }
};

const translateKeyLeftFrames = {
  '0%': {
    transform: 'translateX(28px)'
  },
  '100%': {
    transform: 'translateX(0px)'
  }
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 500
  },
  label: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 700
  },
  toggle: {
    backgroundImage: `linear-gradient(to right, ${colors.light}, ${colors.primary})`,
    borderRadius: 40,
    height: 33,
    position: 'relative',
    width: 60,
    cursor: 'pointer',
    marginLeft: 24,
    marginRight: 24
  },
  handler: {
    borderRadius: '50%',
    backgroundColor: colors.paper,
    height: 26,
    width: 26,
    position: 'absolute',
    top: 3,
    left: 3,
    animationDuration: '0.5s, 1200ms'
  },
  animatedRight: {
    animationName: [translateKeyRightFrames],
    transform: 'translateX(28px)'
  },
  animatedLeft: {
    animationName: [translateKeyLeftFrames],
    transform: 'translateX(0px)'
  }
});

export default Switch;
