import React from "react";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Projects from "@/components/Projects";
import Hwork from "@/components/Hwork";
import Cta from "@/components/Cta";
const page = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Projects/>
      <Hwork/>
      <Cta/>
    </div>
  );
};

export default page;