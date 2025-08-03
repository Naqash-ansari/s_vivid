import Marquee from './marquee/page'
import ProductList from './(home)/product/SignProduct/ProductList';
import CompanyLogoCarousel from './CompanyLogoCarousel/page'
import PrintProduct from './(home)/product/Banner/PrintProduct';
import GoogleReview from './reviews/GoogleReview';
import VideoPlayer from './(home)/VideoPlayer/page';
import Welcome from './welcome/Welcome';



export default function Home() {
  return (
    <>
      <Marquee />
      <VideoPlayer />
      <ProductList />
      <CompanyLogoCarousel />
      <PrintProduct />
      <GoogleReview />
      <Welcome />
    </>
  );
}
