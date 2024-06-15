import PropTypes from "prop-types";
import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";
import Masonry from "react-masonry-css";
export const GifGrid = ({ category, service }) => {
  const { images, isLoading } = useFetchGifs(category, service);
  return (
    <>
      {isLoading && <div className="loader"></div>}
      <div className="card-grid mb-8">
        <Masonry
          breakpointCols={{
            default: 3,
            768: 2,
          }}
          className="my-masonry-grid"
        >
          {images.map((image) => {
            return <GifItem key={image.id} {...image} />;
          })}
        </Masonry>
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};
