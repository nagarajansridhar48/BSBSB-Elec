import React from 'react';
import { FaInstagram, FaTwitter, FaEnvelope, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const Leftcard = () => {
     const socialLinks = [
    { 
      icon: <FaInstagram />, 
      href: "https://www.instagram.com/",
      color: "hover:bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743]"
    },
    { 
      icon: <FaTwitter />, 
      href: "https://twitter.com/",
      color: "hover:bg-[#1DA1F2]"
    },
    { 
      icon: <FaEnvelope />, 
      href: "mailto:bsbsbelectronics@gmail.com",
      color: "hover:bg-[#EA4335]"
    },
    { 
      icon: <FaWhatsapp />, 
      href: "https://wa.me/917806868600",
      color: "hover:bg-[#25D366]"
    },
    { 
      icon: <FaFacebookF />, 
      href: "https://www.facebook.com/",
      color: "hover:bg-[#1877F2]"
    }
  ];
  return (
     <div
          className="p-6 md:p-8 lg:px-16 flex flex-col gap-6 text-center md:text-left bg-gradient-to-r from-[#4286b9] to-[#f3a933] text-white"
          data-aos="fade-right"
        >
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">CONTACT US</h1>
            <p className="text-sm sm:text-base">
              We'd love to hear from you! Whether you have a question about features, pricing, or anything else — our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div data-aos="zoom-in" data-aos-delay="100">
              <h3 className="text-base sm:text-lg font-semibold">Phone</h3>
              <p>+91 7806868600</p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="150">
              <h3 className="text-base sm:text-lg font-semibold">Email</h3>
              <p>bsbsbelectronics@gmail.com</p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-base sm:text-lg font-semibold">Landline</h3>
              <p>04435 898309</p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="250">
              <h3 className="text-base sm:text-lg font-semibold">Address</h3>
              <p className="text-xs sm:text-sm">CG1, Puluthivakkam Pallavan Street,<br />Chennai – 600091, Tamil Nadu</p>
            </div>
          </div>

          <div className="mt-4 text-sm sm:text-base">
            <p>
              Serving 1000+ travel partners across 65+ cities in India, USA, Canada, and UAE.
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="mt-4 w-full">
            <div className="flex flex-wrap lg:justify-center md:justify-start gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white bg-black/20 p-2 sm:p-3 rounded-full text-xl hover:text-white ${link.color} transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md`}
                  aria-label={`Social link ${index}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
  )
}

export default Leftcard