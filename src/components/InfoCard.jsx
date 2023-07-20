import { useContext } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const InfoCard = ({
  title,
  name,
  poster_path,
  overview,
  id,
  media_type,
  profile_path,
}) => {
  const navigate = useNavigate();
  const { defaultImg, baseImageUrl } = useContext(Context);

  return (
    // Create a Card component to display movie/TV show/person information
    <Card
      className="card bg-dark rounded border border-0 h-100"
      role="button"
      onClick={() => navigate(`/details/${media_type}/${id}`)}
    >
      {/* Card image (poster or profile picture) */}
      <Card.Img
        variant="top"
        src={
          poster_path
            ? baseImageUrl + poster_path
            : profile_path
            ? baseImageUrl + profile_path
            : defaultImg
        }
      />
      <Card.Body>
        <Card.Title className="text-light">{title || name}</Card.Title>
        <Card.Text className="card-over text-dark">{overview}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
