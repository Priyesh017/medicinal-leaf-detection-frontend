import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DocumentationPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-blue-400">
            Medicinal Leaf Detection - Documentation
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Welcome to the documentation for the Medicinal Leaf Detection
            project, a deep learning-powered web application that uses MobileNet
            V3 for identifying medicinal plants from leaf images.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-green-400">
            Introduction
          </h2>
          <p className="text-gray-300 mb-6">
            This project leverages the power of MobileNet V3, a lightweight and
            efficient convolutional neural network model, to classify medicinal
            leaves. It can help users identify plants and understand their
            medicinal properties.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-green-400">
            How It Works
          </h2>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Upload an image of a leaf using the upload section.</li>
            <li>
              The image is sent to the backend where it is analyzed by the
              MobileNet V3 model.
            </li>
            <li>
              Results including leaf category, scientific name, and medicinal
              properties are displayed.
            </li>
            <li>
              If confidence is below 50%, a warning is shown to re-upload a
              clearer image.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold mb-4 text-green-400">
            How to Use
          </h2>
          <ol className="list-decimal list-inside text-gray-300 mb-6">
            <li>
              Click on the "Upload Image" button and select a clear image of a
              leaf.
            </li>
            <li>Wait for the image to be analyzed by the model.</li>
            <li>
              View the analysis results, including confidence and medicinal
              properties.
            </li>
            <li>If the confidence is low, try uploading a clearer image.</li>
            <li>
              If the confidence is above 50%, you can download a detailed
              report.
            </li>
          </ol>

          <h2 className="text-3xl font-semibold mb-4 text-green-400">
            Technical Details
          </h2>
          <p className="text-gray-300 mb-6">
            This project is built using React for the frontend, with a Python
            Flask backend hosting the MobileNet V3 model for image
            classification. Tailwind CSS is used for styling, providing a sleek
            and responsive design.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-green-400">FAQ</h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <p className="font-semibold">
                Q: What is the recommended image format?
              </p>
              <p>
                A: JPEG or JPG images with clear leaf details are recommended.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Q: Can it detect all medicinal leaves?
              </p>
              <p>
                A: It is trained on a specific set of medicinal leaves and may
                not recognize all species.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
