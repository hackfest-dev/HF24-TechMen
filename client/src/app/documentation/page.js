"use client";
import Navbar from "@/components/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/Footer";
import Autoplay from "embla-carousel-autoplay";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="md:w-[600px] m-auto mt-20 mb-16 sm:w-[400px] max-sm:w-[300px]">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
              pauseOnHover: true,
            }),
          ]}
        >
          <CarouselContent className="md:text-xl">
            <CarouselItem className="p-10 m-auto">
              <p className="text-3xl mb-3 font-bold">
                Neonatal Sleep Monitoring using Optical Flow (RAFT)
              </p>
              <p className="doc-heading">
                Introduction
              </p>
              <p>
                This project aims to develop a system for monitoring sleep in
                neonates using optical flow techniques, particularly the RAFT
                (Optical Flow with Occlusions) algorithm. Neonatal sleep
                monitoring is crucial for assessing the health and well-being of
                infants in neonatal intensive care units (NICUs) and can provide
                valuable insights into their development and potential issues.
              </p>
            </CarouselItem>
            <CarouselItem className="p-10 m-auto">
              <p className="doc-heading">
                Features
              </p>
              <ul className="list-disc">
                <li>Non-invasive monitoring of neonatal sleep patterns</li>
                <li>
                  High temporal resolution for detailed analysis of movement
                  patterns and sleep stages
                </li>
                <li>
                  Accuracy in motion estimation, even in challenging scenarios
                  such as occlusions
                </li>
                <li>Real-time monitoring capabilities</li>
                <li>
                  Objective assessment of sleep stages through quantified
                  movement patterns
                </li>
                <li>
                  Early identification of conditions like sleep apnea through
                  abnormal sleep patterns
                </li>
                <li>
                  Support for longitudinal studies by enabling continuous and
                  automated monitoring over extended periods
                </li>
              </ul>
            </CarouselItem>
            <CarouselItem className="p-10 m-auto">
              <p className="doc-heading">
                Requirements
              </p>
              <ul className="list-disc mb-5">
                <li>Python 3.x</li>
                <li>OpenCV</li>
                <li>NumPy</li>
                <li>RAFT (Optical Flow with Occlusions) library</li>
                <li>Webcam or camera for capturing neonatal sleep footage</li>
              </ul>
              <p className="doc-heading">
                Installation
              </p>
              <ul className="list-disc">
                <li>Clone the repository:</li>
                <li>Install dependencies:</li>
                <li>Download and install the RAFT library from here.</li>
              </ul>
            </CarouselItem>
            <CarouselItem className="p-10 m-auto">
              <p className="doc-heading">
                Usage
              </p>
              <ol className="mb-5">
                <li>Connect a webcam or camera to your system.</li>
                <li>Run the main script</li>
                <li>
                  Follow the on-screen instructions to start the neonatal sleep
                  monitoring process.
                </li>
              </ol>
              <p className="doc-heading">
                Contributing
              </p>
              <p>
                Contributions are welcome! If you would like to contribute to
                this project, please fork the repository and submit a pull
                request with your changes.
              </p>
            </CarouselItem>
            <CarouselItem className="p-10 m-auto">
              <p className="doc-heading">
                License
              </p>
              <p className="mb-5">
                This project is licensed under the MIT License - see the LICENSE
                file for details.
              </p>

              <p className="doc-heading">
                Acknowledgments
              </p>
              <ul className="list-disc">
                <li>
                  This project was inspired by the need for non-invasive methods
                  of monitoring neonatal sleep in NICU settings.
                </li>
                <li>
                  Special thanks to the creators and contributors of the RAFT
                  algorithm for providing a robust optical flow solution.
                </li>
              </ul>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
