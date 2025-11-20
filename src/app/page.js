import Hero from "@/components/Hero";
import Drink from "@/components/Drink";
import Product from "@/components/Product";
import Content from "@/components/Content";
import Content2 from "@/components/Content2";
import ImageContent from "@/components/ImageContent";
import Social from "@/components/Social";
import Banner from "@/components/Banner";
import OurStory from "@/components/OurStory";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <OurStory />
      <Drink />
      <Product />
      <Content />
     
      <ImageContent />
       <Content2 />
      <Social />
    </main>
  );
}
