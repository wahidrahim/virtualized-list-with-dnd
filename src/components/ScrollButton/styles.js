import styled from 'styled-components';

export const Button = styled.div`
  position: absolute;
  right: 6.4rem;
  bottom: 3.2rem;
  width: 6.4rem;
  height: 6.4rem;
  background: #ed2250;
  border-radius: 50%;
  opacity: 50%;
  transition: opacity 100ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.2rem;
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    cursor: pointer;
    opacity: 100%;
  }
`;
