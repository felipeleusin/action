import React, {PropTypes} from 'react';
import look, {StyleSheet} from 'react-look';
import theme from 'universal/styles/theme';

const combineStyles = StyleSheet.combineStyles;

let styles = {};

const PushButton = (props) => {
  const { disabled, keystroke, label, onClick, size } = props;
  const largeStyles = combineStyles(styles.button, styles.buttonLarge);
  const buttonStyles = size === 'large' ? largeStyles : styles.button;

  return (
    <div className={styles.block}>
      <button disabled={disabled} className={buttonStyles} onClick={onClick}>
        {keystroke}
      </button>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

PushButton.propTypes = {
  disabled: PropTypes.bool,
  keystroke: PropTypes.string,
  label: PropTypes.any,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    'default',
    'large'
  ])
};

PushButton.defaultProps = {
  keystroke: 'D',
  label: 'Delete everything!',
  onClick() {
    console.log('PushButton onClick');
  },
  size: 'default'
};

styles = StyleSheet.create({
  pushButtonGroup: {
    textAlign: 'left'
  },

  block: {
    display: 'block',
    marginBottom: '.25rem'
  },

  button: {
    backgroundColor: '#f0f1f4',
    border: 0,
    borderBottom: '2px solid #c3c5d1',
    borderRadius: '.25rem',
    color: theme.palette.warm,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: theme.typography.s3,
    fontWeight: 700,
    lineHeight: 1,
    marginRight: '.25rem',
    padding: '.25rem',
    textAlign: 'center',
    textShadow: '0 1px 0 #fff',
    verticalAlign: 'middle',
    width: '1.5rem',

    ':focus': {
      backgroundColor: '#dcdbdf',
      borderBottom: '0',
      borderTop: '2px solid #a4a7b9',
      outline: 'none'
    }
  },

  buttonLarge: {
    fontSize: theme.typography.s4,
    padding: '.375rem',
    width: '1.75rem'
  },

  label: {
    display: 'inline-block',
    fontFamily: theme.typography.serif,
    fontSize: theme.typography.s3,
    fontStyle: 'italic',
    fontWeight: 400,
    verticalAlign: 'middle'
  }
});

export default look(PushButton);
