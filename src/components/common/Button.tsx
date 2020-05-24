import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

interface ButtonInterface {
  fullWidth: boolean;
  indigo: boolean;
  children?: string;
}

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props: ButtonInterface) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props: ButtonInterface) =>
    props.indigo &&
    css`
      background: ${palette.indigo[5]};
      &:hover {
        background: ${palette.indigo[4]};
      }
    `}
`;

const Button = (props: ButtonInterface) => <StyledButton {...props} />;

export default Button;
