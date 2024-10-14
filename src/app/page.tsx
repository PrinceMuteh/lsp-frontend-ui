'use client'
import Navbar from "@/components/(landingPage)/Navbar";
import Hero from "@/components/(landingPage)/Hero";
import * as React from "react"

import 'swiper/css';
import Footer from "@/components/(landingPage)/Footer";
import Faq from "@/components/(landingPage)/Faq";
import Partners from "@/components/(landingPage)/Partners";
import Feature from "@/components/(landingPage)/Feature";
import Legal from "@/components/(landingPage)/Legal";
import OurUser from "@/components/(landingPage)/ourUser";

export default function Home() {

  return (
    <div className="bg-primaryBg">
      <header className="h-auto p-5 sm:p-10">
        <Navbar />
        <Hero />
      </header>
      <div className="bg-white pt-20 pb-10 space-y-60 lg:px-20 ">
        <Feature  />
        <Partners />
        <Legal />
        <p className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-10">
          What Our Users Say
        </p>
      </div>
      <div className="bg-slate-50  py-32 space-y-40 lg:px-20 md:px-10 ">
        <OurUser />
      </div>

      <div className="bg-white  py-20 space-y-40 lg:px-20 md:px-10 sm:px-5 ">

        <section className="p-4 sm:p-16 items-center  flex flex-col justify-center">
          <div className="w-full lg:w-3/5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-10">
              Frequently Asked Question</h1>
            <Faq header="How does the AI transcription work?" description={"Our software uses an advanced AI model to convert audio recordings into text with up to 95% accuracy, detecting multiple speakers for precise transcription."} />
            <Faq header="Can the software distinguish between different speakers?" description="Yes, our AI model can identify and differentiate multiple speakers, ensuring accurate attribution of dialogue in the transcripts." />
            <Faq header="How accurate is the transcription?" description="Our software boasts an impressive transcription accuracy rate of 95%, making it reliable for legal documentation and proceedings." />
            <Faq header="Can I manage case files within the software?" description="Yes, the software includes features for managing case files, allowing you to organize and retrieve important documents efficiently." />
            <Faq header="How can I access the transcripts once they are generated?" description="Transcripts can be easily accessed and downloaded in multiple formats, including MP4 for video, MP3 for audio, and PDF for text, for your convenience." />
          </div>
        </section>

        <div className="flex flex-col justify-center text-center items-center gap-6 p-2 sm:p-6 rounded-lg">
          <div className="sm:w-2/3 gap-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-10">
              Transform Your Courtroom Workflow with Our Legal Speech Processor
            </h1>
            <p className="text-t-14 mt-5">Experience the future of legal documentation. Schedule a demo to explore how our transcription software enhances courtroom productivity</p>
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
