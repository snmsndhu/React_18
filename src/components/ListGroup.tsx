function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
