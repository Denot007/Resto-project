import { TbTruckDelivery } from "react-icons/tb";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

// ######################################## NAVLINKS DATA #################################
export const navLinks = [
  {
    title: "Home",
    path: "/",
    id: 1,
  },
  {
    title: "About",
    path: "/about",
    id: 2,
  },
  {
    title: "Menu",
    path: "/menu",
    id: 3,
  },
  {
    title: "Reservations",
    path: "/reservations",
    id: 4,
  },
  {
    title: "Order Online",
    path: "/orderonline",
    id: 5,
  },
  {
    title: "Login",
    path: "/login",
    id: 6,
  },
];

// ######################################## BANNER DATA #################################
export const bannerData = [
  {
    src: "https://thediasporicdish.com/wp-content/uploads/2021/06/IMG-3012-e1624211105235.jpg",
    alt: "A bowl of rice and beans, fried banana and fried meat ",
    companyName: "Jeans Creole Café",
    location: "Orlando",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                   doloribus ipsum cum nemo. Alias, eum reiciendis cum eveniet ipsam
                   autem id fuga?`,
    id: 1,
  },
];

// ############################### SPECIALS CARD DATAS ##############################

export const onlineCardData = [
  {
    src: "https://thediasporicdish.com/wp-content/uploads/2021/06/IMG-3012-e1624211105235.jpg",
    alt: "A bowl of rice and beans, fried banana and fried meat ",
    title: "Rice and Beans",
    price: 12.99,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                   doloribus ipsum cum nemo. Alias, eum reiciendis cum eveniet ipsam
                   autem id fuga, accusamus nulla quaerat molestias quas et est eaque?`,
    custom: "Order a Delivery",
    icon: <TbTruckDelivery />,
    id: 1,
  },
  {
    src: "https://thediasporicdish.com/wp-content/uploads/2021/06/IMG-3012-e1624211105235.jpg",
    alt: "A bowl of rice and beans, fried banana and fried meat ",
    title: "Rice and Beans",
    price: 12.99,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                   doloribus ipsum cum nemo. Alias, eum reiciendis cum eveniet ipsam
                   autem id fuga, accusamus nulla quaerat molestias quas et est eaque?`,
    custom: "Order a Delivery",
    icon: <TbTruckDelivery />,
    id: 2,
  },
  {
    src: "https://thediasporicdish.com/wp-content/uploads/2021/06/IMG-3012-e1624211105235.jpg",
    alt: "A bowl of rice and beans, fried banana and fried meat ",
    title: "Rice and Beans",
    price: 12.99,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                   doloribus ipsum cum nemo. Alias, eum reiciendis cum eveniet ipsam
                   autem id fuga, accusamus nulla quaerat molestias quas et est eaque?`,
    custom: "Order a Delivery",
    icon: <TbTruckDelivery />,
    id: 3,
  },
];

// ######################################## ABOUT SECTION DATA #################################

export const aboutSectionData = [
  {
    user_two:
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    user_one:
      "https://images.pexels.com/photos/2080383/pexels-photo-2080383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Tom and Mary the owner of this site ",
    companyName: "Jeans Creole Café",
    location: "Orlando",
    description: `LDuis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    id: 1,
  },
];

// ###################################### TESTIMONIALS DATAS ##############################
export const testimonialData = [
  {
    userName: "Mike John",
    userProfile:
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "user profile",
    description: `LDuis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    icons: [<AiFillInstagram />, <BsFacebook />, <BsTwitter />],
    id: 1,
  },

  {
    userName: "John",
    userProfile:
      "https://images.pexels.com/photos/2080383/pexels-photo-2080383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "user profile",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
    repellat iste omnis enim a! Officia excepturi delectus aliquid quos
    reiciendis.`,
    icons: [<AiFillInstagram />, <BsFacebook />, <BsTwitter />],
    id: 2,
  },

  {
    userName: "Joel Jean",
    userProfile:
      "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "user profile",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
    repellat iste omnis enim a! Officia excepturi delectus aliquid quos
    reiciendis.`,
    icons: [<AiFillInstagram />, <BsFacebook />, <BsTwitter />],
    id: 3,
  },
];
