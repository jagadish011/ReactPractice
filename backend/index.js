import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1499.0,
      description:
        "The ultimate iPhone experience with a powerful A17 Bionic chip, Dynamic Island, and ProMotion display.",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQanLRVNaU-P0vaqd8saJsEMGkbwf4N0CNxEC7NWeAlRmv3m1l2RV2mMVCyhnBPs0yql1EnmIpgCcrejAGhAzgNkH0thfoSlGcENA7lsxG4izxhIGlT5Wlpkw",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 1199.0,
      description:
        "A premium Android smartphone with a stunning AMOLED display, powerful camera system, and long-lasting battery life.",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSsuVhY_velw8bxiEXGnAp39EpTYAJA56rPsa-m1n0GoUR_liHS9sirwmzZ1OFd4jIFsrKEWRIqoYs3HmSqU_HA6waSICsmfaWUgFo-HcMjTo_P3_hkL48BLb35NVPPgn6EPcQvZw&usqp=CAc",
    },
    {
      id: 3,
      name: "MacBook Pro 14-inch",
      price: 1999.0,
      description:
        "A powerful laptop for professionals, featuring the M2 Pro chip, Liquid Retina XDR display, and long battery life.",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT5NgKKPuf8gWFBIg6G4lC_Twu-Z6rYo69RFsA28oTMyBeUzMq0pMNs0TTGbANvJF61VNvizUZNXs0fqtE70uBmHlNgufVITJF22rqKPIgPuACNhCOl0h6SpbIlYy6vZjttTKkOGCKZE20&usqp=CAc",
    },
    {
      id: 4,
      name: "Sony PlayStation 5",
      price: 499.99,
      description:
        "The next-generation gaming console with stunning graphics, lightning-fast load times, and immersive gameplay.",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSOwL98Z0jqkpzgclXmqcd2CqCPRFr5U2HZdwo7b-UX6U_08to19rJlSJ5a8BQ56zq6G79A87qXotJ5P1hSoUhArrY3zf4pEiizROd_RnEJxtxVtYWrUzR7",
    },
    {
      id: 5,
      name: "Nintendo Switch OLED Model",
      price: 349.99,
      description:
        "A versatile gaming console that can be played on the TV or on the go, with a vibrant OLED display.",
      image: "https://m.media-amazon.com/images/I/71Q54HnKxwS._SX679_.jpg",
    },
    {
      id: 6,
      name: "LG OLED C3 Series",
      price: 1499.99,
      description:
        "A premium OLED TV with stunning picture quality, Dolby Vision IQ, and a sleek design.",
      image:
        "https://m.media-amazon.com/images/I/41BTKoe-jcL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
      id: 7,
      name: "Samsung Galaxy Watch 6 Classic",
      price: 399.99,
      description:
        "A stylish and functional smartwatch with advanced health tracking features, long battery life, and a classic design.",
      image: "https://m.media-amazon.com/images/I/81i1Vn-KQuL._SX679_.jpg",
    },
    {
      id: 8,
      name: "Apple Watch Series 9",
      price: 399.0,
      description:
        "The latest Apple Watch with advanced health tracking features, always-on display, and faster performance.",
      image: "https://m.media-amazon.com/images/I/81kq5wkaqAL._SX679_.jpg",
    },
    {
      id: 9,
      name: "Sony WH-1000XM5",
      price: 399.99,
      description:
        "Industry-leading noise-canceling headphones with high-quality sound, comfortable fit, and long battery life.",
      image:
        "https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_1200x1050_v3_converted.webp",
    },
    {
      id: 10,
      name: "Bose QuietComfort 45",
      price: 329.0,
      description:
        "Comfortable noise-canceling headphones with excellent sound quality and long battery life.",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQMgZFUwW0Oy06bH-xhHD_8YCnnGIEhgI1kYPL63ua6pF7aDPT4l0sEBPBZe1Ii_HimksUzsztR6LseM57HcTs9-EfVJho3s7_NwYjJXxok6HHNqEDpxA8mlDrczKOm&usqp=CAc",
    },
  ];

  // https://localhost:300/api/products?search=iphone

  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    )
    res.send(filteredProducts)
    return;
  }
    
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
