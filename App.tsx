
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Product, CartItem, Order, Plan } from './types';
import { PRODUCTS, PLANS, STORE_INFO } from './constants';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';

// --- Page Components ---

const Home = () => (
  <div className="space-y-16 pb-20">
    {/* Hero Section */}
    <section className="relative h-[650px] flex items-center text-white overflow-hidden rounded-[40px] mx-4 mt-4 shadow-2xl">
      <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1600" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      <div className="relative z-10 space-y-8 px-8 md:px-16 max-w-4xl">
        <div className="flex items-center space-x-4">
          <div className="bg-[#ed0000] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em]">Partner of Total Wireless</div>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
          <span className="text-[#ed0000]">ASH</span> CELLULAR.<br/>LEBANON'S FINEST.
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl leading-relaxed">
          Premium wireless solutions by Ash Cellular. Get Verizon network performance through Total Wireless with local service you can trust at 831 Bowman St.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
          <Link to="/phones" className="bg-[#ed0000] hover:bg-red-700 text-white px-12 py-5 rounded-full font-black text-lg transition-all shadow-2xl shadow-red-500/40 text-center">
            BROWSE PHONES
          </Link>
          <Link to="/plans" className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-full font-black text-lg transition-all shadow-xl text-center">
            VIEW LOCAL PLANS
          </Link>
        </div>
      </div>
    </section>

    {/* Featured Offers */}
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-black tracking-tighter text-gray-900">ASH CELLULAR SPECIALS</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mt-2">Curated by our Lebanon Tech Team</p>
        </div>
        <Link to="/phones" className="text-[#ed0000] font-black hover:translate-x-2 transition-transform inline-flex items-center text-lg uppercase tracking-widest text-sm">
          EXPLORE CATALOG <i className="fas fa-chevron-right ml-2"></i>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {PRODUCTS.filter(p => p.isOffer).slice(0, 3).map(p => (
          <div key={p.id} className="group bg-white rounded-[32px] border border-gray-100 p-8 hover:shadow-2xl transition-all relative overflow-hidden">
            <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-50 border border-gray-50">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">ASH DEAL</span>
                <span className="text-gray-400 font-black text-[10px] uppercase tracking-widest">{p.brand}</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight uppercase leading-none">{p.name}</h3>
              <p className="text-3xl font-black text-[#ed0000] tracking-tighter">${p.price}</p>
              <button 
                onClick={() => alert('Viewing ' + p.name)}
                className="block w-full text-center bg-gray-900 text-white py-4 rounded-full font-black hover:bg-black transition-colors shadow-lg uppercase tracking-widest text-xs"
              >
                SECURE THIS DEAL
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Local Service Props */}
    <section className="bg-gray-50 py-24 rounded-[60px] mx-4 border border-gray-100">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        <div className="space-y-6 group">
          <div className="w-24 h-24 bg-white text-black rounded-3xl flex items-center justify-center text-4xl mx-auto shadow-xl group-hover:bg-[#ed0000] group-hover:text-white transition-all duration-500">
            <i className="fas fa-shipping-fast"></i>
          </div>
          <h3 className="text-2xl font-black tracking-tighter uppercase italic">LEBANON EXPRESS</h3>
          <p className="text-gray-600 font-medium">Ash Cellular provides hyper-local delivery across Lebanon. Get your new device today.</p>
        </div>
        <div className="space-y-6 group">
          <div className="w-24 h-24 bg-white text-black rounded-3xl flex items-center justify-center text-4xl mx-auto shadow-xl group-hover:bg-[#ed0000] group-hover:text-white transition-all duration-500">
            <i className="fas fa-store"></i>
          </div>
          <h3 className="text-2xl font-black tracking-tighter uppercase italic">VIP BOWMAN PICKUP</h3>
          <p className="text-gray-600 font-medium">Order on ashcellular.com and we'll have it waiting for you at 831 Bowman St in 30 minutes.</p>
        </div>
        <div className="space-y-6 group">
          <div className="w-24 h-24 bg-white text-black rounded-3xl flex items-center justify-center text-4xl mx-auto shadow-xl group-hover:bg-[#ed0000] group-hover:text-white transition-all duration-500">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="text-2xl font-black tracking-tighter uppercase italic">ASH QUALITY SEAL</h3>
          <p className="text-gray-600 font-medium">Every phone sold by Ash Cellular is certified and comes with our local service guarantee.</p>
        </div>
      </div>
    </section>
  </div>
);

const ProductsPage = ({ category, onAddToCart }: { category?: string, onAddToCart: (p: Product) => void }) => {
  const filtered = category ? PRODUCTS.filter(p => p.category === category) : PRODUCTS;
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex items-center space-x-4 mb-12">
        <h1 className="text-5xl font-black tracking-tighter uppercase">{category ? category + 's' : 'Our Inventory'}</h1>
        <div className="h-10 w-1 bg-[#ed0000]"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filtered.map(product => (
          <div key={product.id} className="bg-white rounded-[32px] border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all">
            <div className="h-72 overflow-hidden relative bg-gray-50 p-6">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
              {product.isOffer && (
                <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  ASH FAV
                </div>
              )}
            </div>
            <div className="p-8">
              <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">{product.brand}</div>
              <h3 className="text-xl font-black mb-6 line-clamp-1 uppercase tracking-tight">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-black tracking-tighter">${product.price}</span>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="bg-black hover:bg-[#ed0000] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg shadow-black/10"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlansPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-20">
    <div className="text-center mb-20 space-y-4">
      <h1 className="text-5xl font-black tracking-tighter uppercase">ASH CELLULAR CONNECTIVITY</h1>
      <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Powered by the Total Wireless 5G Network</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {PLANS.map(plan => (
        <div key={plan.id} className="bg-white rounded-[40px] border-2 border-gray-100 p-10 flex flex-col hover:border-black transition-all hover:-translate-y-2 group shadow-xl">
          <div className="space-y-8 flex-1">
            <h3 className="text-3xl font-black tracking-tighter uppercase italic">{plan.name}</h3>
            <div className="flex items-baseline">
              <span className="text-5xl font-black text-black tracking-tighter">${plan.price}</span>
              <span className="text-gray-400 font-black ml-1 uppercase text-sm tracking-widest">/mo</span>
            </div>
            <div className="text-xl font-black bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-200 text-[#ed0000] text-center tracking-tight">
              {plan.data}
            </div>
            <ul className="space-y-5">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-700 font-bold text-sm">
                  <i className="fas fa-check text-[#ed0000]"></i>
                  <span className="uppercase tracking-tight">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-12 w-full py-5 rounded-full bg-black text-white font-black hover:bg-[#ed0000] transition-all shadow-xl shadow-black/10 tracking-widest text-xs uppercase">
            JOIN ASH CELLULAR
          </button>
        </div>
      ))}
    </div>
  </div>
);

const CartPage = ({ cart, onUpdateQty, onRemove, onCheckout }: { 
  cart: CartItem[], 
  onUpdateQty: (id: string, delta: number) => void, 
  onRemove: (id: string) => void,
  onCheckout: (type: 'pickup' | 'delivery') => void
}) => {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-8">
        <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-5xl text-gray-200 border-2 border-dashed border-gray-200">
          <i className="fas fa-box-open"></i>
        </div>
        <h2 className="text-4xl font-black tracking-tighter uppercase">Your Bag is Empty</h2>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Explore Lebanon's best tech inventory at Ash Cellular.</p>
        <Link to="/phones" className="inline-block bg-black text-white px-12 py-5 rounded-full font-black tracking-widest uppercase hover:bg-[#ed0000] transition-all shadow-xl">START SHOPPING</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-black tracking-tighter mb-12 uppercase">ASH Bag</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          {cart.map(item => (
            <div key={item.product.id} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <img src={item.product.image} className="w-24 h-24 object-contain" />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-black text-xl tracking-tight uppercase">{item.product.name}</h3>
                <p className="text-gray-400 font-black text-sm uppercase tracking-widest">{item.product.brand}</p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 px-4 py-2">
                  <button onClick={() => onUpdateQty(item.product.id, -1)} className="font-black hover:text-[#ed0000]">-</button>
                  <span className="px-6 font-black text-lg">{item.quantity}</span>
                  <button onClick={() => onUpdateQty(item.product.id, 1)} className="font-black hover:text-[#ed0000]">+</button>
                </div>
                <button onClick={() => onRemove(item.product.id)} className="text-gray-200 hover:text-red-500 transition-colors p-2">
                  <i className="fas fa-times-circle text-2xl"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="space-y-8">
          <div className="bg-black p-10 rounded-[40px] text-white shadow-2xl space-y-8">
            <h2 className="text-3xl font-black tracking-tighter uppercase">Order Summary</h2>
            <div className="space-y-4 font-bold uppercase tracking-widest text-[10px] text-gray-500">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Sales Tax (PA)</span>
                <span className="text-white">${(total * 0.06).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-800 pt-6 flex justify-between text-3xl font-black tracking-tighter text-white italic">
                <span>TOTAL</span>
                <span className="text-[#ed0000]">${(total * 1.06).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="space-y-4 pt-4">
              <button 
                onClick={() => onCheckout('pickup')}
                className="w-full bg-[#ed0000] text-white py-5 rounded-full font-black tracking-widest text-xs uppercase hover:bg-red-700 transition-all shadow-xl"
              >
                In-Store Pickup (831 Bowman)
              </button>
              <button 
                onClick={() => onCheckout('delivery')}
                className="w-full bg-white text-black py-5 rounded-full font-black tracking-widest text-xs uppercase hover:bg-gray-100 transition-all"
              >
                Local Ash Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReceiptPage = ({ order }: { order: Order | null }) => {
  if (!order) return <div className="p-20 text-center font-black">NO ORDER FOUND.</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-gray-100 space-y-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#ed0000] blur-[120px] opacity-10"></div>
        <div className="text-center space-y-6">
           <div className="flex flex-col items-center">
              <span className="text-4xl font-black tracking-tighter text-black uppercase leading-none">ASH CELLULAR</span>
              <span className="text-xs font-bold text-[#ed0000] tracking-[0.4em] uppercase mt-2">Total Wireless Authorized</span>
           </div>
          <div className="text-[10px] font-black text-gray-400 space-y-1 uppercase tracking-widest">
            <p>{STORE_INFO.address}</p>
            <p>PH: {STORE_INFO.phone}</p>
            <p>ASHCELLULAR.COM</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-6 space-y-3 text-[10px] font-black uppercase tracking-widest">
          <div className="flex justify-between"><span>ORDER ID:</span><span>{order.id}</span></div>
          <div className="flex justify-between"><span>DATE:</span><span>{order.timestamp}</span></div>
          <div className="flex justify-between text-[#ed0000]"><span>SERVICE:</span><span>{order.type}</span></div>
        </div>

        <div className="space-y-6">
          <div className="text-[10px] font-black border-b border-gray-100 pb-2 uppercase tracking-widest text-gray-300">Items</div>
          {order.items.map(item => (
            <div key={item.product.id} className="flex justify-between text-sm font-black uppercase">
              <span className="flex-1">{item.quantity}X {item.product.name}</span>
              <span className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-black pt-8 space-y-3">
          <div className="flex justify-between text-[10px] font-black text-gray-400 tracking-widest">
            <span>SUBTOTAL</span>
            <span>${(order.total / 1.06).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-4xl font-black tracking-tighter italic">
            <span>TOTAL</span>
            <span className="text-[#ed0000]">${order.total.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-center pt-10 space-y-8">
          <div className="flex justify-center">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=AshCellular-Receipt" alt="QR" className="w-32 h-32 p-2 border border-gray-100 rounded-2xl" />
          </div>
          <p className="text-[10px] font-black tracking-widest uppercase text-gray-400">Thank you for supporting Ash Cellular PA LLC.<br/>A local Lebanon small business.</p>
        </div>
      </div>
      <div className="mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 print:hidden">
        <button onClick={() => window.print()} className="bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-3 hover:bg-gray-800 transition-all">
          <i className="fas fa-print"></i>
          <span>Print Receipt</span>
        </button>
        <Link to="/" className="bg-[#ed0000] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center hover:bg-red-700 transition-all shadow-xl">
          Back to Shop
        </Link>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-24 right-4 bg-black text-white px-8 py-4 rounded-full shadow-2xl z-[100] font-black uppercase tracking-widest text-xs animate-slide-up ring-4 ring-white';
    toast.innerText = `${product.name} ADDED TO BAG`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeProduct = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const processCheckout = (type: 'pickup' | 'delivery') => {
    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0) * 1.06;
    const newOrder: Order = {
      id: "ASH-" + Math.random().toString(36).substr(2, 6).toUpperCase(),
      items: [...cart],
      total,
      customerName: "VALUED GUEST",
      type,
      timestamp: new Date().toLocaleString()
    };
    setLastOrder(newOrder);
    setCart([]);
    window.location.hash = "/receipt";
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar cartCount={cartCount} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/phones" element={<ProductsPage category="phone" onAddToCart={handleAddToCart} />} />
            <Route path="/accessories" element={<ProductsPage category="accessory" onAddToCart={handleAddToCart} />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/cart" element={<CartPage cart={cart} onUpdateQty={updateQty} onRemove={removeProduct} onCheckout={processCheckout} />} />
            <Route path="/receipt" element={<ReceiptPage order={lastOrder} />} />
            <Route path="/contact" element={
              <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="space-y-12">
                  <div className="space-y-4">
                    <h1 className="text-6xl font-black tracking-tighter text-black uppercase">ASH CELLULAR HQ</h1>
                    <p className="text-xl text-gray-500 font-bold uppercase tracking-widest text-sm">831 Bowman Street, Lebanon, PA</p>
                  </div>
                  
                  <div className="space-y-10 font-black uppercase tracking-widest text-xs">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gray-100 text-black rounded-2xl flex items-center justify-center text-2xl shrink-0">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h4 className="text-gray-400 mb-1 italic">Find Us</h4>
                        <p className="text-lg leading-tight">{STORE_INFO.address}</p>
                        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_INFO.address)}`} target="_blank" className="text-[#ed0000] mt-4 inline-block hover:underline">Launch Directions</a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gray-100 text-black rounded-2xl flex items-center justify-center text-2xl shrink-0">
                        <i className="fas fa-mobile-alt"></i>
                      </div>
                      <div>
                        <h4 className="text-gray-400 mb-1 italic">Call Ash Cellular</h4>
                        <p className="text-lg leading-tight">{STORE_INFO.phone}</p>
                        <p className="text-[#ed0000] mt-1">Available {STORE_INFO.hours.mon_sat}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gray-100 text-black rounded-2xl flex items-center justify-center text-2xl shrink-0">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div>
                        <h4 className="text-gray-400 mb-1 italic">Showroom Hours</h4>
                        <p className="text-sm">MON-SAT: {STORE_INFO.hours.mon_sat}</p>
                        <p className="text-sm">SUN: {STORE_INFO.hours.sun}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[40px] overflow-hidden shadow-2xl h-[600px] border border-gray-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.857621455246!2d-76.416801!3d40.334468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8a996f014e4ef%3A0xc3f982d1c678a9c4!2s831%20Bowman%20St%2C%20Lebanon%2C%20PA%2017046!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            } />
          </Routes>
        </main>

        <footer className="bg-black text-white pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="space-y-8">
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter uppercase leading-none">ASH CELLULAR</span>
                <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mt-1">Lebanon PA HQ</span>
              </div>
              <p className="text-gray-500 text-xs font-bold leading-relaxed uppercase tracking-widest">Authorized Total Wireless Retailer. Locally owned and operated by Ash Cellular PA LLC.</p>
              <div className="flex space-x-6 text-xl">
                <a href="#" className="text-gray-400 hover:text-[#ed0000] transition-colors"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-[#ed0000] transition-colors"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-[#ed0000] transition-colors"><i className="fab fa-tiktok"></i></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-black italic text-sm uppercase tracking-[0.3em] mb-8 text-gray-300">Services</h4>
              <ul className="space-y-5 text-[10px] font-black uppercase tracking-widest text-gray-500">
                <li><Link to="/phones" className="hover:text-white transition-colors">Phone Inventory</Link></li>
                <li><Link to="/plans" className="hover:text-white transition-colors">Plan Builder</Link></li>
                <li><Link to="/accessories" className="hover:text-white transition-colors">Case & Protection</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">In-Store Setup</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black italic text-sm uppercase tracking-[0.3em] mb-8 text-gray-300">Policy</h4>
              <ul className="space-y-5 text-[10px] font-black uppercase tracking-widest text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coverage Maps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Terms</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black italic text-sm uppercase tracking-[0.3em] mb-8 text-gray-300">Newsletter</h4>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-6">SMS alerts for Ash Cellular drops.</p>
              <div className="flex bg-gray-900 p-1 rounded-full border border-gray-800">
                <input type="text" placeholder="PHONE" className="bg-transparent border-none px-6 py-3 rounded-full w-full focus:outline-none text-white text-xs font-black" />
                <button className="bg-[#ed0000] px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-red-700 transition-all">JOIN</button>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 border-t border-gray-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-700">&copy; {new Date().getFullYear()} ASH CELLULAR PA LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-12">
               <div className="bg-[#ed0000] px-4 py-1.5 rounded-full">
                <span className="text-white font-black text-[10px] tracking-tighter italic">total wireless</span>
              </div>
            </div>
          </div>
        </footer>

        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
