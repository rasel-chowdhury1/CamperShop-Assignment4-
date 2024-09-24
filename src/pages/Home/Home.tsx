
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <Testimonial/>
        <YearProduct />
        {/* <SpecialOffers /> */}
      </div>
    </div>
  );
};

export default Home;
