import { useState, useEffect, useRef } from 'react';
import './Certificate.css';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const carouselRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollSpeed = 5;
  const touchStartX = useRef(0);
  const touchScrollStartX = useRef(0);

  const certifications = [
    {
      id: 1,
      title: "Soft Skill Development",
      platform: "NPTEL",
      category: "Soft Skills",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 2,
      title: "The Joy of Computing using Python",
      platform: "NPTEL",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },

    // Great Learning Certifications
    {
      id: 3,
      title: "Frontend Development - HTML",
      platform: "Great Learning",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 4,
      title: "Frontend Development - CSS",
      platform: "Great Learning",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 5,
      title: "Artificial Intelligence",
      platform: "Infosys SpringBoard",
      category: "Technical",
      pdfLink: "https://www.dropbox.com/scl/fi/xivy3o0gqo62vzi98dug2/Artificial-Intelligence.pdf?rlkey=cd881thd9nomakkx7blnqfbmb&st=wcq3qcm5&dl=0"
    },
    {
      id: 6,
      title: "Email Writing Skills",
      platform: "Infosys SpringBoard",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 7,
      title: "Generative AI Unleashing",
      platform: "Infosys SpringBoard",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 8,
      title: "High Impact Presentations",
      platform: "Infosys SpringBoard",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 9,
      title: "Introduction to Artificial Intelligence",
      platform: "Infosys SpringBoard",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 10,
      title: "Introduction to Data Science",
      platform: "Infosys SpringBoard",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 11,
      title: "Introduction to Deep Learning",
      platform: "Infosys SpringBoard",
      category: "Technical" ,
      pdfLink: "URL_TO_PDF_3"  
    },
    {
      id: 12,
      title: "Introduction to Natural Language Processing",
      platform: "Infosys SpringBoard",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 13,
      title: "Prompt Engineering",
      platform: "Infosys SpringBoard",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 14,
      title: "Time Management",
      platform: "Infosys",
      category: "Soft Skills",
      pdfLink: "URL_TO_PDF_3"
    },

    // NPTEL Certifications
    

    // Udemy Certifications
    {
      id: 15,
      title: "ChatBot Creation with Generative AI: A Practical Guide",
      platform: "Udemy",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 16,
      title: "Image Processing with Python PIL",
      platform: "Udemy",
      category: "Technical",
      pdfLink: "URL_TO_PDF_3"
    },
    {
      id: 17,
      title: "Python for All Data Roles in 2025",
      platform: "Udemy",
      category: "technical",
      pdfLink: "URL_TO_PDF_3"
    },

  ];

  const filteredCerts = activeTab === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category.toLowerCase() === activeTab.toLowerCase());

  const loopedCerts = [...filteredCerts, ...filteredCerts];

  useEffect(() => {
    if (!carouselRef.current) return;
    
    let animationId;
    let lastTimestamp = 0;
    const carousel = carouselRef.current;
    
    const autoScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      if (isAutoScrolling) {
        const scrollAmount = scrollSpeed * (delta / 16);
        carousel.scrollLeft += scrollAmount;
        
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft -= carousel.scrollWidth / 2;
        }
      }
      
      animationId = requestAnimationFrame(autoScroll);
    };
    
    animationId = requestAnimationFrame(autoScroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [filteredCerts, isAutoScrolling]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchScrollStartX.current = carouselRef.current.scrollLeft;
    setIsAutoScrolling(false);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    const touchX = e.touches[0].clientX;
    const diff = touchStartX.current - touchX;
    carouselRef.current.scrollLeft = touchScrollStartX.current + diff;
  };

  const handleTouchEnd = () => {
    touchStartX.current = 0;
    setTimeout(() => setIsAutoScrolling(true), 2000);
  };

  const handleClose = () => setSelectedCert(null);

  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>

      

      <div 
        className="certifications-carousel"
        ref={carouselRef}
        onMouseEnter={() => setIsAutoScrolling(false)}
        onMouseLeave={() => setIsAutoScrolling(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-track">
          {loopedCerts.map((cert, index) => (
            <div key={`${cert.id}-${index}`} className="certificate-card">
              <div className="card-header">
                <div className="platform-badge">{cert.platform}</div>
              </div>
              <div className="card-content">
                <h3>{cert.title}</h3>
                <button 
                  onClick={() => setSelectedCert(cert)}
                  className="view-button"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>×</button>
            <div className="modal-header">
              <span className="platform-tag">{selectedCert.platform}</span>
              <h3>{selectedCert.title}</h3>
            </div>
            <div className="modal-body">
              <a 
                href={selectedCert.pdfLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="pdf-link"
              >
                Open Certificate PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;