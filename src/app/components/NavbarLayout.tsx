import Navbar from "./Navbar";

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
    </div>
  );
};

export default NavbarLayout;
