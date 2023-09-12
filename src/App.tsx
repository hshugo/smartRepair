import './styles/styles.scss';
import Layout from './layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './views/users/UserList';
import BrandEdit from './views/brands/BrandEdit';
import BrandList from './views/brands/BrandList';
import { BRAND_EDIT, BRAND_LIST, USER_LIST } from './constants/paths';

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Routes>
            <Route index element={<div>HOME</div>} />
            <Route path={BRAND_LIST} element={<BrandList />} />
            <Route path={BRAND_EDIT} element={<BrandEdit />} />
            <Route path={USER_LIST} element={<UserList />} />
            <Route path='*' element={<div>404</div>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
