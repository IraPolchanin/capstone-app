import greekSaladImage from "../assets/imiges/greek-salad.jpg";
import bruschettaImage from "../assets/imiges/bruchetta.png";
import lemonDessertImage from "../assets/imiges/desert.jpg";

export const meals = [
  {
    id: 1,
    title: "Greek salad",
    price: 12.99,
    image: greekSaladImage,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    id: 2,
    title: "Bruchetta",
    price: 5.99,
    image: bruschettaImage,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 4.78,
    image: lemonDessertImage,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];
