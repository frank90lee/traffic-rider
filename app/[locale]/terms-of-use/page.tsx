import { LocaleProps } from "@/types/Index";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Use - Sprunki Pyramixed Games",
  description:
    "Terms of Use for Sprunki Pyramixed Games - Our service terms and conditions.",
  robots: "noindex, nofollow"
};

export default function TermsOfUse({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return (
    <div className="min-h-screen flex flex-col">
      <Header t={t} showNavItems={true} />
      <main className="flex-grow max-w-5xl mx-auto p-4 w-full">
        <div className="rounded-xl p-8 shadow-m">
          <Breadcrumb items={[{ label: "Terms of Use" }]} />
          <h1 className="text-4xl font-bold mb-8 text-gray-800">
            Terms of Use for Sprunki Pyramixed Games
          </h1>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            1. Acceptance of Terms
          </h2>
          <p className="mb-8 text-gray-600">
            By accessing and using Sprunki Pyramixed Games (
            <a
              href={process.env.NEXT_PUBLIC_SITE_URL || "https://pyramixed.org/"}
              className="text-blue-600 hover:text-blue-800"
            >
              {process.env.NEXT_PUBLIC_SITE_URL || "https://pyramixed.org/"}
            </a>
            ), you agree to comply with and be bound by these Terms of Use. If
            you do not agree with any part of these terms, please do not use our
            service.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            2. Service Description
          </h2>
          <p className="mb-8 text-gray-600">
            Sprunki Pyramixed Games is a web-based gaming platform. Our service
            is provided &quot;as is&quot; and is intended for personal use only.
            Please contact us if you would like to use the service for
            commercial purposes.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            3. User Eligibility
          </h2>
          <p className="mb-8 text-gray-600">
            You must be at least 13 years of age to use Sprunki Pyramixed Games.
            If you are under 18 years of age, you must have your parent or legal
            guardian&apos;s permission to use the service and accept these Terms
            of Use. By using the service, you confirm that you meet these
            eligibility requirements.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            4. Content Guidelines
          </h2>
          <p className="mb-8 text-gray-600">
            Users are responsible for ensuring their use of Sprunki Pyramixed
            Games complies with all applicable laws and regulations. The
            following types of content and behavior are strictly prohibited:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 ml-4">
            <li>Illegal content or activities</li>
            <li>Explicit adult content or pornography</li>
            <li>Harassment, bullying, or threatening behavior</li>
            <li>Impersonation or misrepresentation</li>
            <li>Content that infringes on intellectual property rights</li>
            <li>Malicious software or harmful code</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            5. Intellectual Property
          </h2>
          <p className="mb-8 text-gray-600">
            All content and functionality available through Sprunki Pyramixed
            Games, including but not limited to text, graphics, logos, and
            software, is the exclusive property of Sprunki Pyramixed Games or
            its licensors and is protected by intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            6. Limitation of Liability
          </h2>
          <p className="mb-8 text-gray-600">
            Sprunki Pyramixed Games is provided on an &quot;as is&quot; and
            &quot;as available&quot; basis. We make no warranties regarding the
            reliability, availability, or performance of our service. We shall
            not be liable for any damages or losses resulting from your use or
            inability to use our service.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            7. Changes to Terms
          </h2>
          <p className="mb-8 text-gray-600">
            We reserve the right to modify these Terms of Use at any time. We
            will notify users of any significant changes by updating the date at
            the top of these terms. Your continued use of Sprunki Pyramixed
            Games after such modifications constitutes your acceptance of the
            updated terms.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            8. Termination
          </h2>
          <p className="mb-8 text-gray-600">
            We reserve the right to terminate or suspend access to our service
            immediately, without prior notice or liability, for any reason
            whatsoever, including but not limited to a breach of the Terms.
          </p>
        </div>
      </main>
      <Footer t={t} />
    </div>
  );
}
