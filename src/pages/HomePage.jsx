import Header from "../components/header";
import Footer from "../components/footer";
import Movie1 from '../assets/movie1.jpg';

function HomePage() {
  return (
    <div className="bg-black">
      <Header />

      {/* Image and Description Section */}
      <div className="relative pt-24 py-10 mt-10 flex justify-center">
        {/* Image */}
        <img
          src={Movie1}
          alt="Ready or Not Movie Poster"
          className="rounded-sm"
        />
        
        {/* Description Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-70 text-white p-6">
          <div className="text-center max-w-lg mx-6">
            <h1 className="text-4xl font-bold mb-4">Ready or Not - Movie Description</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              "Ready or Not" is a 2019 horror-comedy film that centers around Grace, a newlywed who is thrust into a deadly game of hide-and-seek with her wealthy in-laws. On the night of her wedding, Grace is forced to play a game that turns sinister as her new family reveals their dark tradition. As she fights for her survival, Grace must outwit her ruthless in-laws who are bent on killing her. A dark and twisted satire of the rich, "Ready or Not" blends tension, humor, and horror to keep audiences on the edge of their seats.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
