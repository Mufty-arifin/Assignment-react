import Header from "./components/Header";
import NavbarComponent from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Branch from "./components/Branch";
import FooterComponent from "./components/FooterComponent";
import about1 from "./assets/img/premium-quality.png";
import about2 from "./assets/img/vegetable.png";
import about3 from "./assets/img/fruits.png";
import menu1 from "./assets/img/starters.png";
import menu2 from "./assets/img/maincourse.jpg";
import menu3 from "./assets/img/desert.png";
import menu4 from "./assets/img/drinks.png";
import branch1 from "./assets/img/jakarta.jpg";
import branch2 from "./assets/img/bandung.jpg";
import branch3 from "./assets/img/surabaya.jpg";
const App = () => {
  const headerContact = ["dapurlezat@gmail.com", "085123456789"];
  const navLinks = [
    {
      id: 1,
      path: "",
      title: "Home",
    },
    {
      id: 2,
      path: "about",
      title: "About",
    },
    {
      id: 3,
      path: "menu",
      title: "Menu",
    },
    {
      id: 4,
      path: "contact",
      title: "Contact",
    },
  ];
  const aboutCard = [
    {
      id: 1,
      img: about1,
      title: "Premium Quality",
      desc: "Kami hanya menggunakan bahan-bahan premium quality untuk menciptakan rasa yang tak tertandingi dalam setiap hidangan.",
    },
    {
      id: 2,
      img: about2,
      title: "Seasonal Vegetables",
      desc: "Kami bekerja sama dengan petani lokal untuk memastikan bahwa bahan sayuran musiman kami selalu segar dan berkualitas.",
    },
    {
      id: 3,
      img: about3,
      title: "Fresh Fruit",
      desc: "Kami menjaga kualitas buah segar kami untuk memberikan pengalaman yang menyegarkan di setiap hidangan.",
    },
  ];
  const starters = [
    {
      menuName: "Starters",
      img: menu1,
      data: [
        {
          id: 1,
          title: "Salad Buah Yoghurt",
          price: "Rp. 25.000",
        },
        {
          id: 2,
          title: "Sup Labu Kuning",
          price: "Rp. 25.000",
        },
        {
          id: 3,
          title: "Aspic Jelly",
          price: "Rp. 25.000",
        },
        {
          id: 4,
          title: "Salad Sayur",
          price: "Rp. 25.000",
        },
      ],
    },
  ];
  const mainCourses = [
    {
      menuName: "Main Courses",
      img: menu2,
      data: [
        {
          id: 1,
          title: "Bratwurst Cream Pesto",
          price: "Rp. 25.000",
        },
        {
          id: 2,
          title: "Chicken Maryland",
          price: "Rp. 25.000",
        },
        {
          id: 3,
          title: "Achicken Parmigiana",
          price: "Rp. 25.000",
        },
        {
          id: 4,
          title: "Creamy Samyang Carbonara",
          price: "Rp. 25.000",
        },
      ],
    },
  ];
  const deserts = [
    {
      menuName: "Deserts",
      img: menu3,
      data: [
        {
          id: 1,
          title: "American Pie",
          price: "Rp. 25.000",
        },
        {
          id: 2,
          title: "Baklava Turki",
          price: "Rp. 25.000",
        },
        {
          id: 3,
          title: "Banoffe",
          price: "Rp. 25.000",
        },
        {
          id: 4,
          title: "Dadar Gulung",
          price: "Rp. 25.000",
        },
      ],
    },
  ];
  const drinks = [
    {
      menuName: "Drinks",
      img: menu4,
      data: [
        {
          id: 1,
          title: "Blackforest Martini",
          price: "Rp. 25.000",
        },
        {
          id: 2,
          title: "Caramel Macchiato",
          price: "Rp. 25.000",
        },
        {
          id: 3,
          title: "Chocolate Milkshake",
          price: "Rp. 25.000",
        },
        {
          id: 4,
          title: "Creamy Espresso Martini",
          price: "Rp. 25.000",
        },
      ],
    },
  ];
  const branch = [
    {
      id: 1,
      img: branch1,
      title: "Jakarta",
      address: "Jl. Jend. Sudirman No. 1, Jakarta",
    },
    {
      id: 2,
      img: branch2,
      title: "Bandung",
      address: "Jl. Jend. Sudirman No. 1, Jakarta",
    },
    {
      id: 3,
      img: branch3,
      title: "Surabaya",
      address: "Jl. Jend. Sudirman No. 1, Jakarta",
    },
  ];
  const contact = [
    {
      title: "Contact",
      phone: "081234567890",
      email: "dapurlezat@gmail.com",
      street: "1959 Sepulveda Blvd.",
      address: "Culver City, CA, 90230",
    },
  ];
  const openTime = [
    {
      title: "Open Time",
      day: "Sunday - Friday",
      time: [
        {
          id: 1,
          eatingTime: "Brunch",
          time: "11:00 - 12:00",
        },
        {
          id: 2,
          eatingTime: "Lunch",
          time: "13:00 - 17:00",
        },
        {
          id: 3,
          eatingTime: "Dinner",
          time: "18:00 - 20:00",
        },
      ],
    },
  ];
  const img1 = "./assets/img/herro-bg.jpg";
  const img2 = "./asset/img/bg-about.jpg";
  const brand = "dapurLezat";
  return (
    <div>
      <Header headerContact={headerContact} />
      <NavbarComponent navLinks={navLinks} brand={brand} />
      <Hero img1={img1} />
      <About aboutCard={aboutCard} img2={img2} />
      <Menu
        starters={starters}
        mainCourses={mainCourses}
        deserts={deserts}
        drinks={drinks}
      />
      <Branch branch={branch} />
      <FooterComponent
        brand={brand}
        openTime={openTime}
        contact={contact}
        credit={"© 2023 DapurLezat Inc. All rights Reserved"}
      />
    </div>
  );
};

export default App;
