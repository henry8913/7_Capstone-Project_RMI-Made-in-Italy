import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import Logo from '../../assets/images/logo.svg';
import CartIcon from '../CartIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  // Chiudi il menu quando cambia la location
  useEffect(() => {
    setIsOpen(false);
    setShowUserMenu(false);
  }, [location]);

  // Gestisci lo stato di scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setShowUserMenu(false);
      // Reindirizza l'utente alla home page dopo il logout
      navigate('/');
    } catch (error) {
      console.error('Errore durante il logout', error);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Auto', path: '/restomods' },    
    { name: 'Marchi', path: '/brands' },
    { name: 'Servizi', path: '/services/restoration' },  
    { name: 'Chi Siamo', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contatti', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-secondary-950/90 backdrop-blur-sm border-b border-secondary-900/30 py-3' : 'bg-transparent py-6'}`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img 
              src={Logo} 
              alt="RMI Made in Italy" 
              className="h-12 md:h-14 object-contain" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">  {/* Ridotto da space-x-10 a space-x-8 per ottimizzare lo spazio */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-2 py-2 text-xs uppercase tracking-[0.3em] font-extralight transition-all duration-500 hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-white'}`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[0.5px] bg-primary transform origin-left transition-transform duration-500 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'}`}
                />
              </Link>
            ))}
          </div>

          {/* User Menu, Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            {/* Cart Icon */}
            <CartIcon />
            
            {/* User Menu */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center justify-center w-10 h-10 bg-transparent border border-primary/70 text-primary hover:bg-primary/5 transition-all duration-500"
                >
                  <FaUser className="text-xs" />
                </button>
                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute right-0 mt-3 w-48 bg-secondary-950/95 backdrop-blur-sm border border-secondary-900/50 overflow-hidden z-50"
                    >
                      <div className="p-4 border-b border-secondary-900/30">
                        <p className="text-xs font-extralight text-white tracking-[0.15em] truncate">
                          {currentUser.email}
                        </p>
                      </div>
                      <div className="p-3">
                        <Link
                          to="/profile"
                          className="flex items-center px-4 py-3 text-xs text-white hover:text-primary transition-all duration-300 font-extralight tracking-[0.15em]"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Profilo
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-3 text-xs text-white hover:text-primary transition-all duration-300 font-extralight tracking-[0.15em]"
                        >
                          <FaSignOutAlt className="mr-3 text-xs" />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:block px-6 py-2 text-xs font-extralight tracking-[0.3em] uppercase bg-transparent border border-primary/70 text-primary hover:bg-primary/5 transition-all duration-500"
              >
                Accedi
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-transparent text-primary hover:text-white transition-all duration-500"
              aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {isOpen ? <FaTimes className="text-sm" /> : <FaBars className="text-sm" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="lg:hidden bg-secondary-950/95 backdrop-blur-sm border-b border-secondary-900/30 overflow-hidden"
          >
            <div className="container-custom py-6 space-y-7">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 text-xs uppercase tracking-[0.3em] font-extralight transition-all duration-300 ${isActive(link.path) ? 'text-primary' : 'text-white hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/cart"
                className={`block px-4 py-2 text-xs uppercase tracking-[0.3em] font-extralight transition-all duration-300 ${isActive('/cart') ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                Carrello
              </Link>
              {!currentUser && (
                <Link
                  to="/login"
                  className="block w-full px-6 py-3 text-xs font-extralight tracking-[0.3em] uppercase bg-transparent border border-primary/70 text-primary hover:bg-primary/5 transition-all duration-500 text-center mt-8"
                >
                  Accedi
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
