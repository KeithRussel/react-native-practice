import React from 'react';
import {FlatList, Text} from 'react-native';
import renderer from 'react-test-renderer';
import CustomButton from '../src/utils/CustomButton';

test('renders correctly', () => {
  const tree = renderer.create(<CustomButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the Flatlist component', () => {
  const tree = renderer
    .create(
      <FlatList
        data={['Item1', 'Item2', 'Item3']}
        keyExtractor={item => item}
        renderItem={({item}) => <Text>{item}</Text>}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
