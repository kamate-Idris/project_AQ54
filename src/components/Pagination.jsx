import ReactJsPagination from 'react-js-pagination';

const Pagination = ({ currentPage, itemsPerPage, totalItems,handlePageChange }) => {
    return (
        <div className="pagination-container">
          <ReactJsPagination
              activePage={currentPage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={totalItems}
              pageRangeDisplayed={5} // Nombre de pages à afficher dans la pagination
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
          />
      </div>
  )
}

export default Pagination