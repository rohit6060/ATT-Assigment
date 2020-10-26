import styled from 'styled-components';

export const List = styled.ul`
    margin-top:  20px;
    text-align: center;
    @media only screen and (min-width: 1020px) {
        margin-top: 100px;
    }
`;


export const ListItem = styled.li`
    display: inline-block;
    width: 100px;
    position:relative;
    padding: 20px;
    margin: 0 20px; 
    .icon {
        max-width: 38px;
        max-height: 38px;
    }
    &::after {
        content: '';
        position: absolute;
        border-bottom: 5px solid #aaa;
        bottom: 0;
        right: 0;
        width: 100%;
        border-radius: 10px;
    }
    &.active {
        &::after {
            border-color: #1c1c80;
        }
    }
`;