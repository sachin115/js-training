import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableData from './components/tabledatas/TableData';
import Dashboard from './components/dashboard/Dashboard';
import UserData from './components/userform/UserForm';
import Post from './components/Posts/Post';
import Comment from './components/comments/Comment';
import Item from './components/pictures/Item';
import PostCard from './components/Posts/PostCard';



function App() {

  return (
    <div className='App'>
      <Router>
        <Dashboard />
        <Routes>
          <Route exact path="/tabledata" element={<TableData />} />
          <Route exact path="/user" element={<UserData />} />
          <Route exact path="/post" element={<Post />} />
          <Route exact path="/comment" element={<Comment />} />
          <Route exact path="/picture" element={<Item />} />
          <Route exact path="/posts/:userId" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



