const teamMembers = [
  //put your image in the public folder
  { name: "Matthew Bilinski", image: "/matt.jpg" },
  { name: "Ivan Sanchez", image: "/ivan.jpg" },
  { name: "Matt", image: "/matto.jpg" },
];

export default function TeamMembers() {
  return (
    <div className="flex justify-center space-x-20 mt-10">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-slate-600 text-white rounded-lg shadow-lg p-6 w-60 text-center"
        >
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={member.image}
            alt={member.name}
          />
          <h2 className="mt-4 text-xl font-bold">{member.name}</h2>
        </div>
      ))}
    </div>
  );
}
