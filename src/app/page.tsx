'use client'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import * as React from "react"

import 'swiper/css';
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Partners from "@/components/Partners";
import Feature from "@/components/Feature";
import Legal from "@/components/Legal";
import OurUser from "@/components/ourUser";

export default function Home() {

  return (
    <div className="bg-primaryBg">
      <header className="h-auto lg:p-10 sm:p-2">
        <Navbar />
        <Hero />
      </header>

      <div className="bg-white  py-20 space-y-40 lg:px-20 md:px-10 sm:px-5  sm:mx-5 lg:mx-40">
        <Feature />
        <Partners />
        <Legal />
        <p className="item-center text-center text-xl sm:text-5xl font-semibold">What Our Users Say</p>
      </div>
      <div className="bg-slate-50  py-32 space-y-40 lg:px-20 md:px-10 sm:px-5  sm:mx-5 lg:mx-40">
        <OurUser />
      </div>

      {/* <div id="faq" className="bg-white  py-20 space-y-40 lg:px-20 w-full md:px-10 sm:px-5  sm:mx-5 lg:mx-40"> */}
      <div className="bg-white  py-20 space-y-40 lg:px-20 md:px-10 sm:px-5  sm:mx-5 lg:mx-40">

        <section className="p-16 items-center  flex flex-col justify-center">
          <div className="w-full lg:w-3/5">
            <h1 className='font-semibold text-center mb-10 text-lg md:text-[40px] leading-relaxed'>Frequently Asked Question</h1>
            <Faq header="How does the AI transcription work?" description={"Our software uses an advanced AI model to convert audio recordings into text with up to 95% accuracy, detecting multiple speakers for precise transcription."} />
            <Faq header="Can the software distinguish between different speakers?" description="Yes, our AI model can identify and differentiate multiple speakers, ensuring accurate attribution of dialogue in the transcripts." />
            <Faq header="How accurate is the transcription?" description="Our software boasts an impressive transcription accuracy rate of 95%, making it reliable for legal documentation and proceedings." />
            <Faq header="Can I manage case files within the software?" description="Yes, the software includes features for managing case files, allowing you to organize and retrieve important documents efficiently." />
            <Faq header="How can I access the transcripts once they are generated?" description="Transcripts can be easily accessed and downloaded in multiple formats, including MP4 for video, MP3 for audio, and PDF for text, for your convenience." />
          </div>
        </section>

        <div className="flex flex-col justify-center text-center items-center gap-6  p-6 rounded-lg">
          <div className="w-2/3 gap-3">
            <h2 className='font-semibold text-lg md:text-[40px] leading-relaxed'>Transform Your Courtroom Workflow with Our Legal Speech Processor</h2>
            <p className="text-t-14 mt-5">Experience the future of legal documentation. Schedule a demo to explore how <br /> our transcription software enhances courtroom productivity</p>
            <div className="flex flex-col justify-center items-center text-center space-y-10 mt-10">
              <div className="customGreen w-36 rounded-lg p-4  bg-customGreen text-white text-md font-semibold">
                Book a Demo
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>


  );
}
