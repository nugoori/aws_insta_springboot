import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useRecoilState } from 'recoil';
import { showModalState } from '../../../store/atoms/ModalState';

function ModalLayout({ children }) {

    const [ showModal, setShowModal ] = useRecoilState(showModalState);

    const handleBackGroundClick = (e) => {
        setShowModal(<></>);
    }

    const handleContainerClick = (e) => {
        e.stopPropagation(); // 이벤트가 하위 ~~로 넘어가지 않도록
    }

    return (
        <div css={S.SLayout} onClick={handleBackGroundClick}>
            <div css={S.SContainer} onClick={handleContainerClick}>

                {children}
            </div>
        </div>
    );
}

export default ModalLayout;