import Navbar from "@/components/Navbar";

export default function TermsAndConditions() {
    return (
        <>
            <Navbar />
            <section className="py-16 px-6 lg:px-20 bg-white pt-32">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">Terms & Conditions</h1>
                    <p className="mb-4 text-gray-600">
                        Welcome to Mothers Kitchen . By using our website, services, or dining
                        at our restaurant, you agree to comply with the following Terms &
                        Conditions.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 text-gray-800 mb-2">Reservations & Cancellations</h2>
                    <p className="text-gray-600 mb-4">
                        Reservations are subject to availability. We request cancellations at
                        least 24 hours in advance. Late arrivals may result in table release.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 text-gray-800 mb-2">Online Orders</h2>
                    <p className="text-gray-600 mb-4">
                        Online orders must be paid in full at checkout. Delivery times are
                        estimates and may vary due to external factors.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 text-gray-800 mb-2">Allergies & Dietary Requirements</h2>
                    <p className="text-gray-600 mb-4">
                        Customers must inform our staff of any allergies or dietary restrictions.
                        While we take precautions, we cannot guarantee the absence of allergens.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 text-gray-800 mb-2">Liability</h2>
                    <p className="text-gray-600 mb-4">
                        We are not liable for losses, damages, or injuries resulting from dining
                        with us or using our website, except where required by law.
                    </p>

                    <p className="mt-8 text-gray-600">
                        For questions regarding these Terms & Conditions, please contact us at
                        motherkitchen@gmail.com or +1 705-586-1599.
                    </p>
                </div>
            </section>
        </>
    );
}
