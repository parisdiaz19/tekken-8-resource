import Navbar from "./Navbar";
import Footer from "./Footer";

interface NavbarLayoutProps {
  children?: React.ReactNode;
}

const NavbarLayout: React.FC = ({ children }: NavbarLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default NavbarLayout;
