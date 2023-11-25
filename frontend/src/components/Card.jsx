export default function Card({ imageURL, teaType }) {
  return (
    <div className="card">
      <img src={imageURL} width="100px" alt={teaType} />

      <footer>{teaType}</footer>
    </div>
  );
}
