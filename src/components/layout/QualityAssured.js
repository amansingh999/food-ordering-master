'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faRollingPin, faAward } from '@fortawesome/free-solid-svg-icons';

export default function QualityAssured() {
  return (
    <section className="bg-[url('/wooden-texture.jpg')] bg-cover bg-center py-12 px-4">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#5a3825] to-[#4d2c1a] rounded-2xl p-8 shadow-lg text-white">
        <h2 className="text-center text-3xl font-bold mb-6">Quality Assured</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {/* Finest Ingredients */}
          <div className="p-6">
            <FontAwesomeIcon icon={faSeedling} className="text-4xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Finest Ingredients</h3>
            <p className="text-sm">
              Made from the finest quality ingredients, to give you an authentic Italian taste, every single time.
            </p>
          </div>

          {/* Fresh Dough */}
          <div className="p-6 border-l border-r border-gray-600">
            <FontAwesomeIcon icon={faRollingPin} className="text-4xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fresh Dough</h3>
            <p className="text-sm">
              Our pizza dough is mixed on demand, so that pizza served to you is always hot and fresh.
            </p>
          </div>

          {/* Safety and Quality Standards */}
          <div className="p-6">
            <FontAwesomeIcon icon={faAward} className="text-4xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safety and Quality Standards</h3>
            <p className="text-sm">
              Our kitchens follow the highest safety and quality standards, which are fully compliant with FSSAI guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}