import { Search, UserPlus } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1768321901750-f7b96d774456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY29uc3RydWN0aW9uJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MDcyMjI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Home construction and renovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Find Trusted Professionals for<br />Your Home & Office Work
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Connect with verified vendors for painting, POP work, window making, plastering, 
          renovations, and more. Quality work, reliable service, transparent pricing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg">
            <Search className="w-5 h-5" />
            Find Vendors
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg">
            <UserPlus className="w-5 h-5" />
            Become a Vendor
          </button>
        </div>
      </div>
    </section>
  );
}
