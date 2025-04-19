import HomeContactSection from "@/Components/Homepage/HomeContactSection"
import HomeFinalCTA from "@/Components/Homepage/HomeCTA"
import HomeHeroCarousel from "@/Components/Homepage/HomeHeroCarousel"
import HomeServicesSection from "@/Components/Homepage/HomeServices"
import HomeTestimonialsSection from "@/Components/Homepage/HomeTestimonials"
import HomeWhyChooseUs from "@/Components/Homepage/HomeWhyChooseUs"


const HomePage=()=>{
  return (
    <>
    
    <HomeHeroCarousel/>
    <HomeServicesSection/>
    <HomeWhyChooseUs/>
    <HomeTestimonialsSection/>
    <HomeContactSection/>
    <HomeFinalCTA/>
    </>
  )
}
export default HomePage