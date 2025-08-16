import React, { useState, useEffect } from 'react';
import styles from './SchedulerSection.module.css';
import schedulerConfig from '../utils/schedulerData.json';
import reactjsworkshop from '../assets/reactjsworkshop.jpeg';

const SchedulerSection = () => {
  // Get configuration from JSON
  const { event } = schedulerConfig;
  const [targetDate] = useState(new Date(event.targetDate));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to get the actual imported asset
  const getMediaSrc = (src) => {
    if (src === '/src/assets/reactjsworkshop.jpeg') {
      return reactjsworkshop;
    }
    return src; // Return as-is for external URLs or other assets
  };

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

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <section className={styles.scheduler_section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{event.title.split(' ')[0]} <span>{event.title.split(' ').slice(1).join(' ')}</span></h2>
          <p className={styles.subtitle}>{event.subtitle}</p>
        </div>

        {isExpired ? (
          <div className={styles.expired}>
            <h3>{event.expiredMessage.title}</h3>
            <p>{event.expiredMessage.description}</p>
          </div>
        ) : (
          <div className={styles.countdown}>
            <div className={styles.time_grid}>
              <div className={styles.time_box}>
                <div className={styles.time_number}>{timeLeft.days || 0}</div>
                <div className={styles.time_text}>Days</div>
              </div>
              <div className={styles.time_box}>
                <div className={styles.time_number}>{timeLeft.hours || 0}</div>
                <div className={styles.time_text}>Hours</div>
              </div>
              <div className={styles.time_box}>
                <div className={styles.time_number}>{timeLeft.minutes || 0}</div>
                <div className={styles.time_text}>Minutes</div>
              </div>
              <div className={styles.time_box}>
                <div className={styles.time_number}>{timeLeft.seconds || 0}</div>
                <div className={styles.time_text}>Seconds</div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.event_details}>
          <div className={styles.event_content}>
            <div className={styles.event_text}>
              <h4>{event.eventName}</h4>
              <p>{event.eventDescription}</p>
              {event.eventDetails && (
                <div className={styles.event_meta}>
                  {event.eventDetails.location && <p><strong>Location:</strong> {event.eventDetails.location}</p>}
                  {event.eventDetails.type && <p><strong>Type:</strong> {event.eventDetails.type}</p>}
                  {event.eventDetails.duration && <p><strong>Duration:</strong> {event.eventDetails.duration}</p>}
                </div>
              )}
            </div>

            {event.media && (
              <div className={styles.event_media}>
                {event.media.type === 'image' && (
                  <div className={styles.media_container}>
                    <img
                      src={getMediaSrc(event.media.src)}
                      alt={event.media.alt || 'Event Image'}
                      className={styles.event_image}
                    />
                    {event.media.caption && (
                      <p className={styles.media_caption}>{event.media.caption}</p>
                    )}
                  </div>
                )}

                {event.media.type === 'video' && (
                  <div className={styles.media_container}>
                    <video
                      src={getMediaSrc(event.media.src)}
                      className={styles.event_video}
                      controls={event.media.controls !== false}
                      autoPlay={event.media.autoPlay === true}
                      muted={event.media.muted === true}
                      loop={event.media.loop === true}
                      poster={event.media.poster ? getMediaSrc(event.media.poster) : undefined}
                    />
                    {event.media.caption && (
                      <p className={styles.media_caption}>{event.media.caption}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulerSection;
