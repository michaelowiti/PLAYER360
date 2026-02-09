
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-100">Player360</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering athletes and individuals to achieve their highest potential through world-class training and performance optimization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/elite-performance" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Elite Performance Program
                </Link>
              </li>
              <li>
                <Link href="/semi-elite-performance" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Semi-Elite Performance Program
                </Link>
              </li>
              <li>
                <Link href="/beginner-performance" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Beginner Performance Program
                </Link>
              </li>
              <li>
                <Link href="/team-assessment" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Team Assessment
                </Link>
              </li>
              <li>
                <Link href="/performance-tracking" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Performance Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Get In Touch</h4>
            <address className="not-italic text-gray-400 space-y-2 text-sm">
              <p>Join the Player360 Community</p>
              <p>Learn more about our story</p>
              <p className="pt-2">
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors inline-flex items-center">
                  Contact Us →
                </Link>
              </p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Player360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
