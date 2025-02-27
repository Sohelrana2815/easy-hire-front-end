import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import logo from "../../assets/WebsiteLogo/website logo.png";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import AnimatedComponent from "../../Components/SocialLogin/AnimatedComponent/AnimatedComponent";
import { FaPen } from "react-icons/fa6";
const ResponsiveNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
        <span className="loading loading-bars loading-lg text-[#31795A]"></span>
      </div>
    );
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#31795A] bg-none md:text-lg font-EbGaramond font-medium"
              : "text-base"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJobs"
          className={({ isActive }) =>
            isActive
              ? "text-[#31795A] bg-none md:text-lg font-EbGaramond font-medium"
              : "text-base"
          }
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myPostedJobs"
          className={({ isActive }) =>
            isActive
              ? "text-[#31795A] bg-none md:text-lg font-EbGaramond font-medium"
              : "text-base"
          }
        >
          My Posted Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myBidJobs"
          className={({ isActive }) =>
            isActive
              ? "text-[#31795A] bg-none md:text-lg font-EbGaramond font-medium"
              : "text-base"
          }
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bidRequest"
          className={({ isActive }) =>
            isActive
              ? "text-[#31795A] bg-none md:text-lg font-EbGaramond font-medium"
              : "text-base"
          }
        >
          Bid Requests
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <AnimatedComponent animation="fade-down">
        <div className="navbar bg-base-100  mt-10 mb-5 p-4 shadow-md rounded-lg">
          {" "}
          <div className="navbar-start">
            {" "}
            <div className="dropdown">
              {" "}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-sm mr-3 bg-[#31795A] text-white lg:hidden hover:bg-[#265a43] transition duration-300"
                onClick={toggleDropdown}
              >
                {" "}
                <BiMenu className="text-xl md:text-2xl" />{" "}
              </div>{" "}
              <ul
                className={`dropdown-content menu bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-gray-200 transition transform origin-top-left duration-300 ${
                  dropdownOpen ? "scale-100" : "scale-0"
                }`}
              >
                {" "}
                {navLinks}{" "}
              </ul>{" "}
            </div>{" "}
            <Link to="/">
              {" "}
              <p className="text-xl xl:text-3xl xl:font-medium xl:font-EbGaramond cursor-pointer flex items-center md:gap-x-2">
                {" "}
                <img
                  src={logo}
                  className="w-8 md:w-10 mr-2"
                  alt="Easy Hire Logo"
                />{" "}
                Easy Hire{" "}
              </p>{" "}
            </Link>{" "}
          </div>{" "}
          <div className="navbar-end hidden lg:flex">
            {" "}
            <ul className="menu menu-horizontal px-1 space-x-4">
              {" "}
              {navLinks}{" "}
            </ul>{" "}
          </div>{" "}
          <div className="navbar-end gap-x-3">
            {" "}
            {user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 ring-primary ring-offset-base-100 rounded-full ring ring-offset-2">
                    <img
                      alt="Tailwind CSS Navbar component"
                      title={user?.displayName}
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <Link to={"/editProfile"}>
                    <li>
                      <a className="justify-between">
                        Edit Profile <FaPen />
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn text-sm md:text-base font-serif bg-[#31795A] btn-sm md:btn-md rounded-md hover:bg-[#265a43] transition duration-300 text-white"
              >
                {" "}
                Logout{" "}
              </button>
            ) : (
              <>
                {" "}
                <Link to="/signUp">
                  <button className="px-6 py-2 border-2 border-green-600 text-green-600 font-semibold rounded-md transition duration-200 hover:bg-green-600 font-EbGaramond hover:text-white">
                    Sign Up
                  </button>
                </Link>
                <Link to="/signIn">
                  <button className="px-6 py-2 font-EbGaramond bg-green-600 text-white font-semibold rounded-md transition duration-200 hover:bg-green-700">
                    Sign In
                  </button>
                </Link>
              </>
            )}{" "}
          </div>{" "}
        </div>
      </AnimatedComponent>
    </>
  );
};

export default ResponsiveNavbar;
