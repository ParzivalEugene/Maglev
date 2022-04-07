import '../styles/globals.css'
import {Navbar} from "../components/elements/Navbar";
import Footer from "../components/elements/Footer";
import {AnimatePresence, motion} from "framer-motion";
import {MainVariants} from "../constants/framerVariants/common";
import ru from "../constants/lang/ru";
import en from "../constants/lang/en";


function Website({ Component, pageProps, router }) {
  const { locale } = router
  const translate = locale === "ru" ? ru : en;

  return (
    <AnimatePresence exitBeforeAfter router={router}>
      <Navbar router={router} translate={translate} locale={locale}/>
      <motion.div
        variants={MainVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Component {...pageProps} key={router.route} router={router} translate={translate}/>
      </motion.div>
      <Footer router={router} translate={translate} locale={locale}/>
    </AnimatePresence>
  )
}

export default Website
