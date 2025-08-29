import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <section className="py-16 px-6 lg:px-48 pt-32 md:pt-40 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="relative h-[400px] md:h-[500px] w-[350px] md:w-[500px]">
          <Image
            src="/about.jpg"
            alt="About Us"
            fill
            className="object-cover shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4 leading-snug">
            We are doing more than you expect
          </h2>
          <p className="text-gray-600 mb-6">
            Faudantium magnam error temporibus ipsam aliquid neque quibusdam 
            dolorum, quia ea numquam assumenda mollitia dolorem impedit. Voluptate 
            at quis exercitationem officia temporibus adipisci quae totam enim 
            dolorum, assumenda. Sapiente soluta nostrum reprehenderit a velit 
            obcaecati facilis vitae magnam tenetur neque vel itaque inventore 
            eaque explicabo commodi maxime! Aliquam quasi, voluptates odio.
          </p>
          <p className="text-gray-600 mb-8">
            Consectetur adipisicing elit. Cupiditate nesciunt amet facilis 
            numquam, nam adipisci qui voluptate voluptas enim obcaecati veritatis 
            animi nulla, mollitia commodi quaerat ex, autem ea laborum.
          </p>

          {/* Contact Us Button */}
          <a
            href="/contact"
            className="px-7 py-4 font-semibold shadow bg-gray-900 text-white inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
