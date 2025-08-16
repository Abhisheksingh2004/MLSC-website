import React, { useState, useEffect } from 'react';
import Footer from "../layouts/Footer";
import styles from './Scheduler.module.css';

const Scheduler = () => {
  // Set target date - you can modify this to any future date
  const [targetDate, setTargetDate] = useState(new Date('2025-12-31T23:59:59'));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const handleDateChange = (e) => {
    setTargetDate(new Date(e.target.value));
  };

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <main className={styles.scheduler_container}>
      <div className={styles.scheduler_content}>
        <div className={styles.header_section}>
          <h1 className={styles.page_title}>Event <span>Scheduler</span></h1>
          <p className={styles.page_subtitle}>Track upcoming events and deadlines</p>
        </div>

        <div className={styles.date_picker_section}>
          <label htmlFor="target-date" className={styles.date_label}>
            Set Target Date & Time:
          </label>
          <input
            type="datetime-local"
            id="target-date"
            value={targetDate.toISOString().slice(0, 16)}
            onChange={handleDateChange}
            className={styles.date_input}
          />
        </div>

        <div className={styles.countdown_section}>
          {isExpired ? (
            <div className={styles.expired_message}>
              <h2>🎉 Event Has Started! 🎉</h2>
              <p>The countdown has reached zero!</p>
            </div>
          ) : (
            <>
              <h2 className={styles.countdown_title}>Time Remaining</h2>
              <div className={styles.countdown_grid}>
                <div className={styles.time_unit}>
                  <div className={styles.time_value}>{timeLeft.days || 0}</div>
                  <div className={styles.time_label}>Days</div>
                </div>
                <div className={styles.time_unit}>
                  <div className={styles.time_value}>{timeLeft.hours || 0}</div>
                  <div className={styles.time_label}>Hours</div>
                </div>
                <div className={styles.time_unit}>
                  <div className={styles.time_value}>{timeLeft.minutes || 0}</div>
                  <div className={styles.time_label}>Minutes</div>
                </div>
                <div className={styles.time_unit}>
                  <div className={styles.time_value}>{timeLeft.seconds || 0}</div>
                  <div className={styles.time_label}>Seconds</div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className={styles.event_info}>
          <h3>Event Details</h3>
          <div className={styles.event_card}>
            <h4>Next MLSC Event</h4>
            <p>Join us for an exciting coding workshop and networking session!</p>
            <p><strong>Date:</strong> {targetDate.toLocaleDateString()}</p>
            <p><strong>Time:</strong> {targetDate.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Scheduler;
