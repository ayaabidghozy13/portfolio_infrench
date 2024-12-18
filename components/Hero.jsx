import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
3;

import {
  RiTodoFill,
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiCodeBoxFill,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] ">
              Développeur IoT et logiciel
            </div>
            <h1 class="h1 mb-4">Bonjour, je m'appelle Aya Abid Ghozy</h1>
            <p class="subtitle max-w-[490px] mx-auto xl:mx-0">
              Étudiante passionnée en ingénierie IoT avec une expérience
              pratique sur les plateformes IoT et une solide maîtrise de HTML,
              CSS, JavaScript et React. Déterminée à utiliser mes compétences
              pour innover et créer des solutions impactantes.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 ">
              <Link href="/contact">
                <Button className="hidden md:inline-flex gap-x-2">
                  Contactez-moi <Send size={18} />
                </Button>
              </Link>
              <a
                href="/Resume.pdf"
                download="resume.pdf"
                target="_blank"
                className="hidden md:inline-flex w-full md:w-auto"
              >
                <Button variant="secondary" className="gap-x-2">
                  Télécharger le CV <Download size={18} />
                </Button>
              </a>
            </div>
            {/* socials */}
            <Socials
              containerStyles="hidden md:flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative ">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[20%] -left-[11rem]  "
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText=" an d'expérience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[91.1%] -left-[5rem]  "
              icon={<RiTodoFill />}
              endCountNum={50}
              endCountText="+"
              badgeText="Projets terminés"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[44%] -right-[11rem]  "
              icon={<RiCodeBoxFill />}
              endCountNum={20}
              endCountText="+"
              badgeText="compétences"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 "></div>
            <DevImg
              imgStyles="w-[500px] h-[500px] "
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom "
              imgSrc="/hero/test2.webp"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce ">
          <RiArrowDownSLine className="text-3xl text-primary " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
