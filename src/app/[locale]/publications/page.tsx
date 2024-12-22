import {
  Avatar,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  SmartLink,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL, renderContent } from "@/app/resources";
import styles from "@/components/about/about.module.scss";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { FaGoogleScholar, FaUsers } from "react-icons/fa6";
import { SiResearchgate } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiVideoConference } from "react-icons/gi";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { publications } = renderContent(t);
  const title = publications.title;
  const description = publications.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}/publications`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Publications({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { person, about, social, publications } = renderContent(t);

  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />

      <Flex fillWidth mobileDirection="column" justifyContent="center">
        {about.avatar.display && (
          <Flex
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            direction="column"
            alignItems="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" alignItems="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}

            <Heading
              as="h3"
              id={"rg"}
              variant="display-strong-s"
              marginBottom="40"
              marginTop="m"
              onBackground="warning-weak"
            >
              <SmartLink
                className={styles.hover}
                style={{
                  textDecoration: "none",
                  margin: "0",
                  height: "fit-content",
                }}
                href={"https://www.researchgate.net/profile/Hussein-Fawaz-8"}
                key={"r"}
              >
                <SiResearchgate href="https://www.researchgate.net/profile/Hussein-Fawaz-8" />{" "}
              </SmartLink>
              <SmartLink
                className={styles.hover}
                style={{
                  textDecoration: "none",
                  margin: "0",
                  height: "fit-content",
                }}
                href="https://scholar.google.com/citations?user=qCON2h0AAAAJ&hl=en"
                key={"rgg"}
              >
                <FaGoogleScholar
                  style={{ marginLeft: 20 }}
                  href="https://scholar.google.com/citations?user=qCON2h0AAAAJ&hl=en"
                />
              </SmartLink>
            </Heading>
          </Flex>
        )}
        <Flex
          className={styles.blockAlign}
          fillWidth
          flex={9}
          maxWidth={40}
          direction="column"
        >
          {publications.papers && (
            <>
              <Heading
                as="h3"
                id={publications.title}
                variant="display-strong-s"
                marginBottom="40"
                marginTop="xl"
              >
                {publications.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l">
                {publications.papers.map((skill, index) => (
                  <SmartLink
                    className={styles.hover}
                    style={{
                      textDecoration: "none",
                      margin: "0",
                      height: "fit-content",
                    }}
                    href={skill.link}
                    key={skill.link}
                  >
                    <Flex
                      key={`${skill}-${index}`}
                      fillWidth
                      gap="4"
                      direction="column"
                    >
                      <Text
                        variant="heading-strong-l"
                        onBackground="brand-weak"
                      >
                        <IoNewspaperOutline /> {skill.title}
                      </Text>
                      <Text
                        variant="body-default-m"
                        onBackground="warning-weak"
                        marginTop="m"
                      >
                        <FaUsers /> {skill.authors}
                      </Text>
                      <Text
                        variant="body-default-m"
                        onBackground="danger-weak"
                        marginTop="m"
                        style={{ fontStyle: "italic" }}
                      >
                        <GiVideoConference /> {skill.conference}
                      </Text>
                      <Text marginTop="m">
                        <hr />{" "}
                      </Text>
                    </Flex>
                  </SmartLink>
                ))}
              </Flex>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
