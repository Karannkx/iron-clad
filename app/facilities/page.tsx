import Image from "next/image";

export default function Facilities() {
  const amenities = [
    { icon: "ri-drop-line", title: "Sauna & Spa", desc: "Recover faster with infrared heat." },
    { icon: "ri-wifi-line", title: "Free WiFi", desc: "High speed internet everywhere." },
    { icon: "ri-cup-line", title: "Juice Bar", desc: "Protein shakes & healthy snacks." },
    { icon: "ri-shirt-line", title: "Locker Rooms", desc: "Private showers and secure lockers." },
    { icon: "ri-car-line", title: "Free Parking", desc: "Ample space for all members." },
    { icon: "ri-music-line", title: "Sound System", desc: "Pumping audio to keep you moving." },
  ];

  return (
    <div className="min-h-screen pt-32 px-4 max-w-7xl mx-auto pb-20">
      <h1 className="text-5xl md:text-7xl font-display font-bold mb-12 uppercase text-white">Our <span className="text-brand">Facilities</span></h1>
      
      {/* Feature Sections */}
      <div className="space-y-20 mb-20">
        <div className="flex flex-col md:flex-row gap-8 items-center group">
            <div className="flex-1 h-[300px] md:h-[400px] relative w-full rounded-3xl overflow-hidden border border-neutral-800">
                <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470" alt="Gym" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">OLYMPIC LIFTING ZONE</h2>
                <p className="text-neutral-400 text-lg">Equipped with Eleiko plates and bars, our lifting zone is designed for professionals. Reinforced floors and ample space ensure safety and performance.</p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-center group">
            <div className="flex-1 h-[300px] md:h-[400px] relative w-full rounded-3xl overflow-hidden border border-neutral-800">
                <Image src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469" alt="Sauna" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">RECOVERY SUITE</h2>
                <p className="text-neutral-400 text-lg">Post-workout recovery is key. Enjoy our infrared saunas, ice baths, and physiotherapy rooms to keep your body in peak condition.</p>
            </div>
        </div>
      </div>

      {/* New Amenities Grid with Icons */}
      <h2 className="text-3xl font-display font-bold mb-8 text-white">AMENITIES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {amenities.map((item, i) => (
            <div key={i} className="bg-card border border-neutral-800 p-6 rounded-2xl hover:border-brand transition-colors group">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-black transition-colors">
                    <i className={`${item.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
            </div>
        ))}
      </div>
    </div>
  );
}