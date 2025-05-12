import React from "react";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 bg-opacity-80 backdrop-blur-sm text-gray-400 py-8 border-t border-gray-900 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-block mb-4">
            <Leaf className="h-6 w-6 text-green-500 inline-block" />
          </div>
          <p>&copy; {new Date().getFullYear()} LeafMD. All rights reserved.</p>
          <p className="mt-2 text-sm">
            A machine learning project for medical plant identification.
          </p>
        </div>
      </div>
    </footer>
  );
}
