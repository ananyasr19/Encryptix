"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Calendar, Clock, MapPin, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Master the Art of Personal Branding</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Free live webinar with top branding expert Sarah Lane
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>June 30</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>6:00 PM IST</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Zoom</span>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-purple-400 hover:bg-purple-500 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            Register Now
          </Button>
        </div>
      </section>

      {/* About the Webinar Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">About the Webinar</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Join us for an exclusive live session where you'll discover the secrets to building a powerful personal
            brand that opens doors and creates opportunities. Whether you're just starting your career or looking to
            make a career pivot, this webinar will give you the tools and strategies you need to stand out in today's
            competitive landscape.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Learn how to grow your LinkedIn audience</h3>
              <p className="text-gray-600 text-sm">Master the platform that matters most for professional networking</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 font-bold text-xl">✨</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Personal branding strategies for beginners</h3>
              <p className="text-gray-600 text-sm">Start from scratch with proven frameworks and techniques</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">🎯</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">How to stand out in the job market</h3>
              <p className="text-gray-600 text-sm">Differentiate yourself and attract the right opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">Meet Your Speaker</h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Sarah Lane - Personal Branding Expert"
                width={300}
                height={300}
                className="rounded-full object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Sarah Lane</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sarah Lane is a LinkedIn Top Voice and branding coach with 10+ years of experience helping professionals
                shine online. She has worked with hundreds of clients across various industries, helping them build
                authentic personal brands that drive career growth and business success. Sarah's expertise has been
                featured in major publications and she regularly speaks at industry conferences worldwide.
              </p>

              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="py-16 px-4 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What You'll Learn</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Building your online presence</h3>
                <p className="text-blue-100">Create a cohesive digital identity across all platforms</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Creating a compelling elevator pitch</h3>
                <p className="text-blue-100">Craft a memorable introduction that opens doors</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Tools to manage your brand</h3>
                <p className="text-blue-100">Discover the best platforms and resources for brand management</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Networking strategies that work</h3>
                <p className="text-blue-100">Build meaningful professional relationships online and offline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="cta-section" className="py-16 px-4 bg-gradient-to-r from-purple-400 to-purple-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Personal Brand?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't miss this opportunity to learn from one of the industry's leading experts
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input type="text" placeholder="Your Name" className="bg-white text-gray-900 border-0" />
              <Input type="email" placeholder="Your Email" className="bg-white text-gray-900 border-0" />
            </div>
          </div>

          <Button
            size="lg"
            className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-12 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Register Now - It's Free!
          </Button>

          <p className="text-sm mt-4 opacity-75">Limited seats available. Secure your spot today!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2">Get in Touch</h3>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>support@jobgateway.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="border-t border-navy-700 mt-8 pt-8 text-center text-sm text-blue-100">
            <p>&copy; 2025 JobGateways. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
