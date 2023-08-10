
/**
 * @format
 */

import 'react-native';
import React from 'react';
import LoginButton from '../Component/LoginButton';

import {it} from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';

describe('로그인페이지 테스트', () => {
    // 카카오 원본 이미지 파일의 Raw 경로
    const kakaoImagePath = 'https://raw.githubusercontent.com/Future-Income-400/FI400_front/8018164c45e51f6415602ac74bd375492e29e2b7/FI400_front/GlassBottleLetter/Image/kakao_login_large_wide.png';


    it('카카오로그인 버튼이 올바르게 랜더링', () => {
        const { getByTestId } = render(<LoginButton imageSource={kakaoImagePath}/>);
        const kakaoButton = getByTestId('login-button');
        
        expect(kakaoButton).toBeTruthy();
    });
    it('카카오로그인 버튼 클릭 시 함수 호출', () => {
        const mockLoginFunction = jest.fn(); // 모의 함수를 생성.
        const { getByTestId } = render(<LoginButton imageSource={kakaoImagePath} onPress={mockLoginFunction}/>); // 컴포넌트에 모의 함수를 전달.
        const kakaoButton = getByTestId('login-button');

        fireEvent.press(kakaoButton); // 버튼을 클릭하는 이벤트를 발생.

        expect(mockLoginFunction).toHaveBeenCalled(); // 모의 함수가 호출되었는지 검증.
    });
});

