import "../styles/ExperienceCard.css";

function ExperienceCard({ title, role, date, description, icon, iconImg }) {
  return (
    <div className="experience-card">
      <div className="experience-icon">
        {iconImg ? (
          <img src={iconImg} alt={title} className="experience-icon-img" />
        ) : (
          icon
        )}
      </div>
      <div className="experience-content">
        <h3 className="experience-title">{title}</h3>
        <p className="experience-role">{role} • {date}</p>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
