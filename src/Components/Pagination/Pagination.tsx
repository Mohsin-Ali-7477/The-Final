import  { useContext, useEffect, useState } from 'react';
import { AppContext } from './PagContext';


const Pagination = () => {
  const { data, loading, fetchData, pagination } = useContext(AppContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData('https://jsonplaceholder.typicode.com/posts', page); 
  }, [ page]); 
  const handleNextPage = () => {
    if (pagination.currentPage < pagination.totalPages) {
      setPage(pagination.currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pagination.currentPage > 1) {
      setPage(pagination.currentPage - 1);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 className='font-bold text-3xl'>API DATA</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <h4 className='font-bold'>{item.title}</h4>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>

          
          <div style={{ marginTop: '20px' }}>
            <button onClick={handlePreviousPage} disabled={pagination.currentPage === 1}>
              Previous
            </button>
            <span style={{ margin: '0 10px' }}>
              Page {pagination.currentPage} of {pagination.totalPages}
            </span>
            <button onClick={handleNextPage} disabled={pagination.currentPage === pagination.totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;