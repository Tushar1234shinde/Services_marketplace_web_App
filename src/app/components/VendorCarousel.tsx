import { useRef } from "react";
import Slider from "react-slick";
import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Vendor {
  id: number;
  name: string;
  service: string;
  rating: number;
  reviews: number;
  image: string;
}

const vendors: Vendor[] = [
  {
    id: 1,
    name: "John Builders",
    service: "Painting & Decoration",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1764328165995-0624c280a6d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2NzM2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Elite Interiors",
    service: "POP & False Ceiling",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1764328165995-0624c280a6d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2NzM2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Modern Windows Co.",
    service: "Window Making",
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1764328165995-0624c280a6d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2NzM2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Perfect Plaster",
    service: "Plastering & Renovation",
    rating: 4.6,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1764328165995-0624c280a6d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2NzM2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Royal Renovations",
    service: "Complete Renovation",
    rating: 5.0,
    reviews: 284,
    image: "https://images.unsplash.com/photo-1764328165995-0624c280a6d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2NzM2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function VendorCarousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Rated Vendors</h2>
            <p className="text-gray-600">Meet our most trusted and experienced professionals</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {vendors.map((vendor) => (
            <div key={vendor.id} className="px-3">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{vendor.name}</h3>
                  <p className="text-gray-600 mb-3">{vendor.service}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-900">{vendor.rating}</span>
                    </div>
                    <span className="text-gray-500">({vendor.reviews} reviews)</span>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    View Profile
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
