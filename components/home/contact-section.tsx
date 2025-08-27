"use client";

import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_0%,rgba(59,130,246,0.10)_0%,rgba(255,255,255,0)_60%),radial-gradient(40%_40%_at_100%_100%,rgba(16,185,129,0.10)_0%,rgba(255,255,255,0)_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-6 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div
            initial={{ y: 14, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900">Contact us</h3>
            <p className="mt-2 text-neutral-600">Have questions? Our experts are here to help you choose the right program.</p>
            <div className="mt-6 text-sm text-neutral-700 space-y-1">
              <div>Email: info@collexa.app</div>
              <div>Toll Free: 1800-000-000</div>
              <div>Mon–Sat: 9am – 7pm</div>
            </div>
          </motion.div>

          <motion.form
            className="rounded-xl border border-neutral-200 bg-white/80 backdrop-blur p-6 shadow-sm"
            initial={{ y: 14, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-neutral-600">Full name</label>
                <Input className="mt-1" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-neutral-600">Email</label>
                <Input type="email" className="mt-1" placeholder="name@example.com" />
              </div>
              <div>
                <label className="text-xs text-neutral-600">Phone</label>
                <Input className="mt-1" placeholder="+91" />
              </div>
              <div>
                <label className="text-xs text-neutral-600">Interested program</label>
                <div className="mt-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mba">Online MBA</SelectItem>
                      <SelectItem value="mca">Online MCA</SelectItem>
                      <SelectItem value="ds">Data Science</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-neutral-600">Message</label>
                <Textarea rows={4} className="mt-1" placeholder="Tell us about your goals" />
              </div>
            </div>
            <motion.div
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02 }}
              className="mt-4"
            >
              <Button type="submit" className="w-full">Submit</Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;


