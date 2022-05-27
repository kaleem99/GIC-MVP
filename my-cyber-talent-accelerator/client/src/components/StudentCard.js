export default function StudentCard({ name, description, skills, experience, i }) {
  return (
    <div className="card tc">
      <img className="w-75" src="https://media.istockphoto.com/vectors/profile-icon-man-icon-with-circle-shape-on-gray-background-vector-id1033334196?k=20&m=1033334196&s=170667a&w=0&h=z_ScYNeV7wCaID9R53k4NmufO9f1e14WRyziDOaY2mE="></img>
      <h2>{name}</h2>
      <p className="description">{description}</p>
      <p>{skills.join(", ")}</p>
      <h3>{experience}</h3>
      <button><a href={`/View-StudentProfile:${i}`}>View Profile</a></button>
    </div>
  );
}
