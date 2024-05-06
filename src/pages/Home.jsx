import Card from "../components/Card";
import data from "../json/movie.json";

const Home = () => {
  return (
    <section className="flex justify-center w-screen bg-black h-screen">
      <div className="flex flex-col gap-10 justify-center">
        {data.map((e) => (
          <Card
            key={e.index}
            movieImg={e.movie_image}
            name={e.name}
            release={e.year_of_release}
            director={e.director}
            duration={e.duration_minutes}
            category={e.category_name}
            about={e.about_movie}
            image2={e.another_image}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
