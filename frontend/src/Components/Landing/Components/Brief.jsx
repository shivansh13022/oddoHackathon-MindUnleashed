import React from "react";

const Card = ({ title, para }) => {
  return (
    <div
      className="bg-gradient-to-r text-justify from-pink-500/30 to-blue-500/30 p-6 rounded-lg shadow-lg w-96 hover:shadow-lg transform hover:scale-125  duration-150 ease-in-out"
      style={{
        borderColor: "#e91e63",
        boxShadow: "0 4px 8px 0 rgba(60,40,40,1)",
        // background:
        //   "linear-gradient(180deg, rgba(230,34,100,1) 40%, rgba(2,19,20,1) 100%)",
      }}
    >
      <h1 className="text-3xl bg-transparent text-blue-600 text-center py-4">
        {title}
      </h1>
      <p className="text-white bg-transparent text-center px-4 mb-8">{para}</p>
    </div>
  );
};

const Brief = () => {
  return (
    <div className="text-justify">
      <h1 className="text-3xl text-blue-300 text-center py-14">
        Navigating Anxiety, PTSD, and Depression
      </h1>

      <div className="flex flex-row justify-around text-justify items-start px-28 py-6 gap-16">
        <Card
          title="Anxiety"
          para="Anxiety is a normal and often healthy emotion. However, when a person regularly feels disproportionate levels of anxiety, it might become a medical disorder."
        />
        <Card
          title="PTSD"
          para="Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by witnessing or experiencing a terrifying event. Symptoms may include flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about the event. Many people who go through traumatic events may have difficulty adjusting and coping."
        />
        <Card
          title="Depression"
          para="Depression is a common but serious mood disorder. It causes severe symptoms that affect how you feel, think, and handle daily activities, such as sleeping, eating, or working. To be diagnosed with depression, the symptoms must be present for at least two weeks."
        />
      </div>
    </div>
  );
};

export default Brief;
