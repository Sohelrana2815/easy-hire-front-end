import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

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
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              {user ? (
                ""
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/signIn">
                    Sign in
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/signUp">
                    Sign up
                  </Nav.Link>
                </>
              )}
            </Nav>
            {user ? (
              <>
                <div className="lg:flex items-center gap-x-4">
                  <div>
                    <button onClick={handleLogout} className="btn btn-primary">
                      Logout
                    </button>
                  </div>
                  <div className="avatar py-3 lg:py-0">
                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ResponsiveNavbar;
