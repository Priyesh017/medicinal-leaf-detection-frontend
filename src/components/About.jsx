import React from "react";
import { Leaf, Heart, Upload } from "lucide-react"; // Correct import for Lucid icons
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-900 text-white min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-400 text-center">
            About the Medicinal Leaf Detection Project
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Accurate Identification */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
              <div className="bg-blue-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                <Leaf className="text-blue-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Accurate Identification
              </h3>
              <p className="text-gray-300">
                Our ML model uses thousands of leaf samples to provide precise
                identification of medicinal plants.
              </p>
            </div>

            {/* Card 2: Medicinal Properties */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
              <div className="bg-green-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                <Heart className="text-green-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Medicinal Properties
              </h3>
              <p className="text-gray-300">
                Discover the medicinal applications of the plants identified by
                our system.
              </p>
            </div>

            {/* Card 3: Easy to Use */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
              <div className="bg-purple-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                <Upload className="text-purple-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                Easy to Use
              </h3>
              <p className="text-gray-300">
                Simple interface for quick leaf identification, designed for
                everyone to use effortlessly.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-green-400">
              How It Works
            </h2>

            {/* Steps for How it Works */}
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  Step 1: Upload Your Leaf Image
                </h3>
                <p className="text-gray-300">
                  Simply upload a clear image of the leaf you want to identify.
                  Make sure the leaf is well-lit and clearly visible.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  Step 2: Image Analysis by MobileNet V3
                </h3>
                <p className="text-gray-300">
                  Once the image is uploaded, our MobileNet V3 model starts
                  analyzing the leaf to identify its species and medicinal
                  properties.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  Step 3: Results and Medicinal Information
                </h3>
                <p className="text-gray-300">
                  The results will show the plant's species, its medicinal uses,
                  and other helpful information about the leaf.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  Step 4: Low Confidence Warning (If Applicable)
                </h3>
                <p className="text-gray-300">
                  If the model's confidence in the result is low (below 50%),
                  you'll be prompted to upload a clearer image.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  Step 5: Download Detailed Report
                </h3>
                <p className="text-gray-300">
                  If the confidence is above 50%, you can download a detailed
                  report of the plant's properties and other important details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
