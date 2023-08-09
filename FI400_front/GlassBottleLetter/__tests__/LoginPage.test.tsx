
/**
 * @format
 */

import 'react-native';
import React from 'react';
import LoginButton from '../Component/LoginButton';

import {it} from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';

describe('로그인페이지 테스트', () => {
    const kakaoImagePath = '../Image/kakao_login_large_wide.png'

    it('카카오로그인 버튼이 올바르게 랜더링', () => {
        const { getByText } = render(<LoginButton />);
        const kakaoButton = getByText('카카오 소셜 로그인');
        
        expect(kakaoButton).toBeTruthy();
    });
    it('카카오로그인 버튼 클릭 시 함수 호출', () => {
        const mockLoginFunction = jest.fn(); // 모의 함수를 생성.
        const { getByText } = render(<LoginButton onPress={mockLoginFunction}/>); // 컴포넌트에 모의 함수를 전달합니다.
        const kakaoButton = getByText('카카오소셜 로그인');

        fireEvent.press(kakaoButton); // 버튼을 클릭하는 이벤트를 발생.

        expect(mockLoginFunction).toHaveBeenCalled(); // 모의 함수가 호출되었는지 검증.
    });
});

