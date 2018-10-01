import React from 'react';
import { render } from 'enzyme';
import { HomePage } from 'client/containers/HomePage';
import renderer from 'react-test-renderer';

jest.mock('components/Place/Place', () => 'Place');
jest.mock('containers/PlaceCondition', () => 'PlaceCondition');

test('With Enzyme, HomePage component disables out the search Button when no latitude is fetched', () => {
  const condition = { radius: 500 };
  const wrapper = render(
    <HomePage condition={condition} />,
  );
  const disabledButton = wrapper.find('.homepageClick.disabled');
  expect(disabledButton.length).toBe(1);
});

test('With Jest snapshot, HomePage component disables and greys out the search Button when no latitude is fetched', () => {
  const condition = { radius: 500 };
  const homePageComponent = renderer
    .create(<HomePage condition={condition} />)
    .toJSON();
  expect(homePageComponent).toMatchSnapshot();
});

test('With Jest snapshot, HomePage component enables the search Button when a latitude is fetched', () => {
  const condition = { radius: 500, latitude: 7.1 };
  const homePageComponent = renderer
    .create(<HomePage condition={condition} />)
    .toJSON();
  expect(homePageComponent).toMatchSnapshot();
});
