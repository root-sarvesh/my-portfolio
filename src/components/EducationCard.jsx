import "../styles/EducationCard.css";

function EducationCard({ title, school, date, description, iconImg }) {
  return (
    <div className="education-card">
      <div className="education-icon">
        <img src={iconImg} alt={title} className="education-icon-img" />
      </div>
      <div className="education-content">
        <h3 className="education-title">{title}</h3>
        <p className="education-school">
          {school} <span className="education-date">• {date}</span>
        </p>
        <p className="education-description">{description}</p>
      </div>
    </div>
  );
}

export default EducationCard;
