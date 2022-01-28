import styled from 'styled-components';

export const Wrapper = styled.div`
   width: ${props => props.w || '100%'};
   display: flex;
   justify-content: ${props => props.jc || 'center'};
   align-items: ${props => props.ai || 'center'};
   margin: auto;
   background-color: ${props => props.bgc || ''};
`