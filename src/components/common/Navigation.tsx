import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const navItems = [
  {
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    title: 'Statistic',
    path: '/statistic',
  },
];

const Navigation: FC = () => {
  return (
    <NavigationStyled>
      <NavList>
        {navItems.map(item => (
          <li key={item.path}>
            <NavLinkStyled to={item.path}>{item.title}</NavLinkStyled>
          </li>
        ))}
      </NavList>
    </NavigationStyled>
  );
};

export default Navigation;

const NavigationStyled = styled.nav`
  margin-left: 50px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;

  &.active,
  &:hover {
    text-decoration: underline;
  }
`;
