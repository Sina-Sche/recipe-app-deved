export default function Recipe({ title, calories, image }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="description" />
    </div>
  );
}
// add Prop-Types here!!!
