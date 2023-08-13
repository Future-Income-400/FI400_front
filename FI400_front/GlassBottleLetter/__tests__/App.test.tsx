import 'react-native';
import React from 'react';
import App from '../App';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

it('App.tsx 랜더링 테스트', () => {
  renderer.create(<App />);
});
