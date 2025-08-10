import React from "react";
import "../App.css";
import "./AboutUs.css";

function AboutUs() {
  return (
      <div className="about-us">
        <h1 className="about">AboutUs</h1>
        <p>
          At Prime Events, we believe that every occasion is an opportunity to
          create something unforgettable. As a premier event management company,
          we specialize in delivering seamless, impactful, and memorable
          experiences across a diverse spectrum of events—ranging from
          high-level corporate conferences to vibrant cultural festivals,
          elegant social gatherings, dynamic sports events, entertainment shows,
          and enriching educational summits.
        </p>
        <div className="mission-vision">
          <div className="mission">
            <div className="m-title">
              <h3>Our Mission</h3>
            </div>
            <div className="m-content">
              <p>
                To craft extraordinary events that inspire, engage, and leave a
                lasting impression—while ensuring flawless execution and maximum
                client satisfaction.
              </p>
            </div>
          </div>
          <div className="vision">
            <div className="v-title">
              <h3>Vision</h3>
            </div>
            <div className="v-content">
              <p>
                To become a nationally recognized leader in the event industry
                by setting new standards of excellence, creativity, and
                professionalism.
              </p>
            </div>
          </div>
            <div className="what-offers">
                <div className="w-title">
                    <h3>What We Offer</h3>
                </div>
                <div className="w-content">
                    <ul>
                        <li><strong>Corporate Events</strong>- Meetings, Launches, Conferences</li>
                        <li><strong>Social Events</strong>- Weddings, Birthdays, Private Parties</li>
                        <li><strong>Cultural Events</strong>- Festivals, Celebrations, Exhibitions</li>
                        <li><strong>Entertainment Events</strong>- Concerts, Marathons, Award Nights</li>
                        <li><strong>Educational Events</strong>- Seminars, Workshops, Career Fairs</li>
                    </ul>
                </div>
            </div>
      </div>
    </div>
  );
}
export default AboutUs;
