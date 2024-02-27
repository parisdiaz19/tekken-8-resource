import Image from "next/image";
import React from "react";

import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import NavbarLayout from "./components/NavbarLayout";

export default function Home() {
  return (
    <div>
        <Navbar />
        <CharacterList />
    </div>

  );
}
