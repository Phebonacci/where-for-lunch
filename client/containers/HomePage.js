import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';

export class HomePage extends Component {
  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }

  handleOnConditionChange = (value) => {
    this.props.setRadius(value);
  }
  render() {
    const { condition, place } = this.props;
    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <div className="searchWrapper">
          <Condition condition={condition} action={this.handleOnConditionChange}/>
          <Button
            onClick={this.handleOnClick}
            theme="homepageClick"
            isDisabled={!condition.isLocationAvailable} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaces: placeActions.fetchPlaces,
    setRadius: conditionActions.setRadius,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
