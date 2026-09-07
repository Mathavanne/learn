export const subCategoryMap = {
  "Garments": ["men's clothing", "women's clothing", "children's clothing"],
  "Leather products": ["accessories", "footwear", "bags"],
  "Agriculture Products": ["grains", "fruits", "beverages", "nuts"]
};

export const dummyData = {
  "Garments": [
    {
      id: 1,
      title: "Men's Cotton T-Shirt",
      price: 19.99,
      description: "Soft cotton t-shirt for everyday wear.",
      category: "men's clothing",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Women's Denim Jacket",
      price: 49.99,
      description: "Classic denim jacket with a modern fit.",
      category: "women's clothing",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "Children's Pajama Set",
      price: 25.5,
      description: "Comfortable pajama set for kids.",
      category: "kids",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      title: "Men's Formal Shirt",
      price: 35.0,
      description: "Elegant formal shirt for office wear.",
      category: "men's clothing",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      title: "Women's Yoga Pants",
      price: 29.95,
      description: "Flexible and breathable yoga pants.",
      category: "women's clothing",
      image: "https://via.placeholder.com/150"
    }
  ],
  "Leather products": [
    {
      id: 101,
      title: "Leather Wallet",
      price: 45.0,
      description: "Compact wallet made from premium leather.",
      category: "accessories",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 102,
      title: "Leather Handbag",
      price: 120.0,
      description: "Elegant handbag perfect for daily use.",
      category: "women's clothing",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 103,
      title: "Leather Belt",
      price: 35.99,
      description: "Durable leather belt with classic buckle.",
      category: "men's clothing",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 104,
      title: "Leather Jacket",
      price: 199.99,
      description: "Stylish leather jacket for winter.",
      category: "men's clothing",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 105,
      title: "Leather Boots",
      price: 150.0,
      description: "Premium boots crafted from full-grain leather.",
      category: "footwear",
      image: "https://via.placeholder.com/150"
    }
  ],
  "Agriculture Products": [
    {
      id: 201,
      title: "Basmati Rice (5kg)",
      price: 12.5,
      description: "High-quality long grain basmati rice.",
      category: "grains",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 202,
      title: "Fresh Mangoes (2kg)",
      price: 6.0,
      description: "Sweet and juicy mangoes sourced fresh.",
      category: "fruits",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 203,
      title: "Arabica Coffee Beans (1kg)",
      price: 18.75,
      description: "Rich and aromatic arabica coffee beans.",
      category: "beverages",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 204,
      title: "Groundnuts (3kg)",
      price: 9.0,
      description: "Crunchy and nutritious groundnuts.",
      category: "nuts",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 205,
      title: "Green Tea Leaves (1kg)",
      price: 14.99,
      description: "Organic green tea leaves for a healthy brew.",
      category: "beverages",
      image: "https://via.placeholder.com/150"
    }
  ]
};

export const allProducts = Object.values(dummyData).flat();