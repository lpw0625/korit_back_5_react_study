import { css } from "@emotion/react";

export const layout = css`
    padding: 100px 30px 0px;
`;

export const profileHeader = css`
   box-sizing: border-box;
   margin: 0px auto 20px;
   padding: 30px;
   border: 1px solid #dbdbdb;
   width: 700px;
   box-shadow: 1px 1px 5px #00000022;
   `;


export const title = css`
    margin-bottom: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
`;

export const profileImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto 20px;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 50%;

    width: 200px;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
    & > img {
        /* 높이와 너비 둘 중 하나만 100% */
        height: 100%;
        /* height: 100%; */
    }
`;

export const nicknameLayout = css`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const nickname = css`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 2px solid #dbdbdb;
    padding: 5px 10px 0px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    width: 200px;
    
    transition: background-color 0.3s ease-in-out ;
    cursor: pointer;

    &:focus {
        border-bottom: 2px solid #bbb;
        background-color: #fafafa;
    }

`;

export const profileInputLayout = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    box-sizing: border-box;
    margin: 0px auto 20px;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 700px;
    box-shadow: 1px 1px 5px #00000022;
`;

export const inputBox = css`
    position: relative;
    margin-bottom: 10px;
`;

export const profileInput = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 20px 20px 10px;
    font-size: 16px;
    font-weight: 600;
    width: 335px;
    &:nth-of-type(3n), &:nth-of-type(4n) {
        margin: 0;
    }

    // + -> 인접 형제 선택자

    &:focus {
        outline: 2px solid #5dd6f5;
    }

    & +label {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 23px;
        color: #333;
        font-weight: 600px;
        transition: all 0.2s ease-in-out;
    }

    &:focus + label, &:not(:placeholder-shown) + label {
        top: 13px;
        left: 23px;
        font-size: 11px;
    }
`;

export const buttonLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const profileButton = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 20px;
    width: 700px;
    height: 50px;
    background-color: white;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eeeeee;
    }
    
`;