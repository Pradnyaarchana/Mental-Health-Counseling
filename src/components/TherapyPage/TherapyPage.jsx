import React from "react";
import TherapistCard from "./TherapistCard";
import styles from "./TherapyPage.module.css";

const therapists = [
  {
    name: "Dr.Sayali Patil",
    qualification: "M.Phil in Clinical Psychology",
    role: "Senior Clinical Psychologist",
    languages: "English, Hindi",
    availability: "Online, Offline",
    experience: "7-8 years",
    location: "44, Sankalpa Apt, Sinhagad road, Pune",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/885a8d22c067f2900b87e5f39e827b240c53be6c4461c9907f98dbbc1f16f06d?placeholderIfAbsent=true&apiKey=0dbd44754ffd40a6baeb24a9377e8a7b",
  },
  {
    name: "Dr.Ayush Mehra",
    qualification: "M.Phil in Clinical Psychology",
    role: "Clinical Psychologist",
    languages: "English, Hindi",
    availability: "Online, Offline",
    experience: "7-8 years",
    location: "30, Mehra Clinic, Kothrud, Pune",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/24afd3fd65e603b0508b8d8bbb55d01caa7d7c7f3db293ea720a5c19d3949302?placeholderIfAbsent=true&apiKey=0dbd44754ffd40a6baeb24a9377e8a7b",
  },
  {
    name: "Dr. Shruti Deshmukh",
    qualification: "M.Phil & Ph.D. in Clinical Psychology",
    role: "Senior Clinical Psychologist",
    languages: "English, Hindi",
    availability: "Online",
    experience: "7-8 years",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cb686b617196399ddd990022a7eab7b0f42782383c187e4c3cac22ae851a1f05?placeholderIfAbsent=true&apiKey=0dbd44754ffd40a6baeb24a9377e8a7b",
  },
  {
    name: "Dr.Prerana Roy",
    qualification: "M.Sc. Clinical Psychology",
    role: "Senior Counselling Psychologist",
    languages: "English, Hindi, Bengali",
    availability: "Online",
    experience: "7-8 years",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/16447145d3ef92e11a1cdc0cb6ab8a90dcd60a891a5eb6c29d476a0771044503?placeholderIfAbsent=true&apiKey=0dbd44754ffd40a6baeb24a9377e8a7b",
  },
];

function TherapyPage() {
  return (
    <main className={styles.therapyPage}>
      
      <section className={styles.therapistGrid}>
        {therapists.map((therapist, index) => (
          <TherapistCard key={index} {...therapist} />
        ))}
      </section>
    </main>
  );
}

export default TherapyPage;
