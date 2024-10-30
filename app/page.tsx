import Features from "./_components/Features"
import Hero from "./_components/Hero"
import Mockup from "./_components/Mockup"
import Navbar from "./_components/Navbar"
import Numbers from "./_components/Numbers";
import Work from "./_components/Work";


export default function Home() {
  return (
    <main className="h-full w-full m-0">
      <Hero />
      <hr  className="mx-4 max-w-6xl my-2 sm:mx-auto border-b-2 border-t-0 border-primary/40"/>
      <Mockup />
      <Numbers />
      <Features />
      <Work />
      <div>

      </div>
    </main>
  );
}
