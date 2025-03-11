import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { GiTie, GiScissors, GiPaintBrush, GiDiamondTrophy, GiStarShuriken, GiTeamIdea } from "react-icons/gi";
import ownerImage from "../assets/user.webp";//shop/src/assets/mallanna.png
import owner from "../assets/mallanna.png";

const teamMembers = [
  {
    name: "Malli Karjuna",
    role: "Owner",
    image: owner,
    icon: <GiTie />,
    description: "A visionary leader with over 15 years of experience in salon management and styling.",
  },
  {
    name: "Emily Smith",
    role: "Senior Hair Stylist",
    image: ownerImage,
    icon: <GiScissors />,
    description: "Expert in modern haircuts, styling, and color transformations.",
  },
  {
    name: "Michael Brown",
    role: "Creative Designer",
    image: ownerImage,
    icon: <GiPaintBrush />,
    description: "Specialist in artistic hair coloring and advanced grooming techniques.",
  },
];

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen font-['Poppins'] overflow-hidden">
      {/* Navbar */}
      <Navbar />
      <div className="pt-[100px]">

        {/* Hero Section with Parallax */}
        <section className="relative text-center py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-[#FFD700] mb-8 uppercase tracking-wider glow-effect"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Mallanna Salon
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Welcome to <span className="text-[#FFD700] font-bold">Mallanna Salon</span>, where luxury meets artistry. Our expert stylists bring cutting-edge techniques and premium care to redefine beauty.
          </motion.p>
        </section>

        {/* Floating Cards - Our Values */}
        <section className="py-16 px-6 relative">
          <h2 className="text-4xl text-center font-bold text-[#FFD700] mb-10 tracking-wider glow-effect">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { title: "Excellence", icon: <GiDiamondTrophy />, text: "Delivering top-tier styling with unmatched precision and quality." },
              { title: "Innovation", icon: <GiStarShuriken />, text: "Always evolving with the latest hair and beauty trends." },
              { title: "Customer Satisfaction", icon: <GiTeamIdea />, text: "Your happiness is our priority—personalized services for everyone." }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl text-center flex flex-col items-center border border-[#FFD700]/50 transform hover:scale-110 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="text-[#FFD700] text-5xl">{value.icon}</div>
                <h3 className="text-2xl font-semibold mt-4">{value.title}</h3>
                <p className="text-gray-300 mt-2">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Meet Our Team - Interactive Cards */}
        <section className="py-20 px-6 bg-gray-900 rounded-t-[50px]">
          <h2 className="text-4xl text-center font-bold text-[#FFD700] mb-14 tracking-wider glow-effect">Meet Our Experts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card p-8 rounded-xl text-center flex flex-col items-center border border-[#FFD700]/50 transform hover:scale-110 transition duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#FFD700] mb-5 shadow-lg"
                />
                <div className="text-[#FFD700] text-4xl">{member.icon}</div>
                <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-400 text-lg">{member.role}</p>
                <p className="text-gray-300 mt-4 text-md">{member.description}</p>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-lg font-semibold text-[#FFD700]">
                  Click to Learn More
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Client Testimonials - 3D Card Effect */}
        <section className="py-20 px-6 bg-black">
          <h2 className="text-4xl text-center font-bold text-[#FFD700] mb-14 tracking-wider glow-effect">What Our Clients Say</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { name: "Sophia L.", text: "The best salon experience ever! Their attention to detail is incredible." },
              { name: "James P.", text: "I've never had a better haircut in my life. Highly recommend!" },
              { name: "Anna M.", text: "The stylists are true professionals, and the ambiance is amazing." }
            ].map((review, index) => (
              <motion.div
                key={index}
                className="testimonial-card p-6 rounded-xl text-center border border-[#FFD700]/50 transform hover:scale-110 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-[#FFD700]">{review.name}</h3>
                <p className="text-gray-300 mt-2">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
