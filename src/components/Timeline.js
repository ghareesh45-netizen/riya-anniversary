import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaHeart, FaStar, FaPlane, FaHome, FaGift } from 'react-icons/fa';

const Timeline = () => {
  // Timeline events data
  const timelineEvents = [
    {
      id: 1,
      date: "January 15, 2020",
      title: "First Meeting",
      description: "The day our paths crossed and our story began.",
      icon: <FaHeart />,
      color: "#ff6b6b"
    },
    {
      id: 2,
      date: "February 14, 2020",
      title: "First Date",
      description: "Our first official date at that cozy restaurant downtown.",
      icon: <FaStar />,
      color: "#ffd93d"
    },
    {
      id: 3,
      date: "May 20, 2020",
      title: "Became Official",
      description: "The day we decided to make it official and start our journey together.",
      icon: <FaHeart />,
      color: "#ff6b6b"
    },
    {
      id: 4,
      date: "August 10, 2020",
      title: "First Trip Together",
      description: "Our first weekend getaway to the mountains.",
      icon: <FaPlane />,
      color: "#4dabf7"
    },
    {
      id: 5,
      date: "December 25, 2020",
      title: "First Holiday Together",
      description: "Celebrating our first Christmas as a couple.",
      icon: <FaGift />,
      color: "#20c997"
    },
    {
      id: 6,
      date: "May 20, 2021",
      title: "One Year Anniversary",
      description: "Celebrating one amazing year of love and adventures.",
      icon: <FaHeart />,
      color: "#ff6b6b"
    },
    {
      id: 7,
      date: "September 5, 2021",
      title: "Moved In Together",
      description: "Starting our life under one roof and making a home together.",
      icon: <FaHome />,
      color: "#9775fa"
    },
    {
      id: 8,
      date: "May 20, 2022",
      title: "Two Year Anniversary",
      description: "Two years of growing together and building our love.",
      icon: <FaHeart />,
      color: "#ff6b6b"
    },
    {
      id: 9,
      date: "May 20, 2023",
      title: "Three Year Anniversary",
      description: "Three wonderful years with the love of my life.",
      icon: <FaHeart />,
      color: "#ff6b6b"
    },
    {
      id: 10,
      date: "Today",
      title: "Many More to Come",
      description: "Looking forward to a lifetime of love and happiness with you.",
      icon: <FaStar />,
      color: "#ffd93d"
    }
  ];

  return (
    <div className="timeline-page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="page-title"
      >
        Our Journey Together
      </motion.h1>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {timelineEvents.map((event, index) => {
          // Create a new ref for each timeline item
          const [ref, inView] = useInView({
            threshold: 0.2,
            triggerOnce: true
          });
          
          return (
            <motion.div
              key={event.id}
              ref={ref}
              className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="timeline-date">
                <FaCalendarAlt className="calendar-icon" />
                {event.date}
              </div>
              
              <div className="timeline-content">
                <div 
                  className="timeline-icon" 
                  style={{ backgroundColor: event.color }}
                >
                  {event.icon}
                </div>
                
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                
                <div className="timeline-image-container">
                  <img 
                    src={`${process.env.PUBLIC_URL}/placeholder_${2020 + Math.min(Math.floor(index/3), 3)}.jpg`} 
                    alt={`${event.title} event`} 
                    className="timeline-image" 
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;