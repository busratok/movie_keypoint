import { Card } from "react-bootstrap";

const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
const defaultImg =
  "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2056&q=80";

const InfoCard = ({ title, name, poster_path, overview, id }) => {
  return (
    <Card className="card bg-dark rounded border border-0 h-100">
      <Card.Img
        variant="top"
        src={poster_path ? baseImageUrl + poster_path : defaultImg}
      />
      <Card.Body>
        <Card.Title className="text-light">{title || name}</Card.Title>
        <Card.Text className="card-over text-dark">{overview}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
