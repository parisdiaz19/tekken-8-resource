import React from "react";
import { FC } from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { CharacterData } from "../data/CharacterData";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

// Define the type for your character data
interface CharacterProps {
  name: string;
  description?: string;
  picture: string;
}

const CharacterPage = () => {
  const router = useRouter();
  return (
    <div className="text-white">
      <Navbar />
      <h1>name: {router.query.slug}</h1>
      <p>test</p>
    </div>
  );
};

export default CharacterPage;
