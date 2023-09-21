import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function NavItem({ onclick, children }) {

    return (
        <div css={S.SLayout} onclick={onclick}>
            {children}
        </div>
    );
}

export default NavItem;