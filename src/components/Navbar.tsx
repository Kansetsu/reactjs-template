import { NavItem, List, ListItem } from './Navbar.styles';
import { Link } from '@radix-ui/themes';

export const Navbar = () => {
  return (
    <NavItem>
      <List>
        <ListItem>
          <Link href="#" color="yellow">
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#" color="yellow">
            Sobre
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#" color="yellow">
            Contato
          </Link>
        </ListItem>
      </List>
    </NavItem>
  );
};
