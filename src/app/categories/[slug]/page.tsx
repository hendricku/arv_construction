import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/BackButton";
import categories from "../../data/categories";
import { Metadata } from "next";

// SVG Icons for a more custom feel. We define them here to keep it in one file.
const IconCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconQuote = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M14.017 21v-7.391c0-2.725-1.195-4.345-3.525-4.345-2.321 0-3.479 1.62-3.479 4.345v7.391h-5v-7.391c0-4.832 2.389-8.609 7.979-8.609 5.621 0 7.021 3.777 7.021 8.609v7.391h-5z" />
    </svg>
);

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-slate-50">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto py-16 px-4">
        {/* --- Back Button --- */}
        <div className="mb-8">
          <BackButton />
        </div>

        {/* --- Integrated Header & Gallery --- */}
        <section className="mb-16">
          <div className="text-left mb-8">
              <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">Case Study</span>
              <h1 className="text-4xl md:text-6xl font-extrabold mt-2 text-gray-900 tracking-tight">{category.title}</h1>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[70vh] max-h-[600px]">
              <div className="col-span-3 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
                  <Image src={category.images[0]} alt={category.title + ' main image'} fill className="object-cover transition-transform duration-300 group-hover:scale-105" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                      <h2 className="text-xl font-bold">{category.title}</h2>
                      <p className="text-sm opacity-90">{category.address}</p>
                  </div>
              </div>
              <div className="hidden md:block relative rounded-2xl overflow-hidden group">
                   <Image src={category.images[1]} alt={category.title + ' image 2'} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
               <div className="hidden md:block relative rounded-2xl overflow-hidden group">
                   <Image src={category.images[2]} alt={category.title + ' image 3'} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
          </div>
        </section>
        
        {/* --- Main Content Grid --- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
          {/* Main Column: About & Features */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              <article>
                <h2 className="text-3xl text-gray-900 font-bold mb-4 tracking-tight">Project Overview</h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>{category.longDesc}</p>
                </div>
              </article>

              {category.features && category.features.length > 0 && (
                <article>
                  <h2 className="text-3xl text-gray-900 font-bold mb-6 tracking-tight">Key Features & Inclusions</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <IconCheck className="w-7 h-7 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-800 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}
            </div>
          </div>
          
          {/* Sidebar Column: Details & Testimonial */}
          <aside className="lg:sticky lg:top-24 h-fit space-y-8">
            {category.details && category.details.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-xl text-gray-900 font-bold mb-5 border-b pb-3">Project At a Glance</h3>
                <ul className="space-y-4">
                  {category.details.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-md">
                      <span className="text-gray-500">{item.title}</span>
                      <span className="font-bold text-gray-800 text-right">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {category.testimonial && (
              <div className="relative bg-gray-800 rounded-2xl p-8 text-white overflow-hidden">
                <IconQuote className="absolute -top-2 -left-2 w-20 h-20 text-white/10" />
                <div className="relative z-10">
                    <p className="text-lg italic text-gray-300 mb-6">
                      &ldquo;{category.testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <Image src={category.testimonial.avatar} alt={category.testimonial.author} width={48} height={48} className="rounded-full" />
                      <div>
                        <div className="font-bold">{category.testimonial.author}</div>
                        <div className="text-sm text-gray-400">Valued Client</div>
                      </div>
                    </div>
                </div>
              </div>
            )}
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}