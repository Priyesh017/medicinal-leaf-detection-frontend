import React from "react";
import { Leaf, AlertCircle, Upload } from "lucide-react"; // Assuming you're using react-feather icons

const Features = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
        <div className="bg-blue-900 bg-opacity-20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
          <Leaf className="h-6 w-6 text-blue-400" />
          <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-green-300 bg-clip-text text-transparent">
          Accurate Identification
        </h3>
        <p className="text-gray-400">
          Our ML model is trained on thousands of leaf samples for precise
          identification.
        </p>
      </div>

      <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
        <div className="bg-green-900 bg-opacity-20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
          <AlertCircle className="h-6 w-6 text-green-400" />
          <div className="absolute inset-0 bg-green-500 rounded-full filter blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent">
          Medicinal Properties
        </h3>
        <p className="text-gray-400">
          Learn about the medicinal applications of identified plants.
        </p>
      </div>

      <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
        <div className="bg-purple-900 bg-opacity-20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
          <Upload className="h-6 w-6 text-purple-400" />
          <div className="absolute inset-0 bg-purple-500 rounded-full filter blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
          Easy to Use
        </h3>
        <p className="text-gray-400">
          Simple interface for quick leaf identification without complexity.
        </p>
      </div>
    </div>
  );
};

export default Features;
