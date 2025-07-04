import React from 'react';
import ProfilePic from '../assets/profile.png';

const profiles = [
  { name: "Yassir", bidang: "Frontend Developer" },
  { name: "Waqqir", bidang: "Backend Developer" },
  { name: "Agung", bidang: "UI/UX Designer" },
  { name: "Kevin", bidang: "Project Manager" },
  { name: "Syifa", bidang: "QA + Development" },
  { name: "Nazmi", bidang: "CTO (Chief Technology Officer)" },
  { name: "Luthfi", bidang: "Frontend Developer" },
  { name: "Rendy", bidang: "Backend Developer" },
  { name: "Eqy", bidang: "UI/UX Designer" },
];

const CardProfile = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 justify-items-center">
      {profiles.map((profile, index) => (
        <div key={index} className="w-[297.9103088378906px] h-[400px] rounded-xl bg-[#6B7C49] flex flex-col items-center justify-center p-10" style={{ boxShadow: '0 0 8px rgba(0,0,0,0.25)' }} >
          <img src={ProfilePic} alt="Profile" className="w-[170px] h-[170px] rounded-full shadow-[0_0_13px_rgba(0,0,0,0.5)]" />
          <h2 className="text-white mt-4 text-center" style={{ fontWeight: 700, fontSize: '43px', textShadow: '0px 1px 2px rgba(0,0,0,0.4)', }}>
            {profile.name}
          </h2>
          <p className="text-white -mt-2 text-center" style={{ fontWeight: 500, fontSize: '22px', textShadow: '0px 1px 2px rgba(0,0,0,0.4)', }}>
            {profile.bidang}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardProfile;
