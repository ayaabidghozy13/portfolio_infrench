import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary p-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 xl:mx-0 mb-4 "
            iconStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Droits d'auteur &copy; ayaabidghozy. Tous droits réservés. | 2a.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
