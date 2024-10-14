import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <Companies/>
  </div>
  );
}
    