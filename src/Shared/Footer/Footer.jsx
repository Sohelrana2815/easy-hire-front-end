import logo from "../../assets/WebsiteLogo/Logo-design-illustration-on-transparent-background-PNG.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 text-gray-800 p-10 border-t border-gray-200">
        <div className="footer max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <aside className="flex flex-col items-center md:items-start">
            <img src={logo} className="w-24 mb-4" alt="ACME Industries Logo" />
            <p className="text-center md:text-left">
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title text-lg font-bold mb-4">Services</h6>
            <a className="link link-hover text-base text-gray-600 hover:text-gray-800 transition">
              Branding
            </a>
            <a className="link link-hover text-base text-gray-600 hover:text-gray-800 transition">
              Design
            </a>
            <a className="link link-hover text-base text-gray-600 hover:text-gray-800 transition">
              Marketing
            </a>
            <a className="link link-hover text-base text-gray-600 hover:text-gray-800 transition">
              Advertisement
            </a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg font-bold mb-4">Company</h6>
            <a className="link link-hover text-base text-gray-600 hover:text-gray-800 transition">
              About us
            </a>
            <a className="link link-hover text-base text-gray-600 hover:text-gray-800 transition">
              Contact
            </a>
            <a className="link link-hover text-base text-gray-600 hover:text-gray-800 transition">
              Jobs
            </a>
            <a className="link link-hover text-base text-gray-600 hover:text-gray-800 transition">
              Press kit
            </a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg font-bold mb-4">Legal</h6>
            <a className="link link-hover text-base text-gray-600 hover:text-gray-800 transition">
              Terms of use
            </a>
            <a className="link link-hover text-base text-gray-600 hover:text-gray-800 transition">
              Privacy policy
            </a>
            <a className="link link-hover text-base text-gray-600 hover:text-gray-800 transition">
              Cookie policy
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
