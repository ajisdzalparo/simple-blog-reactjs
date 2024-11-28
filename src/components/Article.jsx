import PropTypes from "prop-types";
import { GlobalContext } from "../context";
import { useContext } from "react";

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Tag: {props.tags.join(", ")} - Date : {props.date}
      </small>
      <div>
        <small>Ditulis oleh {user.username}</small>
      </div>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  isNew: PropTypes.bool.isRequired,
};

export default Article;
