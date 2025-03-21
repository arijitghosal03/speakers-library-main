import styled from 'styled-components';

export const PageSpaceStyles = styled.div`
  padding-top: ${(props) => props.top || 150}px;
  padding-bottom: ${(props) => props.bottom || 200}px;
`;
