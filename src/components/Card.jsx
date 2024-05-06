import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { FaShareAlt, FaHeart, FaCommentAlt } from "react-icons/fa";
const Card = ({
  key,
  movieImg,
  name,
  release,
  director,
  duration,
  category,
  about,
  image2,
}) => {
  return (
    <div className="w-screen flex max-w-screen-lg shadow-[0_10px_40px_rgba(123,_0,_0,_0.5)] rounded-lg hover:shadow-[0_15px_50px_rgba(123,_0,_0,_0.5)] hover-effect font-poppins">
      <div className="w-1/2 h-full flex flex-col gap-3 p-5 bg-primary rounded-l-lg">
        <div className="flex w-full bg-green-500 gap-2">
          <div className="w-1/4 h-full">
            <img
              src={movieImg}
              alt={name}
              title={name}
              className="w-full object-cover h-[150px]"
            />
          </div>
          <div className="flex flex-col w-3/4 p-3 gap-2">
            <h1 className="text-[30px]">{name}</h1>
            <div className="flex text-secondary">
              <p>{release},</p>
              <p>{director}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="border px-[5px] rounded-md">{duration} min</p>
              <p>
                {category.map((e) => (
                  <span key={e}>{e}, </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mb-10 mt-2">
          <p>{about}</p>
        </div>
        <div className="">
          <IconContext.Provider
            value={{ color: "#6E6E6D", className: "global-class-name" }}
          >
            <div className="flex gap-5">
              <FaShareAlt />
              <FaHeart />
              <FaCommentAlt />
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="w-1/2 flex">
        <div
          className="w-full h-full rounded-lg"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div className="bg-gradient-to-r from-primary h-full w-full z-10 rounded-e-lg rounde"></div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  key: PropTypes.string,
  movieImg: PropTypes.string,
  name: PropTypes.string,
  release: PropTypes.string,
  director: PropTypes.string,
  duration: PropTypes.number,
  category: PropTypes.string,
  about: PropTypes.string,
  image2: PropTypes.string,
};

export default Card;
