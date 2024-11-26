// // ReelsSwiper.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Import Swiper styles

// const ReelsSwiper = ({ posts }) => {
//     return (
//         <Swiper
//             direction="vertical" // Enable vertical scrolling
//             slidesPerView={1} // Show one video per view
//             loop // Infinite scrolling
//             className="w-full h-screen" // Fullscreen container
//         >
//             {posts.map((post, index) => (
//                 <SwiperSlide key={index}>
//                     {post.image.includes('video') ? (
//                         <video
//                             src={post.image}
//                             alt={post.caption}
//                             className="w-full h-full object-cover"
//                             loop
//                             muted
//                             autoPlay
//                             playsInline
//                         />
//                     ) : (
//                         <img
//                             src={post.image}
//                             alt={post.caption}
//                             className="w-full h-full object-cover"
//                         />
//                     )}
//                     {/* Caption Overlay */}
//                     <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
//                         <p className="text-sm">{post.caption}</p>
//                     </div>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// export default ReelsSwiper;

