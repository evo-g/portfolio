import styled from 'styled-components';

export const StyledLoading = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    border: 1.6rem solid #000000;
    border-radius: 50%;
    border-top: 1.6rem solid #56a5eb;
    width: 12rem;
    height: 12rem;
    animation: spin 2s linear infinite;
    margin: 40px;
  }
`