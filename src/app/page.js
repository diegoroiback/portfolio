'use client'

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Main from "@/components/Main/Main";
import Info from "@/components/Info/Info";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <>
      <Main />
      <Info />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
