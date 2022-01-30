import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    outline: none;
    color: ${props => props.color || 'white'};
    background-color: ${props => props.bc || 'black'};
    margin: ${props => props.m || '0'};
    padding: 5px 12px;
    border-radius: 3px;
    width: ${props => props.w || '100%'};
    letter-spacing: .8px;
    text-transform: capitalize;

`