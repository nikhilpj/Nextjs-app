import Download from "./components/Download";
import Navbar from "./components/navbar";
import Button from "./components/Button";
import styles from '@/app/page.module.css'
import MainImage from "./components/MainImage";
import Card from "./components/Card";
import Subscription from "./components/Subscription";
import Advertisement from "./components/Advertisement";
import Rent from "./components/Rent";
import Location from "./components/Location";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import QuickBook from "./components/QuickBook";
import NavDesktop from "./components/NavDesktop";


export default function Home() {
  return (
    <div>
    <Navbar/>
    <NavDesktop className={styles.navDesktop}/>
   <Download/>
   <div className={styles.ButtonContainer}>
   <Button height={38} width={160} name='book a car' backgroundColor='#E21E26' color='white' border='none'/>
   <Button height={38} width={160} name='quick book' backgroundColor='white' color='black' border='1px solid red'/>
   </div>
   {/* <QuickBook/> */}
   <MainImage/>
   <Card/>
   <Subscription/>
   <Advertisement/>
   <Rent/>
   <Location/>
   <Faq/>
   <Footer/>
    </div>
  );
}
