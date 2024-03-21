import { Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="navbar w-[94%] max-w-3xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown absolute right-0">
            <div
              tabIndex={0}
              role="button"
              className="text-2xl btn btn-ghost lg:hidden"
            >
              <HiDotsVertical />
            </div>
            <ul
              tabIndex={0}
              className="space-y-4 absolute right-4 menu menu-sm dropdown-content z-[1] py-4 px-6 shadow bg-white text-black rounded-lg w-44"
            >
              <Link>Add bot</Link>
              <Link>Reload page</Link>
            </ul>
          </div>
          <Link to="/" className="text-2xl font-medium">Yescoin</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex  gap-6">
            <li>
              <Link>Add bot</Link>
            </li>
            <li>
              <button onClick={() => window.location.reload()}>
                Reload page
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
