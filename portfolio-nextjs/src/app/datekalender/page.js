'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

export default function DateKalender() {
  // Use state to handle client-side rendering
  const [isClient, setIsClient] = useState(false);
  const [monthsVisible, setMonthsVisible] = useState({});
  
  useEffect(() => {
    // Mark component as client-side rendered
    setIsClient(true);
    
    // Scroll-animation - using React state instead of direct DOM manipulation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const monthId = entry.target.dataset.month;
        if (monthId) {
          setMonthsVisible(prev => ({
            ...prev,
            [monthId]: entry.isIntersecting
          }));
        }
      });
    }, { threshold: 0.1 });

    // Observe all month elements
    document.querySelectorAll('[data-month]').forEach(el => observer.observe(el));

    // Array med datoer for hver date
    const dateArray = [
      new Date('2025-01-08'), //Svømmehal
      new Date('2025-02-09'), //Badminton
      new Date('2025-03-18'), //Aros Kunstmuseum
      new Date('2025-04-26'), //Cykeltur langs kysten
      new Date('2025-05-17'), //Bål på stranden
      new Date('2025-06-14'), //Sove i shelter
      new Date('2025-07-10'), //Fiske turen
      new Date('2025-08-21'), //Street Food
      new Date('2025-09-05'), //Film i Botanisk Have
      new Date('2025-10-12'), // Græskar Udskæring
      new Date('2025-11-07'), //Grosserbadet Spanien
      new Date('2025-12-07') //Jule bagning hos min mor
    ];

    function updateCountdown() {
      const now = new Date();
      let nextDate = null;
      let days = null;

      for (const date of dateArray) {
        if (date > now) {
          nextDate = date;
          days = Math.ceil((nextDate - now) / (1000 * 60 * 60 * 24));
          break;
        }
      }

      const countdownElement = document.getElementById('countdown');
      if (countdownElement) {
        if (nextDate) {
          countdownElement.textContent = `Der er ${days} dage til næste date!`;
        } else {
          countdownElement.textContent = "Alle dates for året er gennemført!";
        }
      }
    }

    updateCountdown();
    
    // Automatically make all months visible after a delay (fallback)
    const visibilityTimeout = setTimeout(() => {
      setMonthsVisible({
        january: true,
        february: true,
        march: true,
        april: true,
        may: true,
        june: true,
        july: true,
        august: true,
        september: true,
        october: true,
        november: true,
        december: true
      });
    }, 1000);
    
    // Cleanup function to prevent memory leaks
    return () => {
      observer.disconnect();
      clearTimeout(visibilityTimeout);
    };
  }, []);

  // Show a simplified placeholder during server rendering
  if (!isClient) {
    return (
      <div className={styles.container}>
        <h1 className={styles.calendarTitle}>2025 Date Kalender</h1>
        <p className={styles.centeredText}>Loading date calendar...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.calendarTitle}>2025 Date Kalender</h1>

      <p className={styles.centeredText}>Dette er en kalender til os, med en planlagt date for hver måned. Jeg håber, du er klar til endnu et fantastisk år sammen, Anna!</p>
      <br />
      <div id="countdown" className={styles.centeredText}></div>

      <div className={styles.calendar}>
        {/* Januar */}
        <div 
          data-month="january"
          className={`${styles.month} ${styles.january} ${monthsVisible.january ? styles.visible : styles.hidden}`}
        >
          <h2>Januar</h2>
          <h3>Svømmehal</h3>
          <p>Vi tager til Lyseng og nyder en tur i svømmehallen.</p>
        </div>
        {/* Februar */}
        <div 
          data-month="february"
          className={`${styles.month} ${styles.february} ${monthsVisible.february ? styles.visible : styles.hidden}`}
        >
          <h2>Februar</h2>
          <h3>Badminton</h3>
          <p>Vi spiller en sjov omgang badminton sammen i DGI-huset.</p>
        </div>
        {/* Marts */}
        <div 
          data-month="march"
          className={`${styles.month} ${styles.march} ${monthsVisible.march ? styles.visible : styles.hidden}`}
        >
          <h2>Marts</h2>
          <h3>Aros Kunstmuseum</h3>
          <p>Vi udforsker kunst og kultur på Aros Kunstmuseum.</p>
        </div>
        {/* April */}
        <div 
          data-month="april"
          className={`${styles.month} ${styles.april} ${monthsVisible.april ? styles.visible : styles.hidden}`}
        >
          <h2>April</h2>
          <h3>Cykeltur langs kysten</h3>
          <p>Vi pakker en picnic og tager cyklerne ud langs den smukke kystlinje.</p>
          <p>Plus, vi skal også noget rigtig sjovt</p>
        </div>
        {/* Maj */}
        <div 
          data-month="may"
          className={`${styles.month} ${styles.may} ${monthsVisible.may ? styles.visible : styles.hidden}`}
        >
          <h2>Maj</h2>
          <h3>Bål på stranden</h3>
          <p>Vi nyder en aften ved stranden med bål, vin og hygge.</p>
        </div>
        {/* Juni */}
        <div 
          data-month="june"
          className={`${styles.month} ${styles.june} ${monthsVisible.june ? styles.visible : styles.hidden}`}
        >
          <h2>Juni</h2>
          <h3>Sove i shelter</h3>
          <p>Vi overnatter i en hyggelig shelter under stjernerne.</p>
        </div>
        {/* Juli */}
        <div 
          data-month="july"
          className={`${styles.month} ${styles.july} ${monthsVisible.july ? styles.visible : styles.hidden}`}
        >
          <h2>Juli</h2>
          <h3>Fisketur</h3>
          <p>Vi tager hen til mit hemmelige spot, og fanger aftensmaden</p>
        </div>
        {/* August */}
        <div 
          data-month="august"
          className={`${styles.month} ${styles.august} ${monthsVisible.august ? styles.visible : styles.hidden}`}
        >
          <h2>August</h2>
          <h3>Street Food</h3>
          <p>Vi tager ned på street food og smager på alt det lækre de har.</p>
        </div>
        {/* September */}
        <div 
          data-month="september"
          className={`${styles.month} ${styles.september} ${monthsVisible.september ? styles.visible : styles.hidden}`}
        >
          <h2>September</h2>
          <h3>Film i Botanisk Have</h3>
          <p>Vi ser en udendørs film i den smukke Botanisk Have.</p>
        </div>
        {/* Oktober */}
        <div 
          data-month="october"
          className={`${styles.month} ${styles.october} ${monthsVisible.october ? styles.visible : styles.hidden}`}
        >
          <h2>Oktober</h2>
          <h3>Græskar Udskæring</h3>
          <p>Græskar udskæringskonkurrence, taberen skal give vinderen en lækker massage.</p>
        </div>
        {/* November */}
        <div 
          data-month="november"
          className={`${styles.month} ${styles.november} ${monthsVisible.november ? styles.visible : styles.hidden}`}
        >
          <h2>November</h2>
          <h3>Grosserbadet Spanien</h3>
          <p>Vi slapper af og nyder atmosfæren på Grosserbadet.</p>
        </div>
        {/* December */}
        <div 
          data-month="december"
          className={`${styles.month} ${styles.december} ${monthsVisible.december ? styles.visible : styles.hidden}`}
        >
          <h2>December</h2>
          <h3>Jule bagning hos min mor</h3>
          <p>Vi bager vaniljekranse og brunkager hos min mor og nyder julestemningen.</p>
        </div>
      </div>
    </div>
  );
}