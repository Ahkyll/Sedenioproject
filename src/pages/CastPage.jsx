import Header from "../components/header";
import Footer from "../components/footer";
import CastImage1 from '../assets/sam.jpg'; 
import CastImage2 from '../assets/adam.jpg'; 
import CastImage3 from '../assets/andie.jpg'; 

function CastPage() {
  return (
    <div className="bg-black ">
      <Header />
      
      <div className=" text-center pt-32 pb-10">
        <h1 className="text-4xl font-bold text-white">Cast of "Ready or Not"</h1>
        <p className="text-lg text-white mt-4">Meet the talented cast behind the thrilling horror-comedy!</p>
      </div>

      <div className="flex flex-col items-center pb-20 gap-12 px-6">

        <div className="flex items-center justify-center gap-8 bg-gray-900 rounded-lg p-6">
          <img
            src={CastImage1}
            alt="Cast Member 1"
            className="w-40 h-40 object-cover rounded-full border-4 border-white"
          />
          <div className="text-white max-w-3xl">
            <h2 className="text-2xl font-bold mb-2">Samara Weaving</h2>
            <p className="text-lg leading-relaxed">
              Samara Weaving plays Grace, the film's central character. A newlywed caught in a deadly game of hide-and-seek, she brings a mix of vulnerability and strength to her role. Weaving's portrayal of Grace has been praised for its emotional depth and her ability to balance dark humor with intense horror moments.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 bg-gray-900 rounded-lg p-6">
          <img
            src={CastImage2}
            alt="Cast Member 2"
            className="w-40 h-40 object-cover rounded-full border-4 border-white"
          />
          <div className="text-white max-w-3xl">
            <h2 className="text-2xl font-bold mb-2">Adam Brody</h2>
            <p className="text-lg leading-relaxed">
              Adam Brody plays Daniel, a member of the Le Domas family who is reluctantly involved in the deadly game. Known for his role in "The O.C.," Brody adds a unique mix of charm and discomfort to his role, making Daniel one of the most complex and sympathetic characters in the film.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 bg-gray-900 rounded-lg p-6">
          <img
            src={CastImage3}
            alt="Cast Member 3"
            className="w-40 h-40 object-cover rounded-full border-4 border-white"
          />
          <div className="text-white max-w-3xl">
            <h2 className="text-2xl font-bold mb-2">Andie MacDowell</h2>
            <p className="text-lg leading-relaxed">
              Andie MacDowell plays Becky, the matriarch of the Le Domas family. With a mix of elegance and cruelty, MacDowell delivers a memorable performance as the head of a family that is both wealthy and deeply dysfunctional. Her role is integral to the film's dark comedic tone and tense atmosphere.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default CastPage;
