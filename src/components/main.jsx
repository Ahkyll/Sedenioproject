import React from 'react';
import { Link } from 'react-router-dom';
import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.webp";
import movie4 from "../assets/movie4.jpg";
import movie5 from "../assets/movie5.jpg";
import movie6 from "../assets/movie6.jpg";

const Main = () => {
  const latestMovies = [
    { id: 1, title: "Movie 1", image: movie1, description: "This is the first latest movie." },
    { id: 2, title: "Movie 2", image: movie2, description: "This is the second latest movie." },
  ];

  const movieSelection = [
    { id: 3, title: "Movie 3", image: movie3 },
    { id: 4, title: "Movie 4", image: movie4 },
    { id: 5, title: "Movie 5", image: movie5 },
    { id: 6, title: "Movie 6", image: movie6 },
  ];

  return (
    <main className="p-4">
      {/* Latest Movies Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Latest Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {latestMovies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="bg-gray-800 text-white p-4 rounded shadow-lg cursor-pointer hover:bg-gray-700 transition"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-52 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-4">{movie.title}</h3>
              <p className="text-sm mt-2">{movie.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Movie Selection Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Movie Selection</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {movieSelection.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="bg-gray-200 p-4 rounded shadow-lg text-center cursor-pointer hover:bg-gray-300 transition"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{movie.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
