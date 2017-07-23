import React, { Component } from 'react';
import styled from 'styled-components';


const IssueAuthor = ({ author, className }) =>
  <a className={className} href={author.html_url}>
    <div className='author-avatar'>
      <img src={author.avatar_url}/>
    </div>
    <div className='author-nickname'>{author.login}</div>
  </a>

export default styled(IssueAuthor)`
  display: flex;
  align-items: center;
  text-decoration: none;

  .author-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 5px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .author-nickname {
    color: darkblue;
    margin-left: 15px;
    font-size: 1rem;
  }

`;