import bgImage from "../assets/One Piece.jpeg";

export default function PageWrapper({ children }) {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark / light overlay for readability */}
      <div className="min-h-screen bg-accent">
        {children}
      </div>
    </div>
  );
}
