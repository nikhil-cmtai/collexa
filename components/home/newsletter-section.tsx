"use client"

import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] py-20">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[var(--primary-foreground)]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--accent)]/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex rounded-full bg-[var(--card)]/10 p-3 backdrop-blur-sm">
            <Mail className="h-8 w-8 text-[var(--primary-foreground)]" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-[var(--primary-foreground)] sm:text-4xl">Never Miss an Opportunity</h2>
          <p className="mt-4 text-lg text-[var(--primary-foreground)]/90">
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
              className="h-12 border-[var(--primary-foreground)]/20 bg-[color:rgb(255_255_255_/_.08)] text-[var(--primary-foreground)] placeholder:text-[var(--primary-foreground)]/60 backdrop-blur-sm focus-visible:ring-[var(--primary-foreground)]/50 sm:w-80"
            />
            <Button size="lg" className="h-12 bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[color:color-mix(in_oklab,_var(--accent),_black_10%)]">
              <Send className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </motion.div>

          <p className="mt-4 text-sm text-[var(--primary-foreground)]/70">Join 50,000+ students already subscribed. Unsubscribe anytime.</p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-[var(--primary-foreground)]/10 pt-8"
        >
          {["Weekly Updates", "Career Tips", "Exclusive Offers", "No Spam"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 text-[var(--primary-foreground)]/90"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />   
              <span className="text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
