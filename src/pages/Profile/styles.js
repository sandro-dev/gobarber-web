import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto 0;
  padding-bottom: 100px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      border: 0;
      border-radius: 4px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      margin: 10px 0 20px;
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
    }

    span {
      color: #fb7675;
      margin: 0 0 10px;
      align-self: flex-start;
    }

    button {
      background: #3b9eff;
      height: 44px;
      padding: 0 15px;
      margin: 5px 0 0;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      font-size: 16px;
      color: #fff;
      margin-top: 15px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    background: #f64c75;
    width: 100%;
    height: 44px;
    padding: 0 15px;
    margin: 10px 0 0;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
