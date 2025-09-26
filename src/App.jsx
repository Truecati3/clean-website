import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiTiktok } from "react-icons/si";
import { FaInstagram, FaMusic } from "react-icons/fa";

export default function App() {
  useEffect(() => {
    document.title = "My Links";
  }, []);

  const [showMusic, setShowMusic] = useState(false);
  const handleMusicClick = () => setShowMusic(true);
  const handleClose = () => setShowMusic(false);

  const socials = [
    { name: "TikTok", icon: <SiTiktok size={50} />, url: "https://www.tiktok.com/@fast.r6_" },
    { name: "Instagram", icon: <FaInstagram size={50} />, url: "https://www.instagram.com/chase.92000/" },
    { name: "Music", icon: <FaMusic size={50} />, url: "#" },
  ];

  const musicFiles = [
    "OHCHA.mp3",
    "PREACHER MAN.mp3",
    "RED EYED BABY.mp3",
    "SELFISH.mp3",
    "SO NICE .mp3",
    "SO SOON IN MALIBU.mp3",
    "STAR TIME.mp3",
    "STREET LIGHTS ON.mp3",
    "VICTORY .mp3",
    "WE ARE BIRDS.mp3",
    "WHITE LINES.mp3",
    "ZERO (feat. Travis Scott).mp3"
  ]; // Add more as needed

  return (
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen w-full font-sans flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="w-[200%] h-[200%] bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl absolute top-[-50%] left-[-50%]"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-[150%] h-[150%] bg-gradient-to-bl from-blue-500/20 via-cyan-400/10 to-transparent rounded-full blur-3xl absolute bottom-[-40%] right-[-40%]"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-extrabold mb-16 text-center tracking-tight drop-shadow-lg"
      >
        My Links
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-12 z-10">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.name === "Music" ? "#" : social.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (social.name === "Music") {
                e.preventDefault();
                handleMusicClick();
              }
            }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.3, ease: "easeOut" }}
            whileHover={{
              scale: 1.12,
              y: -3,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="group flex flex-col items-center gap-3 p-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-700/80 shadow-2xl hover:shadow-pink-500/70 backdrop-blur-md transition-all duration-300 relative"
          >
            <div className="text-pink-500 group-hover:text-pink-400 transition-colors animate-pulse">
              {social.icon}
            </div>
            <span className="text-2xl font-semibold group-hover:text-pink-400 transition-colors animate-pulse">
              {social.name}
            </span>
            <div className="absolute inset-0 rounded-2xl bg-pink-500/20 opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-300"></div>
          </motion.a>
        ))}
      </div>

      {/* Music Modal */}
      {showMusic && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={handleClose} // click outside closes modal
        >
          <motion.div
            className="bg-gray-900 p-8 rounded-3xl flex flex-col items-center gap-4 w-80"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2 className="text-2xl font-bold mb-4">My Music</h2>

            {musicFiles.map((file, idx) => (
              <audio
                key={idx}
                controls
                className="w-full bg-gray-700 text-white rounded-md mb-2"
              >
                <source src={`/audio/${file}`} type="audio/mpeg" />
              </audio>
            ))}

            <button
              className="mt-4 bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded-lg"
              onClick={handleClose}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-20 text-sm text-gray-400 z-10"
      >
        © {new Date().getFullYear()} My Links — built with ❤️
      </motion.footer>
    </div>
  );
}
