import { Button } from "@/components/ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Prêt à transformer vos idées en réalité ? Je suis là pour vous
            aider.
          </h2>
          <Link href="/contact">
            <Button>Contactez-moi</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
