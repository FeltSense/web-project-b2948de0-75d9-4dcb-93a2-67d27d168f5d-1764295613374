'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Chief People Officer',
    company: 'TechFlow Systems',
    companyLogo: 'TF',
    quote: 'CultureIQ Analytics transformed how we understand our workforce. We reduced turnover by 34% in just 6 months by identifying engagement gaps before they became problems.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Marcus Thompson',
    role: 'VP of Human Resources',
    company: 'Nexus Financial',
    companyLogo: 'NF',
    quote: 'The predictive analytics are game-changing. We now forecast retention risks with 92% accuracy and have saved over $2M in recruiting costs this year alone.',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Director of Talent Strategy',
    company: 'CloudScale Inc',
    companyLogo: 'CS',
    quote: 'Finally, HR data that speaks the language of the C-suite. Our board now sees culture metrics alongside revenue—and it\'s driving real investment in our people.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Trusted by Industry Leaders
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900">
            HR Teams Love CultureIQ
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            Join 500+ enterprise organizations using data-driven insights to build thriving workplace cultures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Company Logo */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.companyLogo}</span>
                  </div>
                  <span className="text-slate-900 font-semibold">{testimonial.company}</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 mb-8">
                <p className="text-slate-600 leading-relaxed text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Person Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-violet-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-16 border-t border-slate-200"
        >
          <p className="text-center text-slate-500 mb-8 font-medium">Trusted by HR teams at leading enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {['Fortune 500', 'TechCrunch', 'Gartner', 'Forbes', 'Inc. 5000'].map((brand) => (
              <span key={brand} className="text-slate-400 font-bold text-xl tracking-tight">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}