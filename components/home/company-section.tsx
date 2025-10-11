"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const companies = [
  { name: "Google", logo: "/images/company-logo-slider/google-logo.png" },
  { name: "Microsoft", logo: "/images/company-logo-slider/microsoft-logo.png" },
  { name: "Amazon", logo: "/images/company-logo-slider/amazon-logo.png" },
  { name: "Meta", logo: "/images/company-logo-slider/meta-logo-abstract.png" },
  { name: "Apple", logo: "/images/company-logo-slider/apple-logo-minimalist.png" },
  { name: "Netflix", logo: "/images/company-logo-slider/netflix-logo.png" },
  { name: "Tesla", logo: "/images/company-logo-slider/tesla-logo.png" },
  { name: "Adobe", logo: "/images/company-logo-slider/adobe-logo.png" },
]

export default function CompanySection() {

  return (
    <section className="relative bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-5xl font-bold text-heading">
            Proud partner of leading <span className="text-primary">Tech Companies</span>
          </h2>
        </motion.div>

        {/* Companies Card */}
        <motion.div 
          className="bg-white rounded-3xl border border-border p-8 sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Company Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                className="group flex flex-col items-center justify-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-24 flex items-center justify-center">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={120}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-heading">
                  {company.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Partner Companies", color: "primary" },
            { value: "95%", label: "Placement Rate", color: "secondary" },
            { value: "₹12L", label: "Average Package", color: "primary" },
            { value: "10K+", label: "Students Placed", color: "secondary" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`group bg-gradient-to-br from-${stat.color}/5 to-transparent rounded-2xl p-6 border border-${stat.color}/20 hover:border-${stat.color}/40 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-4xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-heading">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
