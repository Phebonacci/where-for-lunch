import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Condition from 'components/Condition/Condition';
import conditionActions from 'actions/conditionActions';

const mapStateToProps = state => ({
  condition: state.condition,
  pricingLevels: state.pricingLevels,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setRadius: conditionActions.setRadius,
    setPriceSelection: conditionActions.setPriceSelection,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Condition);
