import React from "react";

const AboutSection = () => {
  const features = [
    {
      icon: "🚚",
      title: "Free & Fast Delivery",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: "💬",
      title: "24/7 Customer Service",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: "✔️",
      title: "Money Back Guarantee",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="about-section">
      <h2>About Our Store</h2>
      <div className="about-content">
        {features.map((feature, index) => (
          <div key={index} className="about-card">
            <h3>
              {feature.icon} {feature.title}
            </h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
