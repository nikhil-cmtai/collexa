"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Type definitions
interface AvatarProps {
  className?: string;
  children?: React.ReactNode;
}

interface AvatarImageProps {
  className?: string;
  src: string;
  alt: string;
}

interface AvatarFallbackProps {
  className?: string;
  children?: React.ReactNode;
}

interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: TestimonialCardProps[];
  className?: string;
}

// Avatar Components
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
    {...props}
  >
    {children}
  </div>
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(({ className = "", src, alt, ...props }, ref) => (
  <Image
    ref={ref}
    src={src}
    alt={alt}
    width={40}
    height={40}
    className={`aspect-square h-full w-full object-cover ${className}`}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex h-full w-full items-center justify-center rounded-full bg-surface ${className}`}
    {...props}
  >
    {children}
  </div>
));
AvatarFallback.displayName = "AvatarFallback";

// Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ author, text, href, className = "" }) => {
  const Card = href ? 'a' : 'div';
  
  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`flex flex-col rounded-2xl bg-white p-6 text-start max-w-[340px] h-[220px] transition-all duration-300 border border-border shadow-sm hover:border-primary/30 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-12 w-12 ring-2 ring-primary/10">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>
            {author.name.split(' ').map((n: string) => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-base font-bold leading-none text-heading">
            {author.name}
          </h3>
          <p className="text-sm text-muted mt-1">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="text-sm text-text leading-relaxed line-clamp-4">
        {text}
      </p>
    </Card>
  );
};

// Testimonials Section Component
const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ title, description, testimonials, className = "" }) => {
  return (
    <section className={`relative bg-gradient-to-b from-surface to-background text-text py-20 px-0 overflow-hidden ${className}`}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 text-center">
        <motion.div 
          className="flex flex-col items-center gap-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-4">
            
            {/* Title */}
            <h2 className="max-w-[720px] text-3xl font-bold leading-tight sm:text-5xl sm:leading-tight text-heading">
              {title}
            </h2>

          </div>
          <p className="text-lg max-w-[600px] text-muted leading-relaxed">
            {description}
          </p>
        </motion.div>
        
        <div className="relative flex w-full flex-col items-center justify-center gap-8">
          {/* First Row: Left to Right */}
          <div 
            className="group flex overflow-hidden p-2 gap-6 flex-row"
            style={{
              '--duration': '40s',
              '--gap': '1.5rem'
            } as React.CSSProperties}
          >
            <div 
              className="flex shrink-0 justify-around gap-6 flex-row animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]"
            >
              {[...Array(3)].map((_, setIndex) => (
                testimonials.slice(0, Math.ceil(testimonials.length / 2)).map((testimonial: TestimonialCardProps, i: number) => (
                  <TestimonialCard 
                    key={`row1-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Second Row: Right to Left */}
          <div 
            className="group flex overflow-hidden p-2 gap-6 flex-row"
            style={{
              '--duration': '40s',
              '--gap': '1.5rem'
            } as React.CSSProperties}
          >
            <div 
              className="flex shrink-0 justify-around gap-6 flex-row animate-[marquee-reverse_40s_linear_infinite] group-hover:[animation-play-state:paused]"
            >
              {[...Array(3)].map((_, setIndex) => (
                testimonials.slice(Math.ceil(testimonials.length / 2)).map((testimonial: TestimonialCardProps, i: number) => (
                  <TestimonialCard 
                    key={`row2-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Education Testimonials Component
const EducationTestimonials: React.FC = () => {
  const testimonials: TestimonialCardProps[] = [
    {
      author: {
        name: "Rahul Sharma",
        handle: "@rahuldev",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Got placed at Google after completing their Full Stack Development course. The practical projects and mentorship were game-changers!",
      href: "https://linkedin.com/in/rahuldev"
    },
    {
      author: {
        name: "Priya Patel",
        handle: "@priyacodes",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "From zero coding knowledge to landing a ₹12 LPA job at Microsoft in just 8 months. Their placement support is incredible!"
    },
    {
      author: {
        name: "Amit Kumar",
        handle: "@amitml",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "The Data Science internship program helped me transition from mechanical engineering to ML engineer at Flipkart. Best decision ever!",
      href: "https://twitter.com/amitml"
    },
    {
      author: {
        name: "Sneha Gupta",
        handle: "@snehatech",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Their React Native course was so comprehensive. Got an internship at Zomato during the course itself, now working full-time there!"
    },
    {
      author: {
        name: "Vikash Singh",
        handle: "@vikashcloud",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
      },
      text: "DevOps bootcamp changed my career trajectory completely. From ₹3 LPA to ₹18 LPA at Amazon in 6 months. Thank you team!"
    },
    {
      author: {
        name: "Ananya Joshi",
        handle: "@ananyaux",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "UI/UX Design course with real client projects gave me confidence. Now working as Senior Designer at Paytm with amazing salary!"
    },
    {
      author: {
        name: "Rohit Verma",
        handle: "@rohitjava",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Java Full Stack course + guaranteed internship program = dream job at TCS. The mock interviews really prepared me well.",
      href: "https://linkedin.com/in/rohitjava"
    },
    {
      author: {
        name: "Kavya Reddy",
        handle: "@kavyaai",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      text: "AI/ML specialization course is top-notch! Got selected for internship at IIT Delhi research lab, now pursuing PhD there."
    },
    {
      author: {
        name: "Harsh Agarwal",
        handle: "@harshstartup",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Entrepreneurship & Digital Marketing course helped me start my own agency. Now making ₹50k+ monthly at age 22!"
    },
    {
      author: {
        name: "Divya Shah",
        handle: "@divyacyber",
        avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Cybersecurity certification course was exactly what I needed. Switched from IT support to Security Analyst at Wipro with 80% hike!"
    }
  ];

  return (
    <TestimonialsSection
      title="Thousands Trained. Careers Transformed."
      description="See success stories of students who built their careers through our courses, internships and job placement programs"
      testimonials={testimonials}
    />
  );
};

export default EducationTestimonials;
