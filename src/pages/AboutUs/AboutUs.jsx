import React from "react";
import { HeroSection } from "../../components/organisms/HeroSection";
import { Carousel } from "../../components/organisms/Carousel";
import { Card, CardContent } from "../../components/ui/card";
import { useTranslation } from "../../hooks/useTranslation";
import AOS from "aos";
import { useEffect } from "react";

export const AboutUs = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Static data that doesn't need translation
  const staticData = {
    hero: {
      backgroundImage: "/images/About.png"
    },
    latestProjects: [
      {
        id: 1,
        images: [
          { src: "/images/project-1.png", alt: "Project 1" },
          { src: "/images/project-2.png", alt: "Project 2" },
          { src: "/images/project-3.png", alt: "Project 3" }
        ]
      },
      {
        id: 2,
        images: [
          { src: "/images/project-4.png", alt: "Project 4" },
          { src: "/images/project-2.png", alt: "Project 5" },
          { src: "/images/project-3.png", alt: "Project 6" }
        ]
      }
    ],
    awards: [
      {
        id: 1,
        image: "/images/award-1.png"
      },
      {
        id: 2,
        image: "/images/award-2.png"
      },
      {
        id: 3,
        image: "/images/award-3.png"
      }
    ],
    pressQuotes: [
      {
        id: 1,
        image: "/images/press-1.png"
      },
      {
        id: 2,
        image: "/images/press-2.png"
      },
      {
        id: 3,
        image: "/images/press-3.png"
      }
    ]
  };

  // Mission section content
  const missionContent = (
    <section className="w-full py-8 px-4 lg:px-8">
      <Card className="border-none shadow-none">
        <CardContent className="flex flex-col gap-6 p-0">
          <h2 data-aos="fade-up"
            data-aos-duration="1000" className="font-bold text-[#261d1b] font-['Playfair_Display',Helvetica] text-3xl lg:text-[44px] tracking-[-0.88px] leading-normal">
            {t('ourMission')}
          </h2>
          <p data-aos="fade-right"
            data-aos-duration="1000" className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#261d1b] text-lg lg:text-2xl tracking-[0] leading-relaxed">
            {t('missionContent')}
          </p>
        </CardContent>
      </Card>
    </section>
  );

  // Latest projects carousel items
  const latestProjects = staticData.latestProjects.map(project => ({
    id: project.id,
    content: (
      <div className="flex flex-col lg:flex-row items-center gap-4 px-4">
        {project.images.map((image, index) => (
          <img
            key={index}
            className="w-full lg:w-[428px] h-[300px] lg:h-[514px] object-cover rounded-lg"
            alt={image.alt}
            src={image.src}
          />
        ))}
      </div>
    ),
  }));

  // Awards carousel items
  const awards = staticData.awards.map((award, index) => ({
    id: award.id,
    content: (
      <div className="flex flex-col lg:flex-row items-center gap-8 px-4">
        <img className="w-full lg:w-[360px] h-[260px] object-cover rounded-lg" alt={t(`award${index + 1}Title`)} src={award.image} />
        <div className="flex flex-col items-start gap-3 flex-1">
          <h3 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-black text-2xl lg:text-[32px] tracking-[-0.64px] leading-normal">
            {t(`award${index + 1}Title`)}
          </h3>
          <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-black text-lg lg:text-xl tracking-[-0.40px] leading-normal">
            {t(`award${index + 1}Description`)}
          </p>
        </div>
      </div>
    ),
  }));

  // Press quotes carousel
  const pressQuotes = staticData.pressQuotes.map((quote, index) => ({
    id: quote.id,
    content: (
      <Card className="w-full bg-[#251b18] rounded-3xl border-none">
        <CardContent className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[52px] p-6">
          <img className="w-full lg:w-[560px] h-[300px] lg:h-[420px] object-cover rounded-lg" alt="Press" src={quote.image} />
          <div className="flex flex-col items-start gap-4 max-w-[622px]">
            <h3 className="font-['Playfair_Display',Helvetica] font-bold text-white text-2xl lg:text-4xl tracking-[-0.72px]">
              {t(`pressSource${index + 1}`)}
            </h3>
            <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-lg lg:text-xl tracking-[-0.40px] leading-relaxed">
              "{t(`pressQuote${index + 1}`)}"
            </p>
          </div>
        </CardContent>
      </Card>
    ),
  }));

  return (
    <div className="bg-[#fffcf5] flex flex-col items-center w-full">
      <main className="w-full">
        {/* Hero Section */}
        <HeroSection
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          backgroundImage={staticData.hero.backgroundImage}
        />

        {/* Mission and Image Section */}
        <div className="w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row py-16 px-4 lg:px-8">
          <div className="w-full lg:w-1/2">
            {missionContent}
          </div>
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div data-aos="fade-left"
              data-aos-duration="1000" className="w-full max-w-[487px] h-[400px] lg:h-[603px] relative mx-auto">
              <img className="absolute w-full max-w-[395px] h-[300px] lg:h-[447px] top-[100px] lg:top-[156px] left-1/2 transform -translate-x-1/2 lg:left-[92px] lg:transform-none" alt="Decorative" src="/images/Union.png" />
              <img className="absolute w-[100px] lg:w-[156px] h-[100px] lg:h-[156px] top-0 left-0" alt="Decorative" src="/images/Union.png" />
              <img className="absolute w-full max-w-[350px] lg:w-[406px] h-[250px] lg:h-[305px] top-[75px] lg:top-[131px] left-1/2 transform -translate-x-1/2 lg:left-3 lg:transform-none object-cover rounded-lg" alt="Theatre" src="/images/Theatre.png" />
            </div>
          </div>
        </div>

        {/* Latest Projects Section */}
        <section data-aos="fade-right"
          data-aos-duration="1000" className="w-full max-w-[1320px] mx-auto py-16 px-4 lg:px-8">
          <Carousel
            items={latestProjects}
            title={t('latestProject')}
            subtitle={t('latestProjectSubtitle')}
            autoPlay={true}
            autoPlayInterval={6000}
          />
        </section>

        {/* Awards Section */}
        <section data-aos="fade-left"
              data-aos-duration="1000"  className="w-full max-w-[1320px] mx-auto py-16 px-4 lg:px-8">
          <Carousel
            items={awards}
            title={t('awardsHonors')}
            subtitle={t('awardsSubtitle')}
            autoPlay={true}
            autoPlayInterval={7000}
          />
        </section>

        {/* Press Conference Section */}
        <section data-aos="fade-up"
              data-aos-duration="1000"  className="w-full max-w-[1320px] mx-auto py-16 px-4 lg:px-8">
          <Carousel
            items={pressQuotes}
            title={t('pressConference')}
            subtitle={t('pressSubtitle')}
            autoPlay={true}
            autoPlayInterval={8000}
          />
        </section>
      </main>
    </div>
  );
};