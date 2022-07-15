import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  margin: 0.8rem;
  min-height: 50px;
  width: 250px;
  outline-style: none;
  text-decoration: none;
  padding: 0.5rem 1rem;

  font: inherit;
  font-weight: var(--text-medium);

  cursor: pointer;

  transition: all 0.2s;

  ${(props) =>
    props.full
      ? css`
          width: 100%;
        `
      : ``}

  ${(props) =>
    props.primary
      ? css`
          background-color: var(--bg-secondary);
          color: var(--txcolor-secondary);
          font-family: var(--font-secondary);
          font-size: var(--text-size-3);
          border-radius: 0 9000px 0 0;
          justify-content: start;

          :hover {
            background-color: var(--bg-tertiary);
            color: var(--txcolor-primary);
            border: 2px solid var(--txcolor-primary);
          }
        `
      : ``}
      
  ${(props) =>
    props.primary2
      ? css`
          background-color: var(--bg-secondary);
          color: var(--txcolor-secondary);
          font-family: var(--font-secondary);
          font-size: var(--text-size-3);
          border-radius: 0 0 0 9000px;
          justify-content: end;

          :hover {
            background-color: var(--bg-tertiary);
            color: var(--txcolor-primary);
            border: 2px solid var(--txcolor-primary);
          }
        `
      : ``}
`;

export default Button;
