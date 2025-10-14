"use client"

import React from "react"
import { motion } from "framer-motion"
import { Award, Clock, Users } from "lucide-react"

const items = [
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "Accredited Programs",
    desc: "UG, PG and Diploma programs from trusted universities",
    color: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: <Clock className="w-6 h-6 text-secondary" />,
    title: "Flexible Modes",
    desc: "Online, Distance and Hybrid options to fit your schedule",
    color: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    icon: <Users className="w-6 h-6 text-black" />,
    title: "Mentor Support",
    desc: "Guidance from experts to help you choose the right course",
    color: "bg-accent/10",
    borderColor: "border-accent/20",
  },
]

export default function Highlights() {
  return (
    <section className="py-20" id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading">
            Why Choose Our Campus Courses
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Discover the benefits of choosing our comprehensive campus course platform for your educational journey.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                whileHover={{ rotate: 360 }}
                className={`w-12 h-12 rounded-full ${item.color} ${item.borderColor} border flex items-center justify-center mb-4`}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-heading mb-2">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


