import "../styles/EducationCard.css";

function EducationCard({ items }) {
  return (
    <div className="education-card">
      <h2 className="education-main-title">Education</h2>
      <div className="education-timeline">
        {items.map((item, index) => (
          <div className="education-item" key={index}>
            <div className="education-icon">
              <img
                src={item.iconImg}
                alt={item.title}
                className="education-icon-img"
              />
            </div>
            <div className="education-content">
              <h3 className="education-title">{item.title}</h3>
              <p className="education-school">
                {item.school}{" "}
                <span className="education-date">• {item.date}</span>
              </p>
              <p className="education-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationCard;
