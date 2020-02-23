import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Switch = ({ className }) => {

  const [right, setRight] = useState(false);

  return (
    <>
      <div className={css(styles.root, className)}>
        <span className={css(styles.label)}>Anually</span>
        <div className={css(styles.toggle)}>
          <div className={css(styles.handler)}></div>
        </div>
        <span className={css(styles.label)}>Monthly</span>
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: 500
  },
  label: {
    color: 'hsl(233, 13%, 49%)',
    fontSize: 14
  },
  toggle: {
    backgroundColor: 'hsl(233, 13%, 49%)',
    borderRadius: 40,
    height: 30,
    position: 'relative',
    width: 60,
    cursor: 'pointer'
  },
  handler: {
    borderRadius: '50%',
    backgroundColor: '#fff',
    height: 24,
    width: 24,
    position: 'absolute',
    top: 3,
    left: 3
  }
});

export default Switch;
