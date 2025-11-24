import About from './about'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Us for the website',
}

export default function AboutPage() {
  return <About />
}