import styled from 'styled-components';

export const RowCountries = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 500px){
        justify-content: center;
    }
`
export const Card = styled.div`
    width: 22%;
    box-shadow: 0px 0px 5px #dededed1;
    border-radius: 10px;
    margin-bottom: 60px;
    img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
        height: 180px;
        object-fit: cover;
        object-position: center;
    }
    div {
        padding: 20px 20px;
    }
    h3 {
        margin-top: 0;
        margin-bottom: 15px;
    }
    p { 
        margin-top: 0px;
        margin-bottom: 6px;
    }
    @media (max-width: 768px){
        width: 30%;
        margin-bottom: 30px;
    }
    @media (max-width: 600px){
        width: 48%;
        margin-bottom: 20px;
    }
    @media (max-width: 500px){
        width: 94%;
    }
`

export const RowFilter = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 60px 0px;
`

export const WrapHome = styled.div``