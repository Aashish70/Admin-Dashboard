import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => (

  <div className="flex justify-center mt-4">
    <ReactPaginate
      previousLabel={'Previous'}
      nextLabel={'Next'}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={'flex space-x-2'}
      pageClassName={'bg-white border rounded px-3 py-1'}
      previousClassName={'bg-white border rounded px-3 py-1'}
      nextClassName={'bg-white border rounded px-3 py-1'}
      activeClassName={'bg-blue-500 text-white'}
      breakClassName={'bg-white border rounded px-3 py-1'}
    />
  </div>
);

export default Pagination;
