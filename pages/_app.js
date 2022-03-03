import '../styles/globals.css'
import {Navbar} from "../components/elements/Navbar";
import Footer from "../components/elements/Footer";
import {AnimatePresence, motion} from "framer-motion";
import {MainVariants} from "../FramerVariants/common";


function Website({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeAfter router={router}>
      <Navbar />
      <motion.div
        variants={MainVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Component {...pageProps} key={router.route}/>
      </motion.div>
      <Footer />
    </AnimatePresence>
  )
}

export default Website
