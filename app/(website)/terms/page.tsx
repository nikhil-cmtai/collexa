import Terms from './terms'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for the website',
}

export default function TermsPage() {
  return <Terms />
}