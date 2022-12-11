import React, { useEffect } from "react";
import { motion } from "framer-motion";
import danceVideo from "../../assets/dance-video.mp4";

import photos from "../../data";
import "./style.scss";

const images = {
  hidden: {
    clipPath: "circle(0px at 50% 50%)",
  },

  show: {
    clipPath: "circle(150% at 50% 50%)",
    transition: {
      delay: 0.5,
      duration: 1.3,
    },
  },
};

export default function Featured() {
  const [firstImage, secondImage, thirdImage] = photos;

  function playVideo() {
    const video = document.getElementById("video");

    video.play();
  }

  function stopVideo() {
    const video = document.getElementById("video");

    video.pause();
  }
  return (
    <motion.section className="featured-section" data-scroll-section>
      <motion.div className="featured">
        <motion.img
          variants={images}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="img-1"
          src={firstImage}
          data-scroll
        />
        <h6 className="heading--1">Magic4management</h6>
      </motion.div>
      <motion.div className="featured">
        <motion.img
          variants={images}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          src={secondImage}
          data-scroll
        />
        <h6 className="heading--2">Magic4events</h6>
      </motion.div>
      <motion.div className="featured">
        <motion.img
          variants={images}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          src={thirdImage}
          data-scroll
        />
        <h6 className="heading--3">Magic4Veneu</h6>
      </motion.div>
      <div className="video">
        <video
          src="https://www.magic4u.es/_next/static/videos/magic-8f0d5039edae6f7aee813ad7adf7236e.mp4"
          id="video"
          onMouseEnter={playVideo}
          onMouseLeave={stopVideo}
          type="video/mp4"
          muted
          autoplay
          loop
        ></video>
      </div>
    </motion.section>
  );
}
