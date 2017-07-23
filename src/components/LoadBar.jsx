import React, { Component } from 'react';
import styled from 'styled-components';


const LoadBar = ({ className }) =>
  <div className={className}>
    <div className='spiner'></div>
  </div>;

export default styled(LoadBar)`
  width: 100%;
  display: flex;
  justify-content: center;

  .spiner {
    width: 40px;
    height: 40px;
    border: 2px solid #f2f2f9;
    border-top: 2px solid darkblue;
    border-radius: 50%;
    animation: spiner 1s linear infinite;

    @keyframes spiner {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }
`;