import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/FirebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { FaBars } from 'react-icons/fa';
import avatar from '../../assets/devconncet.png';

const NavItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Error logging in:', error.code, error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error.code, error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`text-white px-4 py-2 fixed w-full top-0 z-10 transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <img src={avatar} alt='avatar' className='w-10 h-10 rounded-full' />
          <h1 className='text-xl font-bold ml-2'>DevConnect</h1>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <FaBars className='text-2xl' />
          </button>
        </div>

        <div className='hidden md:flex md:justify-center flex-grow'>
          {NavItems.map((item, index) => (
            <Link
              to={item.href}
              key={index}
              className='text-white hover:text-gray-200 ml-10 px-4 hover:bg-gray-800 py-1 rounded-md'
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className='hidden md:flex items-center'>
          {user ? (
            <div className='flex items-center space-x-4'>
              <img src={user.photoURL} alt='User avatar' className='w-10 h-10 rounded-full' />
              <h1 className='text-white text-xl font-bold'>{user.displayName}</h1>
              <button onClick={handleLogout} className='bg-red-500 px-3 py-1 rounded text-white'>
                Logout
              </button>
            </div>
          ) : (
            <button onClick={handleLogin} className='bg-blue-500 px-3 py-1 rounded text-white'>
              Login with Google
            </button>
          )}
        </div>
      </div>

      {/* Sidebar with ease-in-out transition */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform ease-in-out duration-300 md:hidden`}
      >
        <div className='flex flex-col mt-2 p-4'>
          <button onClick={toggleMenu} className='self-end mb-4 text-white'>
            Close
          </button>

          {NavItems.map((item, index) => (
            <Link
              to={item.href}
              key={index}
              className='text-white hover:text-gray-200 px-3 py-2 rounded-md'
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {user ? (
            <div className='flex items-center mt-6 h-full relative bottom-0 space-x-4 flex-col '>
              <div className='flex space-x-4 items-center'>
                <img src={user.photoURL} alt='User avatar' className='w-10 h-10 rounded-full' />
                <h1 className='text-white text-xl font-bold'>{user.displayName}</h1>
              </div>
              <button
                onClick={handleLogout}
                className='bg-red-500 px-3 py-1 mt-4 rounded text-white w-full text-center'
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className='bg-blue-500 px-3 py-1 rounded text-white mt-4 w-full text-center'
            >
              Login with Google
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

