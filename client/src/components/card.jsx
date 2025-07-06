function Card({ title, body }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow text-left">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{body}</p>
    </div>
  );
}

export default Card;
