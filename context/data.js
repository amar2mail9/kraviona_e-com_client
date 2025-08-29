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

export const priceCalculated = (price = 0, discount = 0) => {
  const finalPrice = price - price * (discount / 100);
  return Math.round(finalPrice); // round-off to nearest integer
};
