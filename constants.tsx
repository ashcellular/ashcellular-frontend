
import { Product, Plan } from './types';

export const STORE_INFO = {
  name: "Ash Cellular",
  partnerBrand: "Total Wireless",
  franchise: "Ash Cellular PA LLC",
  address: "831 Bowman Street, Lebanon, PA 17046",
  phone: "+1-551-359-1863",
  domain: "ashcellular.com",
  hours: {
    mon_sat: "10:00 AM - 8:00 PM",
    sun: "11:00 AM - 5:00 PM"
  },
  colors: {
    primary: "#ed0000", // Total Wireless Red
    brandBlack: "#000000", // Ash Cellular primary text
    secondary: "#ffffff",
    accent: "#f4f4f4"
  }
};

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 999.99,
    category: "phone",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800",
    description: "The first iPhone with an aerospace‑grade titanium design.",
    specs: ["A17 Pro chip", "48MP Main camera", "6.1-inch display"]
  },
  {
    id: "p2",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1199.99,
    category: "phone",
    image: "https://images.unsplash.com/photo-1707153123891-9878206f363c?auto=format&fit=crop&q=80&w=800",
    description: "Unleash new ways to create, connect and more with Galaxy AI.",
    specs: ["200MP Camera", "S Pen included", "6.8-inch display"]
  },
  {
    id: "p3",
    name: "Moto G Power 5G",
    brand: "Motorola",
    price: 199.99,
    category: "phone",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800",
    description: "Exceptional 5G speed and massive battery life.",
    isOffer: true
  },
  {
    id: "p4",
    name: "AirPods Pro (2nd Gen)",
    brand: "Apple",
    price: 249.99,
    category: "accessory",
    image: "https://images.unsplash.com/photo-1588423770674-f2855ee82639?auto=format&fit=crop&q=80&w=800",
    description: "Magical audio experience with active noise cancellation."
  },
  {
    id: "p5",
    name: "OtterBox Defender Case",
    brand: "OtterBox",
    price: 59.99,
    category: "accessory",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800",
    description: "Legendary protection for your new device."
  },
  {
    id: "p6",
    name: "Fast Charging Block 25W",
    brand: "Generic",
    price: 19.99,
    category: "accessory",
    image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800",
    description: "Get your device powered up in minutes."
  }
];

export const PLANS: Plan[] = [
  {
    id: "plan1",
    name: "Essential",
    price: 30,
    data: "5GB High-Speed",
    features: ["Unlimited Talk & Text", "Nationwide 5G", "No Contract"],
    color: "bg-red-600"
  },
  {
    id: "plan2",
    name: "Power User",
    price: 50,
    data: "Unlimited High-Speed",
    features: ["10GB Hotspot", "Disney+ Included", "International Calling"],
    color: "bg-red-700"
  },
  {
    id: "plan3",
    name: "Family Share",
    price: 100,
    data: "Unlimited (4 Lines)",
    features: ["Best Value", "Shared Data Rewards", "VIP Support"],
    color: "bg-black"
  }
];
