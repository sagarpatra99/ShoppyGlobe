import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    // Simulate subscription success
    setMessage({ type: "success", text: "Subscribed successfully! 🎉" });
    setEmail("");

    // Here you can add actual API call logic
  };

  return (
    <footer className="bg-orange-600 text-white px-[6vw]">
      <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding & About */}
        <div>
          <h2 className="text-3xl font-bold mb-3">ShoppyGlobe</h2>
          <p className="text-orange-200">
            Discover amazing products from around the world. Shop with
            confidence and enjoy the best deals on quality items.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <a
              href="https://facebook.com/shoppyglobe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com/shoppyglobe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com/company/shoppyglobe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-orange-200">
            <li>
              <Link
                to="/"
                className="hover:text-white transition-colors"
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-white transition-colors"
                aria-label="Products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-white transition-colors"
                aria-label="Cart"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/learn-more"
                className="hover:text-white transition-colors"
                aria-label="Learn More"
              >
                Learn More
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-orange-200 mb-4">
            Get the latest updates and offers delivered to your inbox.
          </p>
          {/* <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex border border-white py-2 px-4">
              <Mail className="mr-4" />
              <input
                type="email"
                placeholder="Your email address"
                className=" border-none outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-orange-600 cursor-pointer font-semibold px-6 rounded-md hover:bg-orange-100 transition-colors flex items-center justify-center gap-2"
              aria-label="Subscribe"
            >
              Subscribe <Send size={18} />
            </button>
          </form> */}
          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-xl flex flex-col sm:flex-row gap-3 sm:gap-4 mx-auto"
          >
            {/* Email Input */}
            <div className="flex items-center w-full border border-white bg-white/10 backdrop-blur-sm py-2 px-4 rounded-md focus-within:ring-2 focus-within:ring-orange-400 transition">
              <Mail className="text-white mr-3" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent text-white placeholder-gray-300 border-none outline-none text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
            </div>

            {/* Subscribe Button */}
            <button
              type="submit"
              className="bg-white text-orange-600 hover:bg-orange-100 font-semibold px-6 py-2 rounded-md transition-colors flex items-center justify-center gap-2"
              aria-label="Subscribe"
            >
              Subscribe <Send size={18} />
            </button>
          </form>

          {message && (
            <p
              className={`mt-3 ${
                message.type === "success" ? "text-green-300" : "text-red-300"
              } font-medium`}
              role="alert"
            >
              {message.text}
            </p>
          )}
        </div>
      </div>
      <div className="border-t border-orange-500 py-6 px-4 text-center sm:text-left text-orange-100 text-sm select-none flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium">ShoppyGlobe</span>. All rights reserved.
        </p>
        <p className="text-sm text-gray-200">
          Developed with ❤️ by{" "}
          <Link
            to="https://www.linkedin.com/in/thesagarpatra/"
            className="text-white hover:underline font-semibold transition"
          >
            Sagar Patra
          </Link>
        </p>
      </div>
    </footer>
  );
}
