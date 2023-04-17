import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  margin-top: 20%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoaderCircle = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  &:after {
    content: " ";
    display: block;
    width: 146px;
    height: 146px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const Loader = () => {
    return (
        <LoaderWrapper>
            <LoaderCircle />
        </LoaderWrapper>
    );
};

export default Loader;
