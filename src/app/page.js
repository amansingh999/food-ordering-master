import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeaders from '@/components/layout/SectionHeaders';
import QualityAssured from '@/components/layout/QualityAssured';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faCrown } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className='text-center my-16' id='about'>
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className='max-w-3xl mx-auto mt-8 px-4 text-gray-700 space-y-12'>
          {/* Our Story Section */}
          <div className='text-center'>
            {/* <FontAwesomeIcon
              icon={faPizzaSlice}
              className='text-red-500 text-5xl'
            /> */}
            <h2 className='text-2xl font-bold text-gray-900 mt-2 flex justify-center items-center gap-2'>
              Our Story <span className='text-yellow-500'>🍕👑</span>
            </h2>
            <p className='mt-2 text-sm md:text-base'>
              At <strong>Pizza Singh</strong>, we don’t just make pizzas—we
              craft experiences that bring people together. Our journey began
              with a simple dream: to create the perfect fusion of authentic
              Italian flavors with the bold and spicy Indian swag that we all
              love. We believe pizza isn’t just food; it’s an emotion—whether
              you're celebrating, chilling with friends, or simply indulging in
              a well-deserved treat.
            </p>
            <h3 className='mt-4 text-lg font-semibold text-gray-900'>
              What makes us different?
            </h3>
            <p className='mt-2 text-sm md:text-base'>
              We take pride in handmade, fresh dough, premium ingredients, and
              mouthwatering desi toppings that pack a punch of flavor. From
              classic Margheritas to loaded Butter Chicken Pizzas, every slice
              is a tribute to the royalty of taste—because at
              <strong> Pizza Singh</strong>, we serve like a King!{' '}
              <span className='text-yellow-500'>👑</span>
            </p>
            <p className='mt-4 text-sm md:text-base font-semibold'>
              So, grab a slice, bring your squad, and let’s swag it up with
              Pizza Singh!
            </p>
          </div>

          {/* About Us Section */}
          <div className='flex items-start gap-4'>
            {/* <FontAwesomeIcon
              icon={faCrown}
              className='text-yellow-500 text-5xl mt-1'
            /> */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900'>About Us</h2>
              <p className='mt-2 text-sm md:text-base'>
                Welcome to <strong>Pizza Singh</strong>, where taste meets swag!
              </p>
              <p className='mt-2 text-sm md:text-base'>
                We are a passionate team of pizza lovers, food enthusiasts, and
                flavor innovators dedicated to serving the most delicious, bold,
                and unforgettable pizzas. Whether you're a fan of cheesy
                classics, crave a touch of Indian fusion, or love to experiment
                with new flavors, we’ve got something for every pizza lover.
              </p>
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                Our commitment?
              </h3>
              <ul className='mt-2 text-sm md:text-base space-y-2 pl-6'>
                <li>✔ Freshly made dough, every single day</li>
                <li>✔ Handpicked premium ingredients</li>
                <li>✔ A perfect blend of Italian tradition & Indian zest</li>
                <li>✔ Fast, fresh, and fire-grilled to perfection</li>
              </ul>
              <p className='mt-4 text-sm md:text-base font-semibold'>
                So, next time you're hungry for something legendary, just
                remember:
                <strong> Pizza Singh – Swag me, King! </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <QualityAssured /> */}
      <section className='text-center my-8' id='contact'>
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={'Contact us'}
        />
        <div className='mt-8'>
          <a
            className='text-4xl underline text-gray-500'
            href='tel:+46738123123'
          >
            +91 1234567890
          </a>
        </div>
      </section>
    </>
  );
}
