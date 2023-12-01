import About from "@/components/HomePage/About/About";
import Banner from "@/components/HomePage/Banner/Banner";
import GetInTouch from "@/components/HomePage/GetInTouch/GetInTouch";
import Projects from "@/components/HomePage/Projects/Projects";

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://personal-portfolio-server-kappa.vercel.app/projects"
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

export default function Home({ data }) {
  return (
    <main>
      <Banner />
      <About />
      <Projects />
      <GetInTouch />
    </main>
  );
}
