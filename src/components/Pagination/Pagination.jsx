import ReactPaginate from 'react-paginate';
import './Pagination.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrPage } from '../../reducers/reposReducer'

function Pagination(props) {
  const dispatch = useDispatch();
  const currPage = useSelector(state => state.repos.currPage);

  const reposTotalCount = props.reposCount;
  const pageCount = Math.ceil(reposTotalCount / props.perPage);
  const startItemIndex = props.startIndex + 1;
  const endItemIndex = props.endIndex + 1 > reposTotalCount ? reposTotalCount : props.endIndex + 1;

  const paginationInfo = startItemIndex !== endItemIndex ?
    `${startItemIndex}-${endItemIndex} of ${reposTotalCount} items` :
    `${endItemIndex} of ${reposTotalCount} items`;

  return (
    <div className="Pagination">
      <div className="Pagination__info">
        {paginationInfo}
      </div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'Pagination__btn'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        forcePage={currPage - 1}
        onPageChange={(page) => dispatch(setCurrPage(page.selected + 1))}
        containerClassName={'Pagination__container'}
        pageClassName={'Pagination__btn'}
        previousClassName={'Pagination__arrow Pagination__arrow_prev'}
        nextClassName={'Pagination__arrow Pagination__arrow_next'}
        activeClassName={'Pagination__btn_active'}
      />
    </div>
  );
}

export default Pagination;
