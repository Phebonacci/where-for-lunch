import { setPriceSelection } from 'reducers/conditionReducer';

describe('setPriceSelection', () => {
  const action = { payload: '2' };
  test('returns state with price assigned with only the value of action payload when price is empty', () => {
    const state = { price: '' };
    expect(setPriceSelection(state, action)).toMatchObject({ price: '2' });
  });

  test('returns state with price assigned with only the value of action payload when price is not defined', () => {
    const state = {};
    expect(setPriceSelection(state, action)).toMatchObject({ price: '2' });
  });

  test('returns state with action payload concatenated to state price when price does not contain action payload', () => {
    const state = { price: '1' };
    expect(setPriceSelection(state, action)).toMatchObject({ price: '1,2' });
  });

  test('returns state with action payload removed from state price when price contains action payload', () => {
    const state = { price: '1,2' };
    expect(setPriceSelection(state, action)).toMatchObject({ price: '1' });
  });

  test('returns state with price empty when price only contains the action payload', () => {
    const state = { price: '2' };
    expect(setPriceSelection(state, action)).toMatchObject({ price: '' });
  });
});
