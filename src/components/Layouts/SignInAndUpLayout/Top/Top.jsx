import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import logo from '../../../../assets/logo.png'

function Top({children}) {
    return (
        <div css={S.SLayout}>
            <div css={S.SLogoBox}>
                <img css={S.SLogoImg} src={logo} alt=""/>
            </div>
            {children}
        </div>
    );
}

export default Top;