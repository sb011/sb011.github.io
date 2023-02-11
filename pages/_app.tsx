import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SEO from "@bradgarropy/next-seo"
import { useState, useEffect } from 'react';
import Loading from '../components/loading';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log(isloading);
  }, [isloading])


  const exitanimate = {
    animate: {
      transition: {
        delay: 10,
        duration: 10,
        when: "afterChildren"
      }
    }
  }

  return <>
    <SEO
      title="Smit Bhoraniya"
      description="Freelancer, learner, and creative developer living in Gujarat."
      keywords={["smit", "smit's portfolio", "portfolio", "smit bhoraniya", "bhoraniya smit", "sb011", "portfolio websites", "top portfolio websites", "best portfolio websites", "best portfolio", "smit portfolio", "best portfolio design", "portfolio design", "portfolio design ideas",]}
      icon="/SB.ico"
      facebook={{
        image: "/profile_pic.webp",
        url: "https://www.facebook.com/smit.bhoraniya.90?mibextid=ZbWKwL",
        type: "website",
      }}
      twitter={{
        image: "/profile_pic.webp",
        site: "@Smitbhoraniya11",
        card: "summary",
      }}
    />
    <AnimatePresence>
      {
        isloading ? <Loading setIsLoading={setIsLoading} />
          : <Component {...pageProps} />
      }
    </AnimatePresence>
  </>
}
