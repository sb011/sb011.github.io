import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SEO from "@bradgarropy/next-seo"

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <SEO 
      title="Smit&apos;s Portfolio"
      description="Freelancer, learner, and creative developer living in Gujarat."
      keywords={["smit", "smit's portfolio", "portfolio", "smit bhoraniya", "bhoraniya smit", "sb011"]}
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
    <Component {...pageProps} />
  </>
}
