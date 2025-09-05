import { Shield, Github, Twitter, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">CheckShield</span>
            </div>
            <p className="text-sm text-light/80">
              Protecting you from scams with advanced verification technology.  
              Smart Scans. Safer Clicks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Verification Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/phone-check" className="hover:text-primary transition">Phone Verification</a></li>
              <li><a href="/url-check" className="hover:text-primary transition">URL Safety Check</a></li>
              <li><a href="/email-check" className="hover:text-primary transition">Email Verification</a></li>
              <li><a href="/social-check" className="hover:text-primary transition">Social Media Check</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="/privacy" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary transition">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-primary transition">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:support@checkshield.com" className="hover:text-primary transition">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="text-xs text-light/60 mt-4">
              Report suspicious activity to help protect others.
            </p>
          </div>
        </div>

        <div className="border-t border-light/20 mt-8 pt-8 text-center">
          <p className="text-sm text-light/80">
            © 2024 CheckShield. All rights reserved. Built with security in mind.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
