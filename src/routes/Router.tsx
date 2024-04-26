import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Content } from '../pages/Content';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-page" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
};
