import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Checkbox.css';

const Checkbox = ({ onChange, key, value }) => {
  return (
    <label>
      <input
        type="checkbox"
        className={classNames({
          [styles.root]: true,
        })}
        value={value}
        onChange={onChange}
      />
      { key }
    </label>
  );
};

Checkbox.propTypes = {
  key: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
