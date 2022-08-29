import React from 'react';
import renderer from 'react-test-renderer';
import { create, act } from 'react-test-renderer';
import HomeScreen from '../components/HomeScreen';

const tree = create(<HomeScreen />);

test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('search button pressed', () => {
    const button = tree.root.findByProps({ testID: "searchButton"}).props;
    act(() => button.onPress)

    const text = tree.root.findByProps({ testID: "noResult"}).props;
    expect(text.children).toEqual('Result (0):');
  });