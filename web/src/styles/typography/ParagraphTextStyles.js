import styled from 'styled-components';

export const ParagraphTextStyles = styled.p`
  font-family: 'Inter', sans-serif;
  color: var(--grey);
  font-size: 2rem;
  line-height: 2;
  .goal-text {
    color: var(--white);
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.7rem;
    .goal-text {
      color: var(--white);
    }
  }
`;
