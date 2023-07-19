import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/me.png";
import Image3 from "../../assets/avatar-3.svg";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section_title">Clients & Review</h2>

      <Swiper
        modules={[Pagination]}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="testimonials_container grid"
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial_item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials_title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
