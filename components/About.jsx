import Image from "next/image"; // Keep this import if you still use Image elsewhere
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Aya Abid Ghozy",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+216 58947032",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ayaabidghozy13@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Née en août 2003",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Étudiante en IoT et développeuse logicielle",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Tunis, Monastir: Moknine",
  },
];

const qualificationsData = [
  {
    title: "Education",
    data: [
      {
        university: "Lycée Said Boubaker Moknine, Monastir",
        qualification: "Baccalauréat en Mathématiques ",
        years: "2021 - 2022",
      },
      {
        university:
          "ISITCom | Institut Supérieur d'Informatique et des Technologies de Communication",
        qualification: "Diplôme en ingénierie des systèmes informatiques",
        years: "actuelle",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "stagiaire tn smart iot",
        role: "IoT/Web Developer",
        years: "2024 - present",
      },
      {
        company: "stagiaire flesk consulting",
        role: "Développeur IA et Web",
        years: "2023",
      },
    ],
  },
];

const skillData = [
  {
    title: "Compétences",
    data: [
      {
        name: "Développement back-end",
      },
      {
        name: "Python, Django",
      },
      {
        name: "Développement Front-End",
      },
      {
        name: "JavaScript, ReactJS",
      },
      {
        name: "Développement Mobile ",
      },
      {
        name: "Flutter",
      },
      {
        name: "IoT Development",
      },
      {
        name: "ESP8266, ESP32",
      },
    ],
  },
  {
    title: "Outils",
    data: [
      {
        imgPath: "/about/python.svg",
      },
      {
        imgPath: "/about/django.svg",
      },
      {
        imgPath: "/about/javascript.svg",
      },
      {
        imgPath: "/about/react.svg",
      },
      {
        imgPath: "/about/html.svg",
      },
      {
        imgPath: "/about/css.svg",
      },
      {
        imgPath: "/about/github.svg",
      },
      {
        imgPath: "/about/linux.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title) || {}; // Handle undefined case
  };

  return (
    <section className="container mx-auto xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          À propos de moi.
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row">
        {/* video */}
        <div className="hidden xl:flex flex-1 relative">
          <video
            className="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative object-cover"
            src="/about/cv_video_aya.mp4"
            controls
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
        {/* tabs */}
        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px]">
              <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                Info personnelles
              </TabsTrigger>
              <TabsTrigger
                className="w-[162px] xl:w-auto"
                value="qualifications"
              >
                Qualifications
              </TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                Compétences
              </TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 xl:mt-8">
              {/* personal info */}
              <TabsContent value="personal">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4"></h3>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Ancré dans la recherche d'innovation, ma mission est de
                    combiner les technologies de pointe avec une créativité
                    unique pour créer des sites web qui redéfinissent
                    l'intuitivité et captivent les utilisateurs avec des
                    expériences numériques exceptionnelles et transformatrices.
                  </p>
                  {/* icons */}
                  <div className="grid xl:grid-cols-2 gap-4 mb-12">
                    {infoData.map((item, index) => {
                      return (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                  {/* languages */}
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Langues</div>
                    <div className="border-b border-border"></div>
                    <div>Arabe, Anglais, Français, Espagnol.</div>
                  </div>
                </div>
              </TabsContent>
              {/* qualifications */}
              <TabsContent value="qualifications">
                <div>
                  <h3 className="h3 mb-8 text-center xl:text-left">
                    Mon incroyable parcours.
                  </h3>
                  {/* experience & education wrapper */}
                  <div className="grid md:grid-cols-2 gap-y-8">
                    {/* education */}
                    <div className="flex flex-col gap-y-6 ml-2">
                      <div className="flex items-center gap-x-4 text-[22px] text-primary">
                        <GraduationCap size={28} />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationsData, "Education").title}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationsData, "Education").data.map(
                          (item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* experience */}
                    <div className="flex flex-col gap-y-6 ml-2">
                      <div className="flex items-center gap-x-4 text-[22px] text-primary">
                        <Briefcase size={28} />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationsData, "experience").title}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationsData, "experience").data.map(
                          (item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-8">Outils que je peux utiliser.</h3>
                  <div className="mb-16">
                    <h4 className="text-xl font-semibold mb-2">Skills</h4>
                    <div className="border-b border-border mb-4"></div>
                    <div>
                      {getData(skillData, "Compétences").data.map(
                        (item, index) => {
                          const { name } = item;
                          return (
                            <div
                              className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 xl:text-left">
                      Tools
                    </h4>
                    <div className="border-b border-border mb-4"></div>
                    <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
                      {getData(skillData, "Outils").data.map((item, index) => {
                        const { imgPath } = item;
                        return (
                          <div key={index}>
                            <Image
                              src={imgPath}
                              alt=""
                              width={48}
                              height={48}
                              priority
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
