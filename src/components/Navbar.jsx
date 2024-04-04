import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'active': '';

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
            
              <div>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/asd' className={linkClass}>
                  ASD
                </NavLink>
                <NavLink to='/add-job' className={linkClass}>
                  Add Job
                </NavLink>
              </div>
    </nav>
  );
};
export default Navbar;