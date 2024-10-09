import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import BestDeals from "./components/BestDeals.jsx"
import Others from "./components/Others.jsx"
import Testimonials from "./components/Testimonials.jsx"
import Blogs from "./components/Blogs.jsx"
import Newsletter from "./components/Newsletter.jsx"
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <BestDeals />
      <Others />
      <Testimonials />
      <Blogs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
