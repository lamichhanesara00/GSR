import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock components for demo - replace with actual react-router-dom imports
const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);

const NavLink = ({ to, children, className, onClick, ...props }) => {
  const isActive = window.location.pathname === to;
  return (
    <a
      href={to}
      onClick={onClick}
      className={
        typeof className === "function" ? className({ isActive }) : className
      }
      {...props}
    >
      {typeof children === "function" ? children({ isActive }) : children}
    </a>
  );
};

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scroll position
      setScrollY(currentScrollY);

      // Don't hide/show navbar when menu is open
      if (isMenuOpen) return;

      // Hide/show navbar based on scroll direction and position
      if (currentScrollY < 50) {
        // At top - always show
        setIsVisible(true);
      } else if (currentScrollY > 150) {
        // After 150px - show with white background
        if (currentScrollY < lastScrollY) {
          // Scrolling up - show navbar
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY + 10) {
          // Scrolling down - hide navbar
          setIsVisible(false);
        }
      } else {
        // Between 50-150px - hide navbar
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Disable/enable scrolling when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Determine navbar style based on scroll position
  const isTransparent = scrollY < 50 && !isMenuOpen;
  const isWhiteBackground = (scrollY >= 150 && !isMenuOpen) || isMenuOpen;

  const navbarVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
    open: {
      rotate: 180,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const mobileNavLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/courses", label: "Our Courses" },
    { to: "/services", label: "Our Services" },
    { to: "/contact", label: "Contact Us" },
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {(isVisible || isMenuOpen) && (
          <motion.nav
            key="navbar"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isTransparent
                ? "bg-transparent"
                : isWhiteBackground
                ? "bg-white shadow-lg"
                : "bg-transparent"
            }`}
          >
            <div className="container mx-auto py-4 px-6">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                  <motion.img
                    src="logo4.png"
                    alt="Logo"
                    className="h-12 md:h-16 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-x-8">
                  {mobileNavLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      variants={linkVariants}
                      whileHover="hover"
                      whileTap="tap"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      }}
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `relative font-medium text-lg transition-all duration-300 hover:scale-105 ${
                            isTransparent
                              ? isActive
                                ? "text-yellow-400"
                                : "text-white hover:text-yellow-400"
                              : isActive
                              ? "text-yellow-400"
                              : "text-[#002452] hover:text-yellow-600"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {link.label}
                            {/* Active indicator */}
                            <motion.div
                              className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                                isTransparent ? "bg-yellow-400" : "bg-[#002452]"
                              }`}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: isActive ? 1 : 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              style={{ originX: 0.5 }}
                            />
                            {/* Hover indicator */}
                            <motion.div
                              className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                                isTransparent ? "bg-yellow-400" : "bg-blue-600"
                              } opacity-50`}
                              initial={{ scaleX: 0 }}
                              whileHover={{ scaleX: isActive ? 0 : 1 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              style={{ originX: 0.5 }}
                            />
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Hamburger Menu Button */}
                <motion.button
                  variants={hamburgerVariants}
                  animate={isMenuOpen ? "open" : "closed"}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center"
                >
                  <motion.span
                    className={`block w-6 h-0.5 mb-1 transition-all duration-300 ${
                      isTransparent && !isMenuOpen ? "bg-white" : "bg-[#002452]"
                    }`}
                    animate={{
                      rotate: isMenuOpen ? 45 : 0,
                      y: isMenuOpen ? 4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`block w-6 h-0.5 mb-1 transition-all duration-300 ${
                      isTransparent && !isMenuOpen ? "bg-white" : "bg-[#002452]"
                    }`}
                    animate={{
                      opacity: isMenuOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`block w-6 h-0.5 transition-all duration-300 ${
                      isTransparent && !isMenuOpen ? "bg-white" : "bg-[#002452]"
                    }`}
                    animate={{
                      rotate: isMenuOpen ? -45 : 0,
                      y: isMenuOpen ? -4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </div>

            {/* Optional: Add a subtle border when white background */}
            {isWhiteBackground && !isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"
              />
            )}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6">
              <motion.div
                className="flex flex-col items-center space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {mobileNavLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.3 + index * 0.1,
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `text-3xl font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-[#002452]"
                            : "text-gray-700 hover:text-[#002452]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <div className="relative">
                          {link.label}
                          {isActive && (
                            <motion.div
                              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#002452] rounded-full"
                              layoutId="activeIndicator"
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </div>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              {/* Optional: Add a decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-16 h-0.5 bg-gray-300 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
