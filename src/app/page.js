import HomeBrandSection from "./components/HomeBrandSection";
import HomeHeroSection from "./components/HomeHeroSection";
import HomeNewProducts from "./components/HomeNewProducts";
import HomeProductCategory from "./components/HomeProductCategory";
import HomeSaleTextSection from "./components/HomeSaleTextSection";
import HomeTestimonials from "./components/HomeTestimonials";
import HomeTrending from "./components/HomeTrending";


export default function Home() {
    return (
        <>
            <HomeHeroSection/>
            <HomeProductCategory />
            <HomeTrending />
            <HomeSaleTextSection />
            <HomeNewProducts/>
            <HomeTestimonials />
            <HomeBrandSection/>
        </>
    );
}
