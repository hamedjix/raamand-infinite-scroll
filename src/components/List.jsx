import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import Post from './Post';
import Loader from '../loading.gif';

const List = ({ searchedItems, setPosts }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  //Variables
  const itemsPerPage = 10;
  let num = 1;
  //Refrences
  const pageEnd = useRef();
  //API
  const getPosts = async (pageNumber, itemsPerPage) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${itemsPerPage}`
    );
    setPosts((p) => [...p, ...res.data]);
    setLoading(true);
  };
  //Load More
  const loadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  //Use Effect
  useEffect(() => {
    getPosts(pageNumber, itemsPerPage);
  }, [pageNumber]);

  useEffect(() => {
    if (loading) {
      const scroll = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            num++;
            loadMore();
            if (num >= 10) {
              scroll.unobserve(pageEnd.current);
            }
          }
        },
        { threshold: 1 }
      );

      scroll.observe(pageEnd.current);
    }
  }, [loading, num]);

  // Get current items
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = searchedItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container>
      <Row className='justify-content-center'>
        {searchedItems.map((post) => (
          <Col key={post.id}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: 'center' }} ref={pageEnd} className='loading'>
        <img style={{ width: '5rem' }} src={Loader} alt='Loader' />
      </div>
    </Container>
  );
};

export default List;
