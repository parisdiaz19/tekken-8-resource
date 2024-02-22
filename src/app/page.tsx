import Image from "next/image";

import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import NavbarLayout from "./components/NavbarLayout";

export default function Home() {
  return (
    <NavbarLayout>
        <CharacterList />
    </NavbarLayout>
  );
}
