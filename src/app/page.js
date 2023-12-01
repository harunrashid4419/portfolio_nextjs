import About from "@/components/HomePage/About/About";
import Banner from "@/components/HomePage/Banner/Banner";
import GetInTouch from "@/components/HomePage/GetInTouch/GetInTouch";
import Projects from "@/components/HomePage/Projects/Projects";
import Service from "@/components/HomePage/Service/Service";

export default function Home({ data }) {
  return (
    <main>
      <Banner />
      <About />
      <Service />
      <Projects />
      <GetInTouch />
    </main>
  );
}
