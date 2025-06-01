// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Home from "./Home";
// import { Menu, Search, ShoppingCart, X } from "lucide-react";
// import logo from "../assets/logo.png";

// export default function Header({search, setSearch}) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);
//   return (
//     <>
//       <nav className="sticky top-0 w-full bg-white shadow-2xl z-50">
//         <div className="flex items-center justify-between py-4 sm:py-4 px-[3vw] sm:px-[2vw]">
//           {/* Logo */}
//           <h1 className="text-xl font-semibold">
//             <Link
//               to="/"
//               className="flex items-center gap-1 sm:gap-2"
//               onClick={closeMenu}
//             >
//               <img src={logo} height={200} width={200} alt="" />
//             </Link>
//           </h1>

//           {/* Search Bar */}
//           <div className="flex items-center gap-2 border border-gray-400 py-2 px-3 rounded-lg">
//             <Search className="text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by products, brand, categories..."
//               className="w-md outline-none"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           {/* Desktop Nav */}
//           <ul className="hidden sm:flex items-center gap-10">
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 ${
//                     isActive
//                       ? "text-white font-semibold bg-orange-500 py-2 px-3 rounded-md"
//                       : "text-gray-700 py-2 px-3"
//                   }`
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/cart"
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 ${
//                     isActive
//                       ? "text-white font-semibold bg-orange-500 py-2 px-3 rounded-md"
//                       : "text-gray-700 py-2 px-3"
//                   }`
//                 }
//               >
//                 <ShoppingCart />
//                 Cart
//               </NavLink>
//             </li>
//           </ul>

//           {/* Mobile Hamburger Icon */}
//           <button className="sm:hidden" onClick={toggleMenu}>
//             {menuOpen ? (
//               <X className="w-6 h-6 text-gray-700" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-700" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div
//             className="sm:hidden absolute px-[3vw] pb-4 bg-white w-full"
//             onClick={closeMenu}
//           >
//             <ul className="flex flex-col gap-4 border-t pt-4 px-[4vw] text-sm">
//               <li>
//                 <NavLink
//                   to="/"
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     `flex items-center gap-2 ${
//                       isActive ? "text-blue-600 font-semibold" : "text-gray-700"
//                     }`
//                   }
//                 >
//                   <Home />
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/books"
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     `flex items-center gap-2 ${
//                       isActive ? "text-blue-600 font-semibold" : "text-gray-700"
//                     }`
//                   }
//                 >
//                   <BookCopy />
//                   Browse Books
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/add"
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     `flex items-center gap-2 ${
//                       isActive ? "text-blue-600 font-semibold" : "text-gray-700"
//                     }`
//                   }
//                 >
//                   <Plus />
//                   Add Book
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         )}
//         <div onClick={closeMenu}></div>
//       </nav>
//     </>
//   );
// }

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search, ShoppingCart, X, BookCopy, Plus } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header({ search, setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 w-[40%] max-w-md">
          <Search className="text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search products, brands..."
            className="w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex items-center gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive
                    ? "text-white bg-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                } px-3 py-2 rounded-md font-medium transition`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center gap-1 ${
                  isActive
                    ? "text-white bg-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                } px-3 py-2 rounded-md font-medium transition`
              }
            >
              <ShoppingCart size={18} />
              Cart
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button className="sm:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Search Bar (Mobile) */}
      <div className="flex md:hidden px-4 pb-3">
        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 w-full">
          <Search className="text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 bg-white border-t">
          <ul className="flex flex-col gap-3 pt-3 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive ? "text-orange-500" : "text-gray-700"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive ? "text-orange-500" : "text-gray-700"
                  }`
                }
              >
                <BookCopy size={18} />
                Cart 
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
