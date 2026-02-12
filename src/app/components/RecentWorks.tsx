import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Heart, Eye } from "lucide-react";

interface Work {
  id: number;
  title: string;
  vendor: string;
  description: string;
  image: string;
  likes: number;
  views: number;
}

const works: Work[] = [
  {
    id: 1,
    title: "Modern Living Room Paint",
    vendor: "John Builders",
    description: "Complete interior painting with premium finish",
    image: "https://images.unsplash.com/photo-1573546005910-cf18cae9f39c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBhaW50aW5nJTIwd2FsbCUyMHdvcmt8ZW58MXx8fHwxNzcwNzIyMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 156,
    views: 1234,
  },
  {
    id: 2,
    title: "Luxury False Ceiling",
    vendor: "Elite Interiors",
    description: "Designer POP false ceiling with LED lighting",
    image: "https://images.unsplash.com/photo-1714462187247-add7ed99e5d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWxzZSUyMGNlaWxpbmclMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcwNzIyMjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 203,
    views: 2145,
  },
  {
    id: 3,
    title: "Custom Window Installation",
    vendor: "Modern Windows Co.",
    description: "Aluminum windows with modern design",
    image: "https://images.unsplash.com/photo-1758923530724-1ad597412421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aW5kb3clMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcwNjA2NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 189,
    views: 1856,
  },
  {
    id: 4,
    title: "Wall Plastering Project",
    vendor: "Perfect Plaster",
    description: "Smooth plastering and finishing work",
    image: "https://images.unsplash.com/photo-1766961980272-921bba4240bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGVyaW5nJTIwd2FsbCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzA3MjIyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 142,
    views: 1423,
  },
  {
    id: 5,
    title: "Kitchen Renovation",
    vendor: "Royal Renovations",
    description: "Complete modular kitchen transformation",
    image: "https://images.unsplash.com/photo-1736390800504-d3963b553aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NzA2ODE0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 284,
    views: 3421,
  },
  {
    id: 6,
    title: "Home Renovation",
    vendor: "Royal Renovations",
    description: "Full house renovation project completed",
    image: "https://images.unsplash.com/photo-1768321902290-54497eeb9cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMHByb2plY3R8ZW58MXx8fHwxNzcwNjI5MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 312,
    views: 4234,
  },
];

export function RecentWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Recent Vendor Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the latest projects completed by our verified professionals
          </p>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {works.map((work) => (
              <div
                key={work.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 text-white">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        <span>{work.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        <span>{work.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{work.title}</h3>
                  <p className="text-sm text-primary mb-2">by {work.vendor}</p>
                  <p className="text-sm text-gray-600">{work.description}</p>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
