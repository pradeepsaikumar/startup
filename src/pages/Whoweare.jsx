import React from "react";

export default function WhoWeAre() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-red-700 text-white py-20 text-center bg-cover bg-center" style={{ backgroundImage: 'url("/background-image.jpg")' }}>
        <h1 className="text-5xl font-bold">Who We Are</h1>
        <p className="mt-4">Home / Who We Are</p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          We believe that true pioneers and innovators thrive in uncharted territory.
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our impact extends far beyond our business and that of our clients.
          Together, we aim to empower individuals and communities, helping them achieve more and lead better lives through innovation and dedication.
        </p>
      </section>
    </div>
  );
}
