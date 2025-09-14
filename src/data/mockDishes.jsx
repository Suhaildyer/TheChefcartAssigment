// --- Data ---
const initialDishes = [
  // --- Starters (10) ---
  {
    id: 6,
    name: "Samosa",
    description:
      "A fried or baked pastry with a savory filling, such as spiced potatoes, onions, peas.",
    type: "veg",
    category: "Starter",
    cuisine: "Snacks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoaZH20hToIcljAOa2yPfkiqq-bXGOO2TVw&s",
    ingredients: [
      { name: "Potato", qty: "2 pcs" },
      { name: "Green Peas", qty: "1/2 cup" },
      { name: "Maida", qty: "1 cup" },
    ],
  },
  {
    id: 9,
    name: "Paneer Tikka",
    description: "Chunks of paneer marinated in spices and grilled in a tandoor.",
    type: "veg",
    category: "Starter",
    cuisine: "North Indian",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1974&auto=format&fit=crop",
    ingredients: [
      { name: "Paneer", qty: "200g" },
      { name: "Yogurt", qty: "1/2 cup" },
      { name: "Spices", qty: "to taste" },
    ],
  },
  {
    id: 10,
    name: "Hara Bhara Kabab",
    description:
      "A vegetarian kabab made from spinach, potatoes, and green peas.",
    type: "veg",
    category: "Starter",
    cuisine: "North Indian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHVo86pfZ98tQRR2cbDfCCeLFlDjecnw5Qg&s",
    ingredients: [
      { name: "Spinach", qty: "1 bunch" },
      { name: "Potatoes", qty: "2 pcs" },
      { name: "Peas", qty: "1/2 cup" },
    ],
  },
  {
    id: 11,
    name: "Aloo Tikki",
    description:
      "A small, round cutlet made of boiled potatoes, onions and various curry spices.",
    type: "veg",
    category: "Starter",
    cuisine: "North Indian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp11Os6llvJSpvTenvPNSWiZMlG-Z4aOUVLA&s",
    ingredients: [
      { name: "Potatoes", qty: "3 pcs" },
      { name: "Onion", qty: "1 pc" },
      { name: "Spices", qty: "to taste" },
    ],
  },
  {
    id: 12,
    name: "Onion Bhaji",
    description:
      "Spicy Indian snack of deep-fried onions in a seasoned gram flour batter.",
    type: "veg",
    category: "Starter",
    cuisine: "Snacks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvcMhUH5U_Fb-mSoOKvP2EBticPQRzUiDbA&s",
    ingredients: [
      { name: "Onions", qty: "2 pcs" },
      { name: "Gram flour", qty: "1 cup" },
      { name: "Chili powder", qty: "1 tsp" },
    ],
  },
  {
    id: 13,
    name: "Chicken Tikka",
    description:
      "Small pieces of boneless chicken baked using skewers on a brazier called angeethi.",
    type: "non-veg",
    category: "Starter",
    cuisine: "North Indian",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1974&auto=format&fit=crop",
    ingredients: [
      { name: "Chicken", qty: "250g" },
      { name: "Yogurt", qty: "1/2 cup" },
      { name: "Spices", qty: "to taste" },
    ],
  },
  {
    id: 14,
    name: "Fish Amritsari",
    description:
      "A popular Indian street food and restaurant-style starter, a lightly battered fish fry.",
    type: "non-veg",
    category: "Starter",
    cuisine: "North Indian",
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/amritsari-fried-fish-scaled-e1621348565229.jpeg?v=1618226070",
    ingredients: [
      { name: "Fish fillet", qty: "200g" },
      { name: "Gram flour", qty: "1/2 cup" },
      { name: "Spices", qty: "to taste" },
    ],
  },
  {
    id: 15,
    name: "Chilli Chicken Dry",
    description:
      "A sweet, spicy and slightly sour crispy appetizer made with chicken, bell peppers, garlic.",
    type: "non-veg",
    category: "Starter",
    cuisine: "Indo-Chinese",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-98rnG9y12B9SKmzjjjwMFTXz2OxfwN6ppQ&s",
    ingredients: [
      { name: "Chicken", qty: "200g" },
      { name: "Capsicum", qty: "1 pc" },
      { name: "Garlic", qty: "5 cloves" },
    ],
  },
  {
    id: 16,
    name: "Spring Rolls",
    description:
      "A savory snack made with a filling of vegetables rolled inside a thin pastry.",
    type: "veg",
    category: "Starter",
    cuisine: "Indo-Chinese",
    image:
      "https://thaicaliente.com/wp-content/uploads/2020/09/Spring-Roll-Feature.jpg",
    ingredients: [
      { name: "Spring roll sheets", qty: "6 pcs" },
      { name: "Mixed veggies", qty: "1 cup" },
      { name: "Soy sauce", qty: "2 tbsp" },
    ],
  },
  {
    id: 17,
    name: "Dahi Bhalla",
    description:
      "Deep-fried lentil fritters dunked in creamy yogurt, topped with sweet and tangy chutneys.",
    type: "veg",
    category: "Starter",
    cuisine: "North Indian",
    image:
      "https://ministryofcurry.com/wp-content/uploads/2016/08/Dahi-Vada-5.jpg",
    ingredients: [
      { name: "Urad dal", qty: "1 cup" },
      { name: "Yogurt", qty: "1 cup" },
      { name: "Tamarind chutney", qty: "2 tbsp" },
    ],
  },

  // --- Main Course (10) ---
  {
    id: 1,
    name: "Tandoori Chicken",
    description:
      "Chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven.",
    type: "non-veg",
    category: "Main Course",
    cuisine: "North Indian",
    image:
      "https://img.freepik.com/free-photo/side-view-chicken-kebab-lavash-served-with-fresh-herbs-onion-adjika-sauce_141793-2957.jpg?t=st=1757853232~exp=1757856832~hmac=3ee2c04f565d4bf07637c9929c99a9c1b84cdef946767af7ec4eaa6569c323d3&w=1060",
    ingredients: [
      { name: "Chicken", qty: "500g" },
      { name: "Yogurt", qty: "1 cup" },
      { name: "Tandoori masala", qty: "2 tbsp" },
    ],
  },
  {
    id: 2,
    name: "Dal Makhni",
    description:
      "A dish originating from the Punjab region, made with lentils, red kidney beans, butter and cream.",
    type: "veg",
    category: "Main Course",
    cuisine: "North Indian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDWcxE3nXYImBIy87369VvBja8vUKU5gbMg&s",
    ingredients: [
      { name: "Black lentils", qty: "1 cup" },
      { name: "Kidney beans", qty: "1/2 cup" },
      { name: "Butter", qty: "2 tbsp" },
    ],
  },
  {
    id: 18,
    name: "Malai Kofta",
    description:
      "A creamy and rich North Indian curry made with fried potato and paneer balls (kofta).",
    type: "veg",
    category: "Main Course",
    cuisine: "North Indian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsT8TUD-NzEQeESGXCTvbEFMbcMp-heDW-Kw&s",
    ingredients: [
      { name: "Paneer", qty: "150g" },
      { name: "Potato", qty: "2 pcs" },
      { name: "Cream", qty: "1/2 cup" },
    ],
  },
  {
    id: 4,
    name: "Paneer Butter Masala",
    description:
      "A rich and creamy dish of paneer in a tomato, butter and cashew sauce.",
    type: "veg",
    category: "Main Course",
    cuisine: "North Indian",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1974&auto=format&fit=crop",
    ingredients: [
      { name: "Paneer", qty: "200g" },
      { name: "Tomato puree", qty: "1 cup" },
      { name: "Cashews", qty: "10 pcs" },
    ],
  },
  {
    id: 5,
    name: "Chicken Biryani",
    description:
      "A savory chicken and rice dish that includes layers of chicken, rice, and aromatics.",
    type: "non-veg",
    category: "Main Course",
    cuisine: "North Indian",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop",
    ingredients: [
      { name: "Chicken", qty: "300g" },
      { name: "Basmati rice", qty: "2 cups" },
      { name: "Biryani masala", qty: "2 tbsp" },
    ],
  },
  {
    id: 19,
    name: "Palak Paneer",
    description:
      "A vegetarian dish consisting of paneer in a thick paste made from puréed spinach.",
    type: "veg",
    category: "Main Course",
    cuisine: "North Indian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzInsg3XxMcqrU233PO3em4HBiNRWuDwMWoQ&s",
    ingredients: [
      { name: "Spinach", qty: "1 bunch" },
      { name: "Paneer", qty: "200g" },
      { name: "Garlic", qty: "4 cloves" },
    ],
  },
  {
    id: 20,
    name: "Chana Masala",
    description:
      "A delicious & flavorful Indian curry made by cooking chickpeas in a spicy onion tomato masala.",
    type: "veg",
    category: "Main Course",
    cuisine: "North Indian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrrNFYiEggTGhy5o6JD7X5ZG86yhoFoYDow&s",
    ingredients: [
      { name: "Chickpeas", qty: "2 cups" },
      { name: "Onion", qty: "1 pc" },
      { name: "Tomato", qty: "2 pcs" },
    ],
  },
  {
    id: 21,
    name: "Rogan Josh",
    description:
      "An aromatic curried meat dish of Persian or Kashmiri origin, made with red meat.",
    type: "non-veg",
    category: "Main Course",
    cuisine: "Kashmiri",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZe9y26LMu506TA72chk5A0cQM7JqFqSDOXQ&s",
    ingredients: [
      { name: "Mutton", qty: "500g" },
      { name: "Yogurt", qty: "1/2 cup" },
      { name: "Spices", qty: "to taste" },
    ],
  },
  {
    id: 22,
    name: "Butter Chicken",
    description:
      "A type of curry made from chicken with a spiced tomato and butter (makhan) sauce.",
    type: "non-veg",
    category: "Main Course",
    cuisine: "North Indian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdHbLpoZ41iDhrAmMy7KT0OX3sgHek0FWwg&s",
    ingredients: [
      { name: "Chicken", qty: "400g" },
      { name: "Butter", qty: "3 tbsp" },
      { name: "Tomato puree", qty: "1 cup" },
    ],
  },
  {
    id: 23,
    name: "Shahi Paneer",
    description:
      "A preparation of paneer, native to the Indian subcontinent, consisting of a thick gravy of cream.",
    type: "veg",
    category: "Main Course",
    cuisine: "North Indian",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1914&auto=format&fit=crop",
    ingredients: [
      { name: "Paneer", qty: "200g" },
      { name: "Cream", qty: "1/2 cup" },
      { name: "Cashew paste", qty: "3 tbsp" },
    ],
  },

  // --- Desert (5) ---
  {
    id: 7,
    name: "Gulab Jamun",
    description:
      "An Indian dessert of fried dough balls that are soaked in a sweet, sticky sugar syrup.",
    type: "veg",
    category: "Desert",
    cuisine: "Sweets",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2_kgNFhaEQzChHtBoJqx9h7nwx7K94Ykiw&s",
    ingredients: [
      { name: "Khoya", qty: "1 cup" },
      { name: "Sugar syrup", qty: "1 cup" },
      { name: "Cardamom", qty: "1 tsp" },
    ],
  },
  {
    id: 24,
    name: "Rasmalai",
    description:
      "A Bengali dessert consisting of soft paneer balls immersed in chilled creamy milk.",
    type: "veg",
    category: "Desert",
    cuisine: "Sweets",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRe_iE1P5sbsw7izWdPDzEIn-R8tK-3yRbLA&s",
    ingredients: [
      { name: "Paneer balls", qty: "6 pcs" },
      { name: "Milk", qty: "2 cups" },
      { name: "Saffron", qty: "few strands" },
    ],
  },
  {
    id: 25,
    name: "Jalebi",
    description:
      "A spiral-shaped sweet made by deep-frying a wheat flour batter, which is then soaked in sugar syrup.",
    type: "veg",
    category: "Desert",
    cuisine: "Sweets",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRK2uC7RMJ_Xmz3N0NSJfSfV0mvkUqSgr48g&s",
    ingredients: [
      { name: "Maida", qty: "1 cup" },
      { name: "Sugar syrup", qty: "1 cup" },
      { name: "Ghee", qty: "for frying" },
    ],
  },
  {
    id: 26,
    name: "Kheer",
    description:
      "A sweet dish and a type of wet pudding popular in the Indian subcontinent, made by boiling milk.",
    type: "veg",
    category: "Desert",
    cuisine: "Sweets",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7oJJVCAOviMydqyClPXwQ4C3VQmknYFoBg&s",
    ingredients: [
      { name: "Milk", qty: "1 litre" },
      { name: "Rice", qty: "1/2 cup" },
      { name: "Sugar", qty: "1/2 cup" },
    ],
  },
  {
    id: 27,
    name: "Gajar ka Halwa",
    description:
      "A carrot-based sweet dessert pudding from the Indian subcontinent.",
    type: "veg",
    category: "Desert",
    cuisine: "Sweets",
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2019/05/Gajar-Ka-Halwa-2-3.jpg",
    ingredients: [
      { name: "Carrot", qty: "2 cups grated" },
      { name: "Milk", qty: "1 cup" },
      { name: "Sugar", qty: "1/2 cup" },
    ],
  },

  // --- Sides (5) ---
  {
    id: 8,
    name: "French Fries",
    description:
      "Batonnet or allumette-cut deep-fried potatoes, disputed origin from Belgium and France.",
    type: "veg",
    category: "Sides",
    cuisine: "Continental",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1974&auto=format&fit=crop",
    ingredients: [
      { name: "Potatoes", qty: "3 pcs" },
      { name: "Salt", qty: "to taste" },
      { name: "Oil", qty: "for frying" },
    ],
  },
  {
    id: 28,
    name: "Naan",
    description:
      "A leavened, oven-baked flatbread found in the cuisines mainly of Western Asia.",
    type: "veg",
    category: "Sides",
    cuisine: "North Indian",
    image:
      "https://t4.ftcdn.net/jpg/02/52/31/93/360_F_252319323_I4hRMLLqmAs2SF6OcSOF5AFlWhMVGbgP.jpg",
    ingredients: [
      { name: "Maida", qty: "2 cups" },
      { name: "Yeast", qty: "1 tsp" },
      { name: "Curd", qty: "1/2 cup" },
    ],
  },
  {
    id: 29,
    name: "Raita",
    description:
      "A side dish in Indian cuisine made of dahi together with raw or cooked vegetables.",
    type: "veg",
    category: "Sides",
    cuisine: "North Indian",
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2022/04/Boondi-Raita.jpg",
    ingredients: [
      { name: "Curd", qty: "1 cup" },
      { name: "Boondi", qty: "1/2 cup" },
      { name: "Spices", qty: "to taste" },
    ],
  },
  {
    id: 30,
    name: "Green Salad",
    description:
      "A salad made mainly with fresh, raw green leafy vegetables, such as lettuce or spinach.",
    type: "veg",
    category: "Sides",
    cuisine: "Continental",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    ingredients: [
      { name: "Lettuce", qty: "1 cup" },
      { name: "Cucumber", qty: "1 pc" },
      { name: "Tomato", qty: "1 pc" },
    ],
  },
  {
    id: 31,
    name: "Papadum",
    description:
      "A thin, crisp, round flatbread from the Indian subcontinent.",
    type: "veg",
    category: "Sides",
    cuisine: "Snacks",
    image:
      "https://t4.ftcdn.net/jpg/14/98/56/57/360_F_1498565777_FSav6tKjD06mP8e4dXSvIECwKJoJJpzH.jpg",
    ingredients: [
      { name: "Urad flour", qty: "1 cup" },
      { name: "Salt", qty: "1 tsp" },
      { name: "Oil", qty: "for frying" },
    ],
  },
];

export default initialDishes;
