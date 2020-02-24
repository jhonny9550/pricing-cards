import React, { useCallback, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Switch = props => {
  const { className, labels, onToggle } = props;

  const [value, setValue] = useState(labels[0]);
  const [animated, setAnimated] = useState(null);

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
    color: 'hsl(237, 63%, 64%)',
    fontSize: 14,
    fontWeight: 700
  },
  toggle: {
    backgroundImage:
      'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
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
    backgroundColor: '#fff',
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
