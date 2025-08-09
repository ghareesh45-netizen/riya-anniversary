import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaEnvelope, FaCalendarAlt, FaImage, FaVideo, FaMusic } from 'react-icons/fa';
import FloatingHearts from '../components/FloatingHearts';

import img1 from '../assets/images/love-notes/placeholder_note1.jpeg';
import img2 from '../assets/images/love-notes/placeholder_note2.jpg';
import img3 from '../assets/images/love-notes/placeholder_note3.jpg';
import img4 from '../assets/images/love-notes/placeholder_note4.jpg';
import img5 from '../assets/images/love-notes/placeholder_note5.jpg';
import img6 from '../assets/images/love-notes/placeholder_note6.jpg';
import img7 from '../assets/images/love-notes/placeholder_note7.jpg';
import img8 from '../assets/images/love-notes/placeholder_note8.jpg';





const LoveNotesPage = () => {
  const [activeNote, setActiveNote] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showFloatingHearts, setShowFloatingHearts] = useState(false);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Notes' },
    { id: 'romantic', name: 'Romantic' },
    { id: 'memories', name: 'Memories' },
    { id: 'future', name: 'Future Plans' },
    { id: 'appreciation', name: 'Appreciation' }
  ];

  const loveNotes = [
    {
      id: 1,
      title: 'When I First Saw You',
      content: 'I still remember the first time I saw you. Never knew you would steal my Heart. Thanks a lot Ponnaa..',
      image: img1,
      color: '#ffcccb',
      category: 'memories',
      date: 'February , 2022',
      mediaType: 'image'
    },
    {
      id: 2,
      title: 'My Favorite Smile',
      content: "Your smile lights up my world. It's the most beautiful thing I've ever seen, and I'm so lucky to see those dimples every day.",
      image: img2,
      color: '#c1e1c1',
      category: 'appreciation',
      date: 'February 14, 2023',
      mediaType: 'image'
    },
    {
      id: 3,
      title: 'Our Late Night Talks',
      content: 'I really Loves our late night conversations. Those moments when we share our dreams, fears, and silly thoughts are precious to me.',
      image: img3,
      color: '#c9c9ff',
      category: 'memories',
      date: 'March 22, 2023',
      mediaType: 'audio'
    },
    {
      id: 4,
      title: 'Thank You',
      content: 'Thank you for being you. For your kindness, your patience, your love. You make me want to be a better person.',
      image: img4,
      color: '#ffd8b1',
      category: 'appreciation',
      date: 'April 10, 2023',
      mediaType: 'image'
    },
    {
      id: 5,
      title: 'My Safe Place',
      content: 'In your arms, I ve found my safe place. A place where I can be completely myself, without fear or judgment.',
      image: img5,
      color: '#d8bfd8',
      category: 'romantic',
      date: 'May 5, 2023',
      mediaType: 'video'
    },
    {
      id: 6,
      title: 'Growing Together',
      content: 'I love how we ve grown together. We re not the same people we were when we met, and that s beautiful.',
      image: img6,
      color: '#ffffcc',
      category: 'future',
      date: 'June 18, 2023',
      mediaType: 'image'
    },
    {
      id: 7,
      title: 'My Future',
      content: 'When I think about my future, all I see is you, Hiya, Hiyaan. Every dream, every plan, every hope includes you by my side.',
      image: img7,
      color: '#e0ffff',
      category: 'future',
      date: 'July 30, 2023',
      mediaType: 'image'
    },
    {
      id: 8,
      title: 'Forever',
      content: 'Forever doesnt seem long enough to spend with you. But Ill take every day I can get.',
      image: img8,
      color: '#fff0f5',
      category: 'romantic',
      date: 'August 12, 2023',
      mediaType: 'image'
    }
  ];

  const filteredNotes = filter === 'all'
    ? loveNotes
    : loveNotes.filter(note => note.category === filter);

  const openNote = (note) => {
    setActiveNote(note);
    setShowFloatingHearts(true);
    setTimeout(() => {
      setShowFloatingHearts(false);
    }, 3000);
  };

  const closeNote = () => {
    setActiveNote(null);
  };

  const getMediaIcon = (type) => {
    switch (type) {
      case 'image': return <FaImage />;
      case 'video': return <FaVideo />;
      case 'audio': return <FaMusic />;
      default: return <FaImage />;
    }
  };

  // In the full note view section, modify the code to always show the image
  return (
    <div className="love-notes-page">
      {showFloatingHearts && <FloatingHearts />}
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        Love Notes For You
      </motion.h1>
      <motion.div className="notes-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
        <p>A collection of my thoughts, feelings, and memories about us. Click on any note to read the full message.</p>
      </motion.div>
      <motion.div className="category-filters" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`category-button ${filter === category.id ? 'active' : ''}`}
            onClick={() => setFilter(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>
      <motion.div className="notes-grid" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        {filteredNotes.map((note) => (
          <motion.div
            key={note.id}
            className="note-card"
            style={{ backgroundColor: note.color }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openNote(note)}
          >
            <div className="note-header">
              <h3>{note.title}</h3>
              <div className="note-date">
                <FaCalendarAlt /> {note.date}
              </div>
            </div>
            <p>{note.content.substring(0, 50)}...</p>
            <div className="note-footer">
              <div className="note-category">{note.category}</div>
              <div className="note-media-type">{getMediaIcon(note.mediaType)}</div>
            </div>
            <motion.div
              className="note-icon"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: Math.random() * 5 + 3 }}
            >
              <FaHeart />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Remove the add-notes-section */}
      
      <AnimatePresence>
        {activeNote && (
          <motion.div className="full-note-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeNote}>
            <motion.div
              className="full-note"
              style={{ backgroundColor: activeNote.color }}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="full-note-header">
                <h2>{activeNote.title}</h2>
                <div className="note-date-full"><FaCalendarAlt /> {activeNote.date}</div>
              </div>
              <div className="note-image-container">
                {/* Always show the image regardless of mediaType */}
                <img src={activeNote.image} alt={activeNote.title} className="note-image" style={{ padding: '10px', maxWidth: '100%', height: 'auto' }} />
                <div className="image-caption"></div>
                
                {/* Show media type icon as an overlay */}
                <div className="media-type-indicator" style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.5)', padding: '5px', borderRadius: '50%' }}>
                  {getMediaIcon(activeNote.mediaType)}
                </div>
              </div>
              <div className="note-content-full"><p>{activeNote.content}</p></div>
              <div className="note-category-full">Category: {activeNote.category}</div>
              <button className="close-button" onClick={closeNote}>×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="notes-message">
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default LoveNotesPage;
