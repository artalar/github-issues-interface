import React, { Component } from 'react';
import styled from 'styled-components';


const EmptyResult = ({ className }) =>
  <h2 className={className}>
    Nothing found
  </h2>;

export default styled(EmptyResult)`
  color: darkblue;
  text-align: center;
`;