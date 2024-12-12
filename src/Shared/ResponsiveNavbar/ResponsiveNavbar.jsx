import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import logo from "../../assets/WebsiteLogo/Logo-design-illustration-on-transparent-background-PNG.png";
const ResponsiveNavbar = () => {
  const { user, logout, loading } = useAuth();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Logout successfully!",
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-dots loading-lg text-[#1563DF]"></span>
      </div>
    );
  }

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addJobs">Add Job</NavLink>
      </li>
      <li>
        <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/myBids">My Bids</NavLink>
      </li>
      <li>
        <NavLink to="/bidRequest">Bid Request</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <p className="text-xl cursor-pointer flex items-center gap-x-2">
              <img src={logo} className="w-10" alt="" /> Easy Hire
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-x-3">
          {user ? (
            <div className="avatar">
              <div
                className="ring-primary ring-offset-base-100 w-10
           rounded-full ring ring-offset-2"
              >
                {user?.photoURL ? (
                  <>
                    <img src={user ? user?.photoURL : ""} />
                  </>
                ) : (
                  <p>{user?.displayName}</p>
                )}
              </div>
            </div>
          ) : null}
          {user ? (
            <button
              onClick={handleLogout}
              className="btn rounded-md btn-primary"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/signUp">
                <button className="btn btn-outline rounded-md">Sign Up</button>
              </Link>
              <Link to="/signIn">
                <button className="btn btn-success rounded-md">Sign in</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ResponsiveNavbar;
