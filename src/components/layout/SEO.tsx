import type { Metadata } from "next";

import { site } from "@/data/site";

export function JSONLD() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}/images/profile-picture.jpg`,
    jobTitle: site.title,
    worksFor: {
      "@type": "Organization",
      name: "Patuakhali Science and Technology University (PSTU)",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Patuakhali Science and Technology University (PSTU)",
    },
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khulna",
      addressCountry: "Bangladesh",
    },
    knowsAbout: [
      "Competitive Programming",
      "Full-Stack Web Development",
      "Systems Programming",
      "Data Structures & Algorithms",
    ],
    sameAs: site.social.map((s) => s.href),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

export function SEO({
  title,
  description,
}: {
  title?: string;
  description?: string;
}): Metadata {
  return {
    title: title ? `${title} | ${site.name}` : undefined,
    description: description ?? site.description,
    openGraph: {
      title: title ? `${title} | ${site.name}` : site.title,
      description: description ?? site.description,
      type: "website",
      url: site.url,
      siteName: site.name,
      images: [
        {
          url: `${site.url}/images/profile-picture.jpg`,
          width: 800,
          height: 800,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${site.name}` : site.title,
      description: description ?? site.description,
      images: [`${site.url}/images/profile-picture.jpg`],
    },
  };
}
