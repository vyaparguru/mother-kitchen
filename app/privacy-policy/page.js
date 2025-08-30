import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <section className="py-16 px-6 lg:px-20 bg-white pt-12 md:pt-10 ">
                <div className="max-w-4xl mx-auto pt-20">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
                    <p className="mb-4 text-gray-600">
                        At Mother’s Kitchen, we value your privacy and are committed to
                        protecting your personal information. This Privacy Policy outlines how
                        we collect, use, and safeguard your data when you visit our website or
                        dine with us.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Information We Collect</h2>
                    <p className="text-gray-600 mb-4">
                        We may collect personal information such as your name, email address,
                        phone number, and payment details when you make reservations, place
                        online orders, or subscribe to our newsletter.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">How We Use Your Information</h2>
                    <p className="text-gray-600 mb-4">
                        Your information is used to process orders, confirm reservations,
                        improve our services, and communicate promotions or updates. We do not
                        sell or share your data with third parties except as required by law.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Data Security</h2>
                    <p className="text-gray-600 mb-4">
                        We implement industry-standard security measures to protect your
                        personal data from unauthorized access or misuse.
                    </p>

                    <p className="mt-8 text-gray-600">
                        If you have any questions about our Privacy Policy, please contact us
                        at motherkitchen@gmail.com or +1 705-586-1599.
                    </p>
                </div>
            </section>
        </>
    );
}
