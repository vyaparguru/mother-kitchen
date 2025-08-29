"use client";

export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo & Name */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
          {/* <span className="text-xl font-semibold text-gray-900">Starbelly</span> */}
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-gray-700 text-sm font-medium mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-900 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition">Terms and Conditions</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center md:text-right text-gray-700 hover:text-gray-900">
          © 2025 Mother's Kitchen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
