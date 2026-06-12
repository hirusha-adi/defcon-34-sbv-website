import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Schedule } from './pages/Schedule';
import { Speakers } from './pages/Speakers';
import { Sponsors } from './pages/Sponsors';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
