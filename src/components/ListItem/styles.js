import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin: 0.8rem 1.6rem;
  padding: 0.8rem;
  border: 0.1rem solid #d7d7d7;
  border-radius: 0.4rem;
  background: white;

  .btn-delete {
    position: absolute;
    right: 0.8rem;
    background: #ed2250;
    color: white;
    width: 2.4rem;
    height: 2.4rem;
    text-align: center;
    line-height: 2.4rem;
    font-size: 1.4rem;
    border-radius: 0.2rem;

    &:hover {
      cursor: pointer;
    }
  }

  h3 {
    margin: 0;
    font-weight: normal;
  }

  p {
    margin: 0.8rem 0 0;
  }
`;
