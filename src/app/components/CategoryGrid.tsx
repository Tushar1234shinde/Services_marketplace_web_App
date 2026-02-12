import { Paintbrush, SquareDashedBottom, Frame, Hammer, Box, Wrench } from "lucide-react";

interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Painting",
    description: "Interior & exterior painting services",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1573546005910-cf18cae9f39c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBhaW50aW5nJTIwd2FsbCUyMHdvcmt8ZW58MXx8fHwxNzcwNzIyMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Window Making",
    description: "Custom windows & door frames",
    icon: Frame,
    image: "https://images.unsplash.com/photo-1758923530724-1ad597412421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aW5kb3clMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcwNjA2NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Plastering",
    description: "Wall plastering & finishing",
    icon: SquareDashedBottom,
    image: "https://images.unsplash.com/photo-1766961980272-921bba4240bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGVyaW5nJTIwd2FsbCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzA3MjIyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "POP / False Ceiling",
    description: "Modern false ceiling designs",
    icon: Box,
    image: "https://images.unsplash.com/photo-1714462187247-add7ed99e5d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWxzZSUyMGNlaWxpbmclMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcwNzIyMjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "PVC / Modular Work",
    description: "Modular kitchen & furniture",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1736390800504-d3963b553aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NzA2ODE0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Renovation",
    description: "Complete home & office renovation",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1768321902290-54497eeb9cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMHByb2plY3R8ZW58MXx8fHwxNzcwNjI5MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our wide range of professional services for your home and office needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
