import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Checkbox from 'components/Checkbox/Checkbox';
import styles from './Condition.css';

export default class Condition extends PureComponent {
  handleOnBlurAction = (e) => {
    this.props.setRadius(e.target.value);
  }

  handleOnPriceToggled = (e) => {
    this.props.setPriceSelection(e.target.value);
  }

  render() {
    const { condition: { radius }, pricingLevels } = this.props;
    return (
      <div className={styles.root}>
        <span>price:</span>
        {
          pricingLevels && pricingLevels.map((priceLevel) => {
            return (
              <Checkbox
                key={priceLevel.value}
                label={priceLevel.key}
                value={priceLevel.value}
                onChange={this.handleOnPriceToggled} />
            );
          })
        }
        {' '}
        <span>radius:</span>
        <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input>
        <span>meters</span>
      </div>
    );
  }
}

Condition.propTypes = {
  condition: PropTypes.object,
  pricingLevels: PropTypes.arrayOf(PropTypes.object),
  setRadius: PropTypes.func,
  setPriceSelection: PropTypes.func,
};
