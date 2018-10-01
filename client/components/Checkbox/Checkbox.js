import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Checkbox.css';

const Checkbox = ({ onChange, label, value }) => {
  return (
    <label
      className={classNames({
        [styles.root]: true,
      })}>
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      { label }
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
