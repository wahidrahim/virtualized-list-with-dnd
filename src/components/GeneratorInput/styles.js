import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: inherit;
`;

export const Input = styled.input`
  border: 0.1rem solid #d7d7d7;
  border-radius: 0.4rem;
  padding: 1.6rem;
  width: 18.4rem;
  font-size: 1.6rem;
`;

export const Button = styled.button`
  font-size: 1.6rem;
  background: #ed2250;
  color: white;
  border: none;
  padding: 1.6rem;
  border-radius: 0.4rem;
  min-width: 10rem;

  &[type='submit'] {
    margin: 0 0.8rem;
  }
`;
