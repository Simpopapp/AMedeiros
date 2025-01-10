import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Education = () => {
  return (
    <section className="py-16 px-8 bg-white animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-resume-primary mb-8">Educação</h2>
        <Card className="border-l-4 border-l-resume-accent">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-resume-secondary rounded-full">
                <GraduationCap className="w-6 h-6 text-resume-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-resume-primary">
                  Faculdades Integradas de Guarulhos
                </h3>
                <p className="text-resume-text mt-1">
                  Graduação em Administração
                </p>
                <p className="text-sm text-resume-text mt-2">1997 - 2001</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};