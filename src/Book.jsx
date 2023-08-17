const Book = (props) => {
  const { image, title, author } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default Book