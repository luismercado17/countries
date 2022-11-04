import styled from 'styled-components';

export const RowDetails = styled.div`
    display: flex;
    padding: 30px 0px 60px;
    align-items: center;
    > div {
        width: 40%;
        display: flex;
        flex-wrap: wrap;
    }
    img {
        width: 100%;
    }
    > div:first-child {
        padding-right: 60px;
        width: 60%;
    }
    .borders {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        p {
            margin-right: 15px;
        }
    }
    .borders span {
        box-shadow: 0px 0px 5px #ddd;
        margin-right: 15px;
        padding: 2px 15px;
    }
    .listado p {
    width: 50%;
    margin-bottom: 20px;
    margin-top: 0;
    }
    .listado {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 35px;
        margin-top: 35px;
    }
    @media (max-width: 600px){
        flex-direction: column;
        > div {
            padding: 0 !important;
        }
        img {
            width: 100%;
        }
        .listado { 
            flex-direction: column;
            margin-bottom: 20px;
        }
        .listado p {
            margin-bottom: 15px;
            width: 100%;
        }
        .borders p {
            margin-right: 0px;
            width: 100%;
        }
    }
`

export const WrapDetails = styled.div`
    padding-top: 30px;
    button {
        background-color: transparent;
        box-shadow: 0px 0px 6px #ddd;
        padding: 4px 20px;
        border: none;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
    }
`