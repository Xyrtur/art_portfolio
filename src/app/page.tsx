/** @format */

import Footer from "@/components/footer";
import Head from "next/head";

export default function LandingPage() {
  return (
    <>
    <Head>
    <title>Ysabelle Kmiec</title>
    <meta name="description">
      Explore scratchboard and the artist
    </meta>
  </Head>
    <div className="grid">
      <main className="flex px-8 mt-15">
        

          <p>
            Get started by editing.
          </p>
          <p>Save and see your instantly.</p>


        
      </main>
      <Footer/>
    </div>
    
    </>
  );
}
