
/**
 * @format
 */

import 'react-native';
import React from 'react';
import LoginButton from '../Component/LoginButton';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('LoginPage Test', () => {
    it('<LoginButton /> renders correctly', () => {
        renderer.create(<LoginButton />);
    });
    it('<LoginButton /> onPress when clicked', () => {
        // const onPressMock = jest.fn(); // Mock 함수 생성
        // const { getByTestId } = render(<LoginButton onPress={onPressMock} />);
        // const loginButton = getByTestId('loginButton');

        // fireEvent.press(loginButton);

        // expect(onPressMock).toHaveBeenCalled();
    });
});




