import { css } from '@emotion/react';

export const BodyNav = css`
    display: flex;
    justify-content: center;
    border-top: 1px solid #dbdbdb;
    width: 100%;

    & > li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 20px;
        height: 53px;
        font-size: 12px;
        cursor: pointer;
    }
    & > li:hover {
        border-top: 2px solid #000;
    }
`;

export const FeedList = css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    & > div:nth-child(3n) {
        margin-right: 0px;
    }
`;

export const FeedBox = css`
    margin-bottom: 4px;
    margin-right: 4px;
    width: 214px;
    height: 213px;
    background-color: #eee;
    cursor: pointer;
`;  
