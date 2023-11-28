
export default function Card({ imageURL, teaType }) {
  return (
    <div className="card">
      <img src={imageURL} alt={teaType} />

      <footer>{teaType}</footer>
    </div>
  );
}
