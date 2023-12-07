import React from "react";
import mailImg from "../../assets/icon/icon-header-mail.png";
import profileImg from "../../assets/icon/icon-header-profile.png";
import scheduleImg from "../../assets/icon/icon-header-schedule.png";
import statsImg from "../../assets/icon/icone-header-stats.png";
import headerImg from "../../assets/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1.png";
import ButtonCompo from "../Button/ButtonCompo";
import FloatingCard from "../FloatingCard/FloatingCard";

function SectionTwo() {
  return (
    <section className="position-relative text-center">
      <img src={headerImg} alt="Header" width={400} />
      <img
        src={statsImg}
        alt="Mail"
        width={60}
        className="rounded-3 position-absolute"
        style={{
          boxShadow: "0px 8px 40px 0px rgba(210, 77, 101, 0.26)",
          transform: "translate(10%, 100%)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <FloatingCard
        img={mailImg}
        title="Congratulations"
        desc="Your admission completed"
        style={{ right: 0, top: "40%" }}
      />
      <FloatingCard
        img={scheduleImg}
        title="250K"
        desc="Assisted Student"
        style={{ left: "2%", top: "20%" }}
      />
      <FloatingCard
        img={profileImg}
        isProfile={true}
        title="User Experience Class"
        desc="Today at 12.00 PM"
        style={{ left: "2%", bottom: "20%" }}
        footer={<ButtonCompo variant="brand-rose">Join Now</ButtonCompo>}
      />
    </section>
  );
}

export default SectionTwo;
