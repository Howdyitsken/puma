'use client';

import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pumaProducts = [
  {
    name: "PUMA RS-X Efekt",
    description: "Retro-futuristic design with ultimate comfort.",
    image: "https://images.puma.com/image/upload/f_auto,q_auto/global/391174/01/sv01/fnd/US/fmt/png",
    link: "https://us.puma.com/us/en/pd/rs-x-efekt/391174.html?aff_id=your_affiliate_id"
  },
  {
    name: "PUMA Softride",
    description: "Performance running shoes with SoftFoam+ cushioning.",
    image: "https://images.puma.com/image/upload/f_auto,q_auto/global/377048/11/sv01/fnd/US/fmt/png",
    link: "https://us.puma.com/us/en/pd/softride/377048.html?aff_id=your_affiliate_id"
  },
  {
    name: "PUMA Cali Dream",
    description: "Chunky sole and clean lines for everyday wear.",
    image: "https://images.puma.com/image/upload/f_auto,q_auto/global/392731/02/sv01/fnd/US/fmt/png",
    link: "https://us.puma.com/us/en/pd/cali-dream/392731.html?aff_id=your_affiliate_id"
  },
  {
    name: "PUMA Future Rider",
    description: "Bold color-blocking and lightweight feel.",
    image: "https://images.puma.com/image/upload/f_auto,q_auto/global/382043/16/sv01/fnd/US/fmt/png",
    link: "https://us.puma.com/us/en/pd/future-rider/382043.html?aff_id=your_affiliate_id"
  }
];

const blogPosts = [
  {
    title: "Why We Love PUMA Sneakers",
    excerpt: "From cutting-edge design to ultimate comfort, here’s why PUMA is one of our go-to brands.",
    link: "#"
  },
  {
    title: "Top Picks for Summer 2025",
    excerpt: "Check out the hottest PUMA releases to keep your style fresh and functional this season.",
    link: "#"
  },
  {
    title: "How to Style PUMA Sneakers with Everyday Outfits",
    excerpt: "Get inspired with our favorite ways to pair PUMA shoes with casual wear.",
    link: "#"
  },
  {
    title: "Running Tech Breakdown: What Makes PUMA Nitro Shoes Great?",
    excerpt: "A closer look at the technology powering PUMA's top-tier running sneakers.",
    link: "#"
  }
];

export default function PumaAffiliateSite() {
  useEffect(() => {
    document.title = "Top PUMA Sneakers – Running, Basketball & Casual Picks";
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Discover the best PUMA sneakers in running, basketball, and casual styles. Shop top-rated picks with our affiliate links and stay stylish and comfortable.";
    document.head.appendChild(metaDescription);

    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <nav className="bg-gray-800 shadow mb-8 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white">PUMA Picks</div>
          <div className="space-x-4 text-sm text-white">
            <a href="#featured" className="hover:underline">Featured</a>
            <a href="#blog" className="hover:underline">Blog</a>
          </div>
        </div>
      </nav>

      <img src="https://images.puma.com/image/upload/f_auto,q_auto/global/390595/01/sv01/fnd/US/fmt/png" alt="PUMA Banner" className="w-full h-64 object-cover mb-8" />

      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Top PUMA Sneakers for Every Style</h1>
        <p className="mb-8 text-lg">Browse our curated selection of PUMA sneakers including performance running shoes, basketball-ready kicks, and stylish casual sneakers. All links are affiliate-based and support our site.</p>

        <section id="featured" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Sneakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pumaProducts.map((product, index) => (
              <div key={index} className="overflow-hidden border rounded-lg p-4">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="mb-4">{product.description}</p>
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Shop Now
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="blog">
          <h2 className="text-3xl font-bold mb-4">From the Blog</h2>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="mb-2">{post.excerpt}</p>
                <a href={post.link} className="text-blue-600 underline">Read More</a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
