import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa';

const LoveNotes = () => {
  // Love notes data
  const loveNotesData = [
    {
      id: 1,
      title: "My Dearest Riya",
      content: "Every day with you is a gift. Your smile lights up my world in ways I never thought possible. I'm so grateful for your love.",
      date: "January 15, 2023",
      color: "#ffb8b8"
    },
    {
      id: 2,
      title: "To My Best Friend",
      content: "You're not just my partner, but my best friend. I love how we can laugh together, cry together, and just be ourselves around each other.",
      date: "February 14, 2023",
      color: "#ffd8a8"
    },
    {
      id: 3,
      title: "Three Amazing Years",
      content: "Three years of love, laughter, and growth. I've loved every moment of our journey together and can't wait for all the adventures ahead.",
      date: "May 20, 2023",
      color: "#d8f5a2"
    },
    {
      id: 4,
      title: "What I Love About You",
      content: "Your kindness, your strength, your humor, your intelligence - everything about you amazes me. I fall more in love with you every day.",
      date: "July 7, 2023",
      color: "#b2f2bb"
    },
    {
      id: 5,
      title: "Our Future Together",
      content: "When I think about my future, all I see is you. Building a life together, creating memories, and growing old side by side.",
      date: "September 12, 2023",
      color: "#a5d8ff"
    },
    {
      id: 6,
      title: "Thank You",
      content: "Thank you for being you. For loving me, supporting me, and making every day brighter just by being in it.",
      date: "November 30, 2023",
      color: "#d0bfff"
    },
  ];
  
  // State for opened note
  const [openedNote, setOpenedNote] = useState(null);
  
  // Open a note
  const openNote = (note) => {
    setOpenedNote(note);
  };
  
  // Close the opened note
  const closeNote = () => {
    setOpenedNote(null);
  };

  return (
    <div className="love-notes-page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="page-title"
      >
        Love Notes
      </motion.h1>
      
      <div className="notes-intro">
        <p>Click on an envelope to read a special message from my heart to yours.</p>
      </div>
      
      <div className="notes-grid">
        {loveNotesData.map((note) => (
          <motion.div
            key={note.id}
            className="note-envelope"
            style={{ backgroundColor: note.color }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 5, 
              boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openNote(note)}
          >
            <div className="envelope-icon">
              <FaEnvelope />
            </div>
            <div className="envelope-date">{note.date}</div>
            <div className="envelope-title">{note.title}</div>
          </motion.div>
        ))}
      </div>
      
      {/* Add a section for adding new notes */}
      <div className="add-note-section">
        <h2>Add More Love Notes</h2>
        <p>This section will allow you to add more love notes over time. Each note can be a special memory, a reason why you love Riya, or a promise for the future.</p>
        <div className="note-placeholders">
          <div className="note-placeholder">New Note 1</div>
          <div className="note-placeholder">New Note 2</div>
          <div className="note-placeholder">New Note 3</div>
        </div>
      </div>
      
      {/* Opened note modal */}
      <AnimatePresence>
        {openedNote && (
          <motion.div
            className="note-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeNote}
          >
            <motion.div
              className="note-modal"
              style={{ backgroundColor: openedNote.color }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="note-header">
                <FaEnvelopeOpen className="envelope-open-icon" />
                <h3>{openedNote.title}</h3>
                <div className="note-date">{openedNote.date}</div>
              </div>
              
              <div className="note-content">
                <p>{openedNote.content}</p>
              </div>
              
              <div className="note-footer">
                <FaHeart className="heart-icon" />
              </div>
              
              <button className="close-note" onClick={closeNote}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveNotes;