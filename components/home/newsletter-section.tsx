"use client"

import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary py-20">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex rounded-full bg-white/10 p-3 backdrop-blur-sm">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Never Miss an Opportunity</h2>
          <p className="mt-4 text-lg text-white/90">
            Get the latest internships, career tips, and exclusive offers delivered to your inbox
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-12 border-white/20 bg-white/10 text-white placeholder:text-white/60 backdrop-blur-sm focus-visible:ring-white/50 sm:w-80"
            />
            <Button size="lg" className="h-12 bg-accent text-accent-foreground hover:bg-accent/90">
              <Send className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </motion.div>

          <p className="mt-4 text-sm text-white/70">Join 50,000+ students already subscribed. Unsubscribe anytime.</p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8"
        >
          {["Weekly Updates", "Career Tips", "Exclusive Offers", "No Spam"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 text-white/90"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
