import { Search, UserPlus, CheckCircle } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need Quality Work Done by Verified Professionals?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who found the perfect vendors for their projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Verified Vendors</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Transparent Pricing</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl">
              <Search className="w-5 h-5" />
              Explore Services
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl">
              <UserPlus className="w-5 h-5" />
              Join as Vendor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
