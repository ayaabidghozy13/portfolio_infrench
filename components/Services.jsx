import { GanttChartSquare, Blocks, Gem, EarthLock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "IoT",
    description:
      "Offre des services en IoT pour concevoir et développer des solutions connectées innovantes, intégrant des capteurs, des plateformes IoT, et des systèmes embarqués pour répondre à vos besoins technologiques.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: " développement  Front-End",
    description:
      "Spécialisée en React pour des interfaces utilisateur dynamiques et réactives. Met l'accent sur la performance, l'expérience utilisateur et les standards web modernes.",
  },
  {
    icon: <EarthLock size={72} strokeWidth={0.8} />,
    title: "développement backend ",
    description:
      "Expertise en développement backend avec intégration de Firebase pour créer des applications évolutives et sécurisées. Gestion efficace des bases de données en temps réel, authentification, et déploiement rapide d’API.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 ">
      <div className="container mx-auto ">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto ">
          Mes services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8  ">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative "
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px] ">
                  <div className="w-[140px] h1-[80px] bg-white dark:bg-background flex justify-center items-center  ">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center  ">
                  <CardTitle className=" mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
