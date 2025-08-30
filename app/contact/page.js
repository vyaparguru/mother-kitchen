import Navbar from "@/components/Navbar";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
    <Navbar />
    <section className="py-16 px-6 lg:px-48 bg-white pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-500 mb-8">
            Bringing the warmth of a mother’s kitchen to your table, one delicious meal at a time.
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900">PHONE</p>
              <p className="text-gray-600">+1 705-586-1599</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">EMAIL</p>
              <p className="text-gray-600">motherkitchen@gmail.com</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">ADDRESS</p>
              <p className="text-gray-600">80 Cedar street, Downtown Sudbury, Greater Sudbury, ON, Canada, P3E1A5</p>
            </div>

            <div>
              <p className="font-semibold mb-2 text-gray-900">FOLLOW</p>
              <div className="flex gap-4 text-gray-600">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="hover:text-black cursor-pointer" />
                </a>
                <a
                  href="https://www.facebook.com/share/1AcJYNU68y/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="hover:text-black cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[400px]">
          <iframe
            title="Google Map"
            className="w-full h-full "
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.6992918450496!2d-80.99449533038398!3d46.492328621480304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2faae8877c9b45%3A0x203fa6ca35405c19!2s80%20Cedar%20St%2C%20Greater%20Sudbury%2C%20ON%20P3E%201A5%2C%20Canada!5e0!3m2!1sen!2sin!4v1756482651950!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
    </>
  );
}
