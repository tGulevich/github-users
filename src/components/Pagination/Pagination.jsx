import ReactPaginate from 'react-paginate';
import './Pagination.scss'

function Pagination() {
  return (
    <div className="Pagination">
      <div className="Pagination__info">
        5-8 of 249 items
      </div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'Pagination__btn'}
        // pageCount={this.state.pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        // onPageChange={this.handlePageClick}
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
