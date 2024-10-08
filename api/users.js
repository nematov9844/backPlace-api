const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

let users = {
  getBy: [
    {
      sale: "1999",
      info: "Футболка с дизайнерским принтом Super Shape 02 фиолетовая",
      price: "2499",
      title: "MARPLE",
      id: 1,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_1.png",
    },
    {
      sale: "3179",
      info: "Футболка с дизайнерским принтом Super Shape 02 фиолетовая",
      price: "1999",
      title: "MARPLE",
      id: 2,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_2.png",
    },
    {
      sale: "1375",
      info: "Бейсболка с дизайнерским принтом Super Shape 01 белая",
      price: "1999",
      title: "MARPLE",
      id: 3,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_3.png",
    },
    {
      sale: "599",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      price: "990",
      title: "MARPLE",
      id: 4,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_4.png",
    },
    {
      sale: "1999",
      info: "Футболка с дизайнерским принтом Super Shape 05",
      price: "2499",
      title: "MARPLE",
      id: 5,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_5.png",
    },
    {
      sale: "1999",
      info: "Футболка80 с дизайнерским принтом Super Shape 0201 ",
      price: "2499",
      title: "MARPLE",
      id: 6,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_6.png",
    },
    {
      sale: "1375",
      info: "Бейсболка с дизайнерским принтом Super Shape 02 абстракция",
      price: "2499",
      title: "MARPLE",
      id: 7,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_7.png",
    },
    {
      sale: "599",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      price: "990",
      title: "MARPLE",
      id: 8,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_8.png",
    },
    {
      sale: "599",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 02",
      price: "990",
      title: "MARPLE",
      id: 9,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_9.png",
    },
    {
      sale: "3179",
      info: "Футболка с дизайнерским принтом Super Shape 02 фиолетовая",
      price: "1999",
      title: "MARPLE",
      id: 10,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_10.png",
    },
    {
      sale: "599",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 06",
      price: "990",
      title: "MARPLE",
      id: 11,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_11.png",
    },
    {
      sale: "599",
      info: "Футболка с дизайнерским принтом Super Shape 06 абстракция",
      price: "990",
      title: "MARPLE",
      id: 12,
      rewiew: "4.9",
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/getBy/getBy_12.png",
    },
  ],
  newProduct: [
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_1.png",
      price: 2399,
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 1,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_2.png",
      price: 1375,
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 2,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_3.png",
      price: 2399,
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 3,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_4.png",
      price: 1375,
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 01",
      id: 4,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_5.png",
      price: 1999,
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 06",
      id: 5,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_6.png",
      price: 599,
      info: "Бейсболка с дизайнерским принтом Super Shape 01 белая",
      id: 6,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_7.png",
      price: 2399,
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 7,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_8.png",
      price: 3179,
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 8,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_9.png",
      price: 2399,
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 05",
      id: 9,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_10.png",
      price: 1375,
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 10,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_11.png",
      price: 1999,
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 11,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/newProducts/newProduct_12.png",
      price: 2399,
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 12,
    },
  ],
  recomendedProducts:[
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_1.png",
      price: "1 375 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 1,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_2.png",
      price: "1 375 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 2,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_3.png",
      price: "599 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 3,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_4.png",
      price: "599 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 01",
      id: 4,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_5.png",
      price: "2 399 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 5,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_6.png",
      price: "2 399 ₽",
      info: "Бейсболка с дизайнерским принтом Super Shape 02 абстракция",
      id: 6,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_7.png",
      price: "2 399 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 7,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_8.png",
      price: "2 399 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 06 абстракция",
      id: 8,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_9.png",
      price: "1 375 ₽",
      info: "Бейсболка с дизайнерским принтом Super Shape 01 белая",
      id: 9,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_10.png",
      price: "599 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 10,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_11.png",
      price: "599 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 05",
      id: 11,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_12.png",
      price: "2 399 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 06 абстракция",
      id: 12,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_13.png",
      price: "1 375 ₽",
      info: "Бейсболка с дизайнерским принтом Super Shape 02 абстракция",
      id: 13,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_14.png",
      price: "599 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 04",
      id: 14,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_15.png",
      price: "599 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 02",
      id: 15,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_16.png",
      price: "3 179 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 02 фиолетовая",
      id: 16,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_17.png",
      price: "599 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 06",
      id: 17,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_18.png",
      price: "2 399 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 06 абстракция",
      id: 18,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_19.png",
      price: "2 399 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 19,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_20.png",
      price: "2 399 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 20,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_21.png",
      price: "2 399 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 05",
      id: 21,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_22.png",
      price: "1 375 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 22,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_23.png",
      price: "1 999 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 23,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_24.png",
      price: "2 399 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 24,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_25.png",
      price: "1 375 ₽",
      info: "Бейсболка с дизайнерским принтом Super Shape 02 абстракция",
      id: 25,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_26.png",
      price: "599 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 04",
      id: 26,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_27.png",
      price: "599 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 02",
      id: 27,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_28.png",
      price: "3 179 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 02 фиолетовая",
      id: 28,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_29.png",
      price: "599 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 06",
      id: 29,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_30.png",
      price: "2 399 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 06 абстракция",
      id: 30,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_31.png",
      price: "2 399 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 31,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_32.png",
      price: "3 179 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 32,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_33.png",
      price: "2 399 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 05",
      id: 33,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_34.png",
      price: "1 375 ₽",
      info: "Чехол для iphone 12 с дизайнерским принтом Super Shape 03",
      id: 34,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_35.png",
      price: "1 999 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 35,
    },
    {
      img: "https://raw.githubusercontent.com/nematov9844/market_imgs/main/recommendedProducts/recommendedProduct_36.png",
      price: "2 399 ₽",
      info: "Футболка с дизайнерским принтом Super Shape 04 формулы",
      id: 36,
    },
  ]
};

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
