import { useRef } from "react";
import Slider from "react-slick";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  clientName: string;
  clientAvatar: string;
  vendorName: string;
  review: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    clientAvatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=0891b2&color=fff&size=200",
    vendorName: "John Builders",
    review: "Excellent painting work! Very professional and completed the project on time. The quality exceeded my expectations. Highly recommend!",
    rating: 5,
    date: "Jan 2026",
  },
  {
    id: 2,
    clientName: "Michael Chen",
    clientAvatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=10b981&color=fff&size=200",
    vendorName: "Elite Interiors",
    review: "Amazing false ceiling work. The design was exactly what I wanted. Very clean work and reasonable pricing. Will definitely hire again!",
    rating: 5,
    date: "Jan 2026",
  },
  {
    id: 3,
    clientName: "Priya Sharma",
    clientAvatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=f97316&color=fff&size=200",
    vendorName: "Modern Windows Co.",
    review: "Great experience with window installation. The team was skilled and polite. Quality materials used and finished in just 3 days.",
    rating: 4.5,
    date: "Dec 2025",
  },
  {
    id: 4,
    clientName: "David Wilson",
    clientAvatar: "https://ui-avatars.com/api/?name=David+Wilson&background=8b5cf6&color=fff&size=200",
    vendorName: "Royal Renovations",
    review: "Complete home renovation done perfectly! From planning to execution, everything was smooth. Very satisfied with the outcome.",
    rating: 5,
    date: "Dec 2025",
  },
  {
    id: 5,
    clientName: "Anita Patel",
    clientAvatar: "https://ui-avatars.com/api/?name=Anita+Patel&background=ec4899&color=fff&size=200",
    vendorName: "Perfect Plaster",
    review: "The plastering work was done with great attention to detail. Walls are perfectly smooth. Professional service at its best!",
    rating: 4.5,
    date: "Nov 2025",
  },
];

export function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Client Testimonials</h2>
            <p className="text-gray-600">What our clients say about our vendors</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-2 rounded-full bg-white hover:bg-gray-50 shadow-md transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-2 rounded-full bg-white hover:bg-gray-50 shadow-md transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-gray-700 mb-6 line-clamp-4">{testimonial.review}</p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(testimonial.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.clientAvatar}
                    alt={testimonial.clientName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{testimonial.clientName}</p>
                    <p className="text-sm text-gray-600">
                      Vendor: {testimonial.vendorName}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
