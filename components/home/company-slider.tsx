"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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

export function CompanyLogoSlider() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Top Companies Hiring</h2>
          <p className="mt-3 text-lg text-muted-foreground">Join thousands of students working with leading brands</p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div className="flex">
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...companies, ...companies, ...companies].map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  className="flex h-20 w-40 flex-shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={120}
                    height={60}
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
