// img: "images/photo.jpg" لکھیں تو اصل تصویر آئے گی، خالی ہو تو رنگین نمونہ
const FEATURED = {
  date: "Oct. 21, 2026",
  cat: "Holiday",
  title: "These are the top 10 bestselling kids' Halloween costumes on Amazon right now",
  excerpt: "Sample text: yahan article ka chhota khulasa likhein, jo title ke neeche nazar aata hai.",
  related: [
    "Halloween costume trends 2026: Horror, pop culture and mythology rule",
    "Google unveils top-trending Halloween costumes of 2026",
    "9 Halloween costumes that let your evil cat shine"
  ],
  images: [
    { img: "", bg: "linear-gradient(#6a2c5a,#f0914d)", icon: "🥼" },
    { img: "", bg: "linear-gradient(#f0914d,#3c1a4a)", icon: "👽" },
    { img: "", bg: "linear-gradient(135deg,#7a3a7a,#e8903f)", icon: "🦖" },
    { img: "", bg: "#e07a10", icon: "🕷️" }
  ]
};

const LATEST = [
  { date: "Oct. 20, 2026", cat: "Home", title: "Amazon’s bestselling cordless vacuum is under $100 and has nearly 3K 5-star reviews" },
  { date: "Oct. 21, 2026", cat: "Beauty & Personal Care", title: "This Revlon hair dryer was purchased over 20K times this month and is less than $30" },
  { date: "Oct. 19, 2026", cat: "Toys & Games", title: "Barbie has a new DreamHouse — in this economy?" },
  { type: "video", date: "Oct. 20, 2026", cat: "Home", title: "Epic Discounts: Home sweet home: Clever finds for your home, self and wallet",
    body: "Sample text: yahan video ki tafseel likhein. Is hisse mein poora article dikhega jo popup ke andar neeche aata hai.",
    products: [
      { brand: "TOLOCO", name: "Massage Gun", img: "", bg: "#f2f2f2", icon: "💆", url: "#" },
      { brand: "Samsung", name: "Galaxy Tab S10 FE", img: "", bg: "#e6f4f1", icon: "📱", url: "#" },
      { brand: "Dyson", name: "V15 Detect Absolute with Car Cleaning Kit", img: "", bg: "#fafafa", icon: "🧹", url: "#" },
      { brand: "Dyson", name: "V8 Cyclone", img: "", bg: "#fafafa", icon: "🧹", url: "#" },
      { brand: "Money.com", name: "Home Equity Loan", img: "", bg: "#cfe6fb", icon: "🏠", url: "#" }
    ] }
];

const DEALS = [
  { title: "Money.com Home Equity Loan", sub: "Best home equity loans of 2026", img: "", bg: "#cfe6fb", icon: "🏠" },
  { title: "Dyson V15 Detect Absolute with Car Cleaning Kit", price: "$599.99", off: "33% OFF", img: "", bg: "#fafafa", icon: "🧹" },
  { title: "TOLOCO Massage Gun", price: "$39.99", off: "50% OFF", img: "", bg: "#f2f2f2", icon: "💆" }
];
