import { Route, Routes } from 'react-router-dom'
import AllMeetups from './pages/AllMeetup'
import NewMeetup from './pages/NewMeetup'
import Favorite from './pages/Favorites'
import Layout from './components/layouts/Layout';

function App() {
  return (
    <Layout >
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Layout>
  );
}

export default App;
