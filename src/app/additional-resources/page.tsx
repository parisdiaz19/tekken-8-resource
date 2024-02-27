import React from "react";
import { AdditionalResourceData } from "../data/AdditionalResourceData";
import Navbar from "../components/Navbar";

export default function AdditionalResources() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <header>
          <h1>Additional Resources</h1>
        </header>
        <p>
          Below are some additional resources that you can find that will help
          improve your technique in Tekken.
        </p>
        <div>
          {AdditionalResourceData.map((resource, key) => (
            <div key={key}>
              <header>
                <h2>{resource.title}</h2>
              </header>
              <p>{resource.description}</p>
              <iframe className="w-full h-[500px]" src={resource.video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
