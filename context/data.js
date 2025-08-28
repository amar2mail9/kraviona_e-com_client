export const colorcode = {
  primary: "#4F46E5", // Indigo - royal primary
  secondary: "#06B6D4", // Cyan - vibrant secondary
  accent: "#F43F5E", // Rose - accent for highlights
  success: "#22C55E", // Green - success
  warning: "#FACC15", // Yellow - warning
  danger: "#EF4444", // Red - danger
  info: "#3B82F6", // Blue - info

  background: "#F9FAFB", // Light background
  surface: "#FFFFFF", // Cards / surfaces
  border: "#E5E7EB", // Borders / dividers

  headerBg: "#FFFFFF", // Header bg
  websiteBg: "#F9FAFB", // Overall website bg
  footerBg: "#F3F4F6", // Footer
  cardBg: "#FFFFFF", // Cards
  thumbnailBg: "#F3F4F6", // Product bg

  text: "#111827", // Strong text
  textMuted: "#6B7280", // Muted text

  button: {
    bg: "#4F46E5", // Primary button bg
    hover: "#4338CA", // Darker indigo on hover
    active: "#3730A3", // Deep indigo on active
    text: "#FFFFFF", // White text
  },

  link: {
    text: "#4F46E5",
    hover: "#4338CA",
    visited: "#9333EA",
  },
};

// menu and link

export const menuList = [
  {
    name: "Shop",
    link: "/",
  },
  {
    name: "Kids",
    link: "/kids",
  },
  {
    name: "Mens",
    link: "/mens",
  },
  {
    name: "Womens",
    link: "/womens",
  },
];

const baseURL = "https://dummyjson.com";
export const fetchApi = async (endpoint) => {
  try {
    const res = await fetch(`${baseURL}/${endpoint}`);
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
    }
  } catch (error) {
    console.error(error.message || error.error);
  }
};
