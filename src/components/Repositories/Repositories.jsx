import React from 'react';
import './Repositories.scss';
import Pagination from '../Pagination/Pagination';
import { useSelector } from 'react-redux';

const REPOS_PER_PAGE = 4;

function Repositories(props) {
  const currPage = useSelector(state => state.repos.currPage);
  const repos = props.repos;
  const reposTotalCount = repos.length;

  const startIndex = currPage * REPOS_PER_PAGE - REPOS_PER_PAGE;
  const endIndex = startIndex + REPOS_PER_PAGE - 1;
  const reposItems = repos.map((item, index) => {
    if (index >= startIndex && index <= endIndex) {
      return (
        <div className="Repositories__item" key={index}>
          <p className="Repositories__name">
            <a href={item.html_url} target="_blank" rel="noreferrer">{item.name}</a>
          </p>
          <p className="Repositories__description">{item.description}</p>
        </div>);
    }
    return null;
  });

  return (
    <div className="Repositories">
      <h3 className="Repositories__title">Repositories ({reposTotalCount})</h3>
      <div className="Repositories__list">
        {reposItems}
      </div>
      <Pagination
        reposCount={reposTotalCount}
        perPage={REPOS_PER_PAGE}
        startIndex={startIndex} endIndex={endIndex}
      />
    </div>
  );
}

export default Repositories;