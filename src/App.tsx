import { Router } from './routes/Router';
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { Navbar } from './components/Navbar';

export const App: React.FC = () => {
  return (
    <Theme>
      <ThemePanel />
      <Navbar />
      <Router />
    </Theme>
  );
};
