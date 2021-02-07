import styled, { css } from 'styled-components';

interface SearchContainerProps {
  focus: boolean;
}

export const Container = styled.div`
  background-color: var(--background-alt);
  height: 100vh;
  padding: 1.5rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--background-alt);
  }

  ::-webkit-scrollbar-track {
    background-color: var(--background-alt);
  }

  > div {
    display: flex;
    justify-content: flex-end;

    button {
      background: transparent;
      border: none;
      color: var(--text);
    }
  }
`;

export const SearchContainer = styled.form<SearchContainerProps>`
  margin-top: 2rem;

  display: flex;
  align-items: center;

  > div {
    border: 1px solid var(--border);
    flex: 1;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    color: var(--border);

    input {
      width: 100%;
      background: transparent;
      border: none;
      color: var(--text);
      font-weight: 500;
      font-size: 1rem;
      padding: 0.8rem 0.5rem;
      outline: none;
      margin-left: 0.5rem;
    }

    svg {
      margin-left: 0.5rem;
    }

    ${props =>
      props.focus &&
      css`
        border: 1px solid var(--text);
      `}
  }

  > button {
    background: var(--blue);
    border: 1px solid var(--background-alt);
    color: var(--text);
    font-weight: 500;
    font-size: 1rem;
    padding: 0.8rem 1rem;
  }
`;

export const ResultsList = styled.ul`
  margin-top: 3rem;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    color: var(--text);
    cursor: pointer;
    border: 1px solid var(--background-alt);
    transition: all 0.2s ease;

    &:hover {
      border-color: var(--border);
    }

    svg {
      color: var(--border);
    }
  }

  li + li {
    margin-top: 1rem;
  }

  p {
    color: var(--text-alt);
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
`;
