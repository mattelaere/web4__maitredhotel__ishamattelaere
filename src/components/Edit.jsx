const Edit = ({ setCount }) => {
  return (
    <article>
      <h2>Update the count</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Add 1 to the count
      </button>
    </article>
  );
};

export default Edit;
