import React, { useState, useEffect } from 'react';

export default function App() {
  // Lead submission state variables
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', systemSize: 'Basic Backup' });
  const [submitted, setSubmitted] = useState(false);
  const [savedLeads, setSavedLeads] = useState([]);

  // Load mock data/leads into localStorage to demonstrate functionality without a backend
  useEffect(() => {
    const leads = JSON.parse(localStorage.getItem('meta_ads_leads')) || [];
    setSavedLeads(leads);
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return alert("Please fill in your details");
    
    const existingLeads = JSON.parse(localStorage.getItem('meta_ads_leads')) || [];
    const updatedLeads = [...existingLeads, { ...formData, date: new Date().toLocaleDateString() }];
    localStorage.setItem('meta_ads_leads', JSON.stringify(updatedLeads));
    
    setSubmitted(true);
    setFormData({ name: '', phone: '', location: '', systemSize: 'Basic Backup' });
  };

  // Modern UI Color Palette System
  const colors = {
    darkBlue: '#0A192F',
    brightBlue: '#172A45',
    accentBlue: '#3066BE',
    white: '#FFFFFF',
    lightGray: '#F4F6F9',
    textMuted: '#edf0f7'
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: colors.darkBlue, color: colors.white, minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* 1. Header & Navigation */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: colors.brightBlue, borderBottom: `1px solid ${colors.accentBlue}` }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px' }}>
          SAFARI<span style={{ color: colors.accentBlue }}>VOLT</span>
        </div>
        <a href="#quote-form" style={{ backgroundColor: colors.white, color: colors.darkBlue, padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', textDecoration: 'none', transition: '0.3s' }}>
          Get Free Estimate
        </a>
      </header>

      {/* 2. Hero Section (Crucial for Meta Ads conversion) */}
      <section style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ color: colors.accentBlue, textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '2px', fontSize: '14px' }}>
          Say Goodbye to Power Blackouts in Kenya
        </span>
        <h1 style={{ color: colors.white, fontSize: '42px', marginTop: '10px', lineHeight: '1.2' }}>
          Reliable Solar Power Outfits For Your Home & Business.
        </h1>
        <p style={{ color: colors.textMuted, fontSize: '18px', maxWidth: '600px', margin: '20px auto 30px auto' }}>
          High-performance lithium batteries and premium solar panel installations across Nairobi and nationwide. 25-Year Warranty included.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <a href="#quote-form" style={{ backgroundColor: colors.accentBlue, color: colors.white, padding: '15px 30px', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>
            Book Consultation
          </a>
          <a href="#packages" style={{ border: `2px solid ${colors.white}`, color: colors.white, padding: '13px 30px', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>
            View Packages
          </a>
        </div>
      </section>

      {/* 3. Value Props Grid */}
      <section style={{ backgroundColor: colors.brightBlue, padding: '5px 20px 50px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', paddingTop: '40px' }}>
          <div style={{ padding: '25px', background: colors.darkBlue, borderRadius: '8px', borderLeft: `4px solid ${colors.accentBlue}` }}>
            <h3 style={{ marginTop: 0 }}>⚡ Zero Blackouts</h3>
            <p style={{ color: colors.textMuted, fontSize: '14px', marginBottom: 0 }}>Automatic switch-over protects your home appliances and remote office routines instantly when KPLC goes off.</p>
          </div>
          <div style={{ padding: '25px', background: colors.darkBlue, borderRadius: '8px', borderLeft: `4px solid ${colors.accentBlue}` }}>
            <h3 style={{ marginTop: 0 }}>💰 Cut Power Bills</h3>
            <p style={{ color: colors.textMuted, fontSize: '14px', marginBottom: 0 }}>Harness Kenya's abundant sunshine to power heavy consumers like instant showers, fridges, and water pumps.</p>
          </div>
          <div style={{ padding: '25px', background: colors.darkBlue, borderRadius: '8px', borderLeft: `4px solid ${colors.accentBlue}` }}>
            <h3 style={{ marginTop: 0 }}>🔧 Certified Engineers</h3>
            <p style={{ color: colors.textMuted, fontSize: '14px', marginBottom: 0 }}>EPRA-certified design and installation teams ensure optimal system longevity and optimal safety configurations.</p>
          </div>
        </div>
      </section>

      {/* 4. Interactive Packages & Pricing Split */}
      <section id="packages" style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Transparent System Pricing</h2>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {/* Card 1 */}
          <div style={{ backgroundColor: colors.brightBlue, flex: '1', minWidth: '300px', maxWidth: '400px', padding: '30px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3>Basic Power Backup</h3>
            <div style={{ fontSize: '32px', fontWeight: 'bold', margin: '15px 0', color: colors.white }}>KSh 145,000</div>
            <p style={{ color: colors.textMuted, fontSize: '14px' }}>Ideal for Apartments & Small Estates facing regular grid failure.</p>
            <hr style={{ borderColor: colors.accentBlue, opacity: 0.3 }} />
            <ul style={{ textAlign: 'left', fontSize: '14px', lineHeight: '2', paddingLeft: '20px', color: colors.textMuted }}>
              <li>1.5kW Hybrid Pure Sine Inverter</li>
              <li>100Ah Lithium-Ion Battery Bank</li>
              <li>Powers: TV, Wi-Fi, Lights, Fridge, Laptops</li>
              <li>1-Day Professional Deployment</li>
            </ul>
          </div>

          {/* Card 2 - Highlighted */}
          <div style={{ backgroundColor: colors.white, color: colors.darkBlue, flex: '1', minWidth: '300px', maxWidth: '400px', padding: '30px', borderRadius: '10px', textAlign: 'center', transform: 'scale(1.03)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <span style={{ backgroundColor: colors.accentBlue, color: colors.white, padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>MOST POPULAR</span>
            <h3 style={{ marginTop: '10px' }}>Full Residential Solar</h3>
            <div style={{ fontSize: '32px', fontWeight: 'bold', margin: '15px 0' }}>KSh 395,000</div>
            <p style={{ color: '#555', fontSize: '14px' }}>Complete grid independence for modern 3-4 bedroom homes.</p>
            <hr style={{ borderColor: '#ddd' }} />
            <ul style={{ textAlign: 'left', fontSize: '14px', lineHeight: '2', paddingLeft: '20px', color: '#444' }}>
              <li>3.5kW High-Efficiency Hybrid Inverter</li>
              <li>4x 450W Mono-Crystalline Panels</li>
              <li>200Ah Smart Lithium Storage Pack</li>
              <li>Powers: Microwaves, Washers, Pumps & Full Lighting</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. Converstion Lead Form Section */}
      <section id="quote-form" style={{ backgroundColor: colors.brightBlue, padding: '60px 20px' }}>
        <div style={{ maxWidth: '550px', margin: '0 auto', background: colors.darkBlue, padding: '40px', borderRadius: '12px', border: `1px solid ${colors.accentBlue}` }}>
          <h3 style={{ textAlign: 'center', marginTop: 0, fontSize: '24px' }}>Get a Free Customized Quote</h3>
          <p style={{ textAlign: 'center', color: colors.textMuted, fontSize: '14px', marginTop: '-10px', marginBottom: '30px' }}>
            Fill out this quick brief and our engineering field team will contact you within 15 minutes.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <div style={{ fontSize: '48px' }}>✅</div>
              <h4>Asante! Request Received</h4>
              <p style={{ color: colors.textMuted }}>Our expert engineer will call you shortly on the provided phone number.</p>
              <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: 'none', color: colors.accentBlue, textDecoration: 'underline', cursor: 'pointer' }}>Submit another inquiry</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Your Full Name *</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="e.g. John Kamau" style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: colors.brightBlue, color: colors.white, boxSizing: 'border-box' }} required />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Phone Number (WhatsApp Preferred) *</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="e.g. 0712345678" style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: colors.brightBlue, color: colors.white, boxSizing: 'border-box' }} required />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Your Location / Town *</label>
                <input type="text" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} placeholder="e.g. Kilimani, Eldoret, Syokimau" style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: colors.brightBlue, color: colors.white, boxSizing: 'border-box' }} required />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Select System Intent</label>
                <select value={formData.systemSize} onChange={(e) => setFormData({...formData, systemSize: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: colors.brightBlue, color: colors.white, boxSizing: 'border-box' }}>
                  <option value="Basic Backup">Basic Power Backup Only (No Panels)</option>
                  <option value="Full Residential">Full Residential Solar System Integration</option>
                  <option value="Commercial">Commercial/Industrial Scale Upgrade</option>
                </select>
              </div>

              <button type="submit" style={{ width: '100%', backgroundColor: colors.white, color: colors.darkBlue, padding: '15px', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '10px' }}>
                Request Callback Now ➔
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 6. Meta Ads Performance Testing Utility (Visible Only for debugging/demoing leads) */}
      <section style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontSize: '13px', opacity: 0.8 }}>
        <div style={{ padding: '20px', border: '1px dashed #3066BE', borderRadius: '5px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: colors.accentBlue }}>Meta Ads Lead QA Panel (Local Device Simulator)</h4>
          <p style={{ margin: '0 0 15px 0' }}>When running tests on Meta ads without a real backend database, your captured leads populate safely below instantly:</p>
          {savedLeads.length === 0 ? (
            <p style={{ color: colors.textMuted, fontStyle: 'italic' }}>No conversions on this machine yet. Test the submit form above to watch it fire.</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                  <th style={{ padding: '5px' }}>Name</th>
                  <th style={{ padding: '5px' }}>Phone</th>
                  <th style={{ padding: '5px' }}>Location</th>
                  <th style={{ padding: '5px' }}>System</th>
                </tr>
              </thead>
              <tbody>
                {savedLeads.map((lead, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <td style={{ padding: '5px' }}>{lead.name}</td>
                    <td style={{ padding: '5px' }}>{lead.phone}</td>
                    <td style={{ padding: '5px' }}>{lead.location}</td>
                    <td style={{ padding: '5px' }}>{lead.systemSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      {/* 7. Footer */}
      <footer style={{ backgroundColor: '#050D1A', padding: '30px 20px', textAlign: 'center', fontSize: '14px', color: colors.textMuted, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p>© {new Date().getFullYear()} SafariVolt Solar Solutions Kenya. All Rights Reserved.</p>
      </footer>
    </div>
  );
}