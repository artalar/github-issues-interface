import React, { Component } from 'react';
import styled from 'styled-components';

import IssueAuthor from './IssueAuthor.jsx';
import parseDate from '../utils/parseDate';


const Issue = ({ issue, className }) =>
  <div className={className}>
    <div className='issue-header'>
      <IssueAuthor author={issue.user} />
      <div className='issue-date'>{parseDate(issue.created_at)}</div>
    </div>
    <div className='issue-body'>
      <a href={issue.html_url}><div className='issue-number'>{issue.number}</div></a>
      <div className='issue-title'>{issue.title}</div>
    </div>
  </div>;

export default styled(Issue)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 10px -3px darkblue;
  text-decoration: none;

  .issue-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .issue-date {
      color: darkblue;
      font-size: 0.8rem;
    }
  }

  .issue-body {
    width: 100%;
    display: flex;
    text-decoration: none;

    .issue-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 20px;
      border-radius: 7px;
      color: #f2f2f9;
      font-size: 0.8rem;
      background: #00008b;
      text-decoration: none;
    }

    .issue-title {
      margin-left: 15px;
      color: darkblue;
    }
  }
`;