import Certifications from "../constants/certifications";

export default function DisplayTrendingCertifications() {
  return (
    <div className="w-100 h-100">
      <div class="trending-container">
        {Certifications.map((data, i) => {
          return (
            <div className="trending-item" key={i}>
              <img className="h4" src={data.imageUrl}></img>
              <h4>{data.name}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}
