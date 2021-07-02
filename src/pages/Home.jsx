import { useEffect, useState } from 'react';
import List from '../components/List';
import Search from '../components/Search';

const Home = () => {
  //State
  const [posts, setPosts] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  //EventHandler
  const searchedItems = posts.filter((post) =>
    post.title.toLowerCase().includes(searchfield.toLowerCase())
  );
  //Effects
  useEffect(() => {
    const loginCheck = localStorage.getItem('LoggedIn');
    if (!loginCheck) {
      window.open('/login', '_self');
    }
  }, []);
  return (
    <>
      <Search
        posts={posts}
        searchfield={searchfield}
        setSearchfield={setSearchfield}
        searchedItems={searchedItems}
      />
      <List searchedItems={searchedItems} setPosts={setPosts} />
    </>
  );
};

export default Home;
