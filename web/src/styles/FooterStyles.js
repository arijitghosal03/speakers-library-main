import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 2rem 0 2rem 0;
  text-align: center;
  background-color: var(--black-2);
  .logo {
    display: inline-block;
    height: 5vh;
    width: 18vw;
    align-items: center;
    justify-content: center;
  }
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 400px;
  }
  .footer__menuList {
    margin-top: 1rem;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        color: var(--gray);
        font-size: 1.5rem;
      }
    }
  }
  .footer__socialList {
    margin-top: 1.5rem;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: var(--gray);
      }
      :hover {
        a {
          color: var(--white-1);
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    color: var(--gray);
    font-size: 1.2rem;
  }
`;
