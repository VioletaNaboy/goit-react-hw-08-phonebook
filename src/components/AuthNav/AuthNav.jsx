import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Button } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        <Button>Register</Button>
      </NavLink>
      <NavLink className={css.link} to="/login">
        <Button>Log In</Button>
      </NavLink>
    </div>
  );
};
