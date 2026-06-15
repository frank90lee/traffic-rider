import { LocaleProps } from "@/types/Index";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy - Sprunki Pyramixed Games",
  description:
    "Privacy Policy for Sprunki Pyramixed Games - Information about our no-data-collection policy.",
  robots: "noindex, nofollow"
};

export default function PrivacyPolicy({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return (
    <div className="min-h-screen flex flex-col">
      <Header t={t} showNavItems={true} />
      <main className="flex-grow max-w-5xl mx-auto p-4 w-full">
        <div className=" rounded-xl p-8 shadow-m">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-4xl font-bold mb-8 text-gray-800">
            Privacy Policy for Sprunki Pyramixed Games
          </h1>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">Overview</h2>
          <p className="mb-8 text-gray-600">
            Sprunki Pyramixed Games operates the website (
            <a
              href={process.env.NEXT_PUBLIC_SITE_URL || "https://pyramixed.org/"}
              className="text-blue-600 hover:text-blue-800"
            >
              {process.env.NEXT_PUBLIC_SITE_URL || "https://pyramixed.org/"}
            </a>
            ) and is committed to protecting your privacy. We take pride in our
            no-data-collection approach, ensuring maximum privacy for our users.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            No Data Collection Policy
          </h2>
          <p className="mb-8 text-gray-600">
            We want to be clear and transparent: Sprunki Pyramixed Games does
            not collect, store, or process any personal information from our
            users. We believe in providing a service that respects your privacy
            completely.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            How Our Service Works
          </h2>
          <p className="mb-8 text-gray-600">
            Our service operates without requiring any user registration or
            personal information. All interactions with our platform are
            anonymous and temporary. We do not:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 ml-4">
            <li>Collect personal information</li>
            <li>Use cookies or tracking technologies</li>
            <li>Store user data</li>
            <li>Share any information with third parties</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Technical Information
          </h2>
          <p className="mb-8 text-gray-600">
            While our service operates through your web browser, we do not
            track, store, or analyze any usage data. Any temporary data that
            might be created during your session remains in your browser and is
            cleared when you close the page.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Third-Party Services
          </h2>
          <p className="mb-8 text-gray-600">
            Our website does not integrate with any third-party services that
            might collect user data. We maintain a standalone service to ensure
            your privacy is protected.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Children&apos;s Privacy
          </h2>
          <p className="mb-8 text-gray-600">
            Our service is available to users of all ages. Since we do not
            collect any personal information, there are no special provisions
            needed for children&apos;s privacy protection.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Changes to This Policy
          </h2>
          <p className="mb-8 text-gray-600">
            If we make any changes to our no-data-collection policy, we will
            update this page and the effective date above. We encourage you to
            review this policy periodically.
          </p>
        </div>
      </main>
      <Footer t={t} />
    </div>
  );
}
