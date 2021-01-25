import React from 'react';
import styled from 'styled-components'

export const ArticleWrapper = styled.li`
  background: #f2f2f2;
  margin: 20px auto;
  padding: 10px 15px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  color: #333333;
  text-align: left;
`

export const Button = styled.button`

  display: inline-block;
  border: 1px solid #333333;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #333333;
  text-decoration: none;

  a {
    text-decoration: none;
    color: #333333;
  }

  &:hover {
    background-color: #333333;
    color: #dddddd;
    transition: transform 0.1s;
    transform: scale(1.06);

    a {
    color: #dddddd;
    }
  }
`

export const Byline = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
`
const NewsListItem = ({ title, author, published, link, snippet }) => {
	return (
		<ArticleWrapper>
			<h2>{title}</h2>
			<h3>{snippet}</h3>
			<Byline>{author}<br/>{published.slice(0, 10)}</Byline>
			<Button>
				<a href={link} target="_blank">Read</a>
			</Button>
		</ArticleWrapper>
	);
};

export default NewsListItem;