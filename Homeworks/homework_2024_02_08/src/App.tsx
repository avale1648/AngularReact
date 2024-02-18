import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import Form from './components/form/Form';
import List from './components/list/List';
import Navigation from './components/navigation/Navigation';
import Table from './components/table/Table';
import './styles.css';
interface I_Post{
  id: number;
  title: string;
  body: string;
}
function App() {
  const [posts, setPosts] = useState<I_Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await axios.get<I_Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch(error){
        console.error('Error fetching:', error);
      }
    };
    fetchPosts();
  }, []);
  const indexOfLastPost: number = currentPage * postsPerPage; 
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts: I_Post[] = posts.slice(indexOfFirstPost, indexOfLastPost);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const addPost = (post: I_Post) => {
    setPosts([post, ...posts]);
  };
  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Form onAddPost={addPost}/>
          <h1>Посты</h1>
          <List posts={currentPosts}/>
          <Navigation currentPage={currentPage} pagesLength={Math.ceil(posts.length/postsPerPage)} onPageChange={handlePageChange}/>
        </div>
        <div className='col'>
          <h1>Таблица</h1>
          <Table posts={posts}/>
        </div>
      </div>
    </div>
  )
}
export default App;