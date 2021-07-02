import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ itemsPerPage, totalItems, setCurrentPage }) => {
  const pageNumbers = [];
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination className='justify-content-center my-2'>
      {pageNumbers.map((number) => (
        <Pagination.Item key={number} onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
