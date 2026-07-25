'use client';

import React, { useState, useEffect } from 'react';
import {
  Lock,
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  Settings as SettingsIcon,
  Sparkles,
  HelpCircle,
  FileText,
  UserCheck,
  Plus,
  Trash2,
  Edit3,
  LogOut,
  Save,
  CheckCircle,
  Clock,
  Archive,
  Phone,
  Mail,
  Loader2
} from 'lucide-react';
import { DatabaseSchema, Enquiry } from '@/lib/db';
import { Service, PortfolioItem, Testimonial, FAQ, Blog, Settings } from '@/lib/data';

export default function AdminDashboard() {
  const [passcode, setPasscode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'leads' | 'services' | 'portfolio' | 'testimonials' | 'faqs' | 'blogs' | 'settings'>('leads');
  const [db, setDb] = useState<DatabaseSchema | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Form states for adding/editing items
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [showFormModal, setShowFormModal] = useState(false);

  // Load passcode from local storage on load
  useEffect(() => {
    const saved = localStorage.getItem('royalvista_admin_passcode');
    if (saved) {
      setPasscode(saved);
      verifyAndLoad(saved);
    }
  }, []);

  const verifyAndLoad = async (codeToVerify: string) => {
    setIsLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/admin', {
        headers: {
          'x-admin-passcode': codeToVerify
        }
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthorized(true);
        setDb(data.db);
        localStorage.setItem('royalvista_admin_passcode', codeToVerify);
      } else {
        setAuthError(data.error || 'Invalid Passcode');
        localStorage.removeItem('royalvista_admin_passcode');
      }
    } catch (err) {
      setAuthError('Connection failed. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode) return;
    verifyAndLoad(passcode);
  };

  const handleLogout = () => {
    localStorage.removeItem('royalvista_admin_passcode');
    setPasscode('');
    setIsAuthorized(false);
    setDb(null);
  };

  // Perform API posts
  const runAdminAction = async (action: string, payload: any) => {
    setActionLoading(true);
    setMessage({ text: '', type: '' });
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-passcode': passcode
        },
        body: JSON.stringify({ action, payload })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setMessage({ text: 'Action completed successfully!', type: 'success' });
        // Reload data
        verifyAndLoad(passcode);
        setShowFormModal(false);
        setEditingItem(null);
      } else {
        setMessage({ text: data.error || 'Action failed', type: 'error' });
      }
    } catch (err: any) {
      setMessage({ text: 'API error: ' + err.message, type: 'error' });
    } finally {
      setActionLoading(false);
      // Auto clear message
      setTimeout(() => setMessage({ text: '', type: '' }), 4000);
    }
  };

  // Login Screen
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 text-sm font-sans">
        <div className="w-full max-w-md bg-neutral-950 border border-neutral-900 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Accent light */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
          
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-neutral-900 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-500 shadow-md">
              <Lock size={22} />
            </div>
            <h1 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider">
              Studio Portal
            </h1>
            <p className="text-neutral-500 text-xs mt-1">
              Enter admin passcode to unlock dashboard access.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {authError && (
              <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-xl text-red-400 text-xs text-center">
                {authError}
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="code" className="text-neutral-400 uppercase tracking-widest text-[10px] font-medium">
                Admin Passcode
              </label>
              <input
                type="password"
                id="code"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/80 tracking-widest text-center"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-amber-500 text-black font-semibold uppercase tracking-widest rounded-xl transition-all shadow-[0_4px_15px_rgba(245,158,11,0.2)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <span>Unlock Portal</span>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard Loaded
  return (
    <div className="min-h-screen bg-black text-neutral-300 flex flex-col font-sans">
      
      {/* Top Banner */}
      <header className="bg-neutral-950 border-b border-neutral-900 py-4 px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-neutral-900 border border-amber-500/30 flex items-center justify-center">
            <span className="text-amber-400 font-bold text-xs font-serif">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xs uppercase tracking-widest font-semibold font-serif">Royal Vista Studio</span>
            <span className="text-neutral-500 text-[8px] tracking-wider uppercase -mt-0.5">Admin Management</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-neutral-500 text-[10px] uppercase tracking-widest hidden sm:inline">
            Status: Authorized
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-red-500/80 hover:text-red-400 hover:bg-red-500/10 border border-red-500/10 px-3.5 py-2 rounded-lg transition-all cursor-pointer"
          >
            <LogOut size={12} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Grid Workspace */}
      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* Sidebar Nav */}
        <aside className="w-full lg:w-64 bg-neutral-950/40 border-b lg:border-b-0 lg:border-r border-neutral-900 p-4 space-y-2 shrink-0">
          <div className="text-neutral-600 text-[9px] uppercase tracking-widest font-bold px-3 py-2">
            Categories
          </div>
          
          <button
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs uppercase tracking-widest transition-all text-left cursor-pointer ${
              activeTab === 'leads' ? 'bg-amber-500/10 text-amber-400 border-l-2 border-amber-500 font-medium' : 'text-neutral-500 hover:text-white'
            }`}
          >
            <LayoutDashboard size={14} />
            <span>Leads ({db?.enquiries?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs uppercase tracking-widest transition-all text-left cursor-pointer ${
              activeTab === 'services' ? 'bg-amber-500/10 text-amber-400 border-l-2 border-amber-500 font-medium' : 'text-neutral-500 hover:text-white'
            }`}
          >
            <Sparkles size={14} />
            <span>Services ({db?.services?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('portfolio')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs uppercase tracking-widest transition-all text-left cursor-pointer ${
              activeTab === 'portfolio' ? 'bg-amber-500/10 text-amber-400 border-l-2 border-amber-500 font-medium' : 'text-neutral-500 hover:text-white'
            }`}
          >
            <Briefcase size={14} />
            <span>Portfolio ({db?.portfolio?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs uppercase tracking-widest transition-all text-left cursor-pointer ${
              activeTab === 'testimonials' ? 'bg-amber-500/10 text-amber-400 border-l-2 border-amber-500 font-medium' : 'text-neutral-500 hover:text-white'
            }`}
          >
            <UserCheck size={14} />
            <span>Testimonials</span>
          </button>

          <button
            onClick={() => setActiveTab('faqs')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs uppercase tracking-widest transition-all text-left cursor-pointer ${
              activeTab === 'faqs' ? 'bg-amber-500/10 text-amber-400 border-l-2 border-amber-500 font-medium' : 'text-neutral-500 hover:text-white'
            }`}
          >
            <HelpCircle size={14} />
            <span>FAQs</span>
          </button>

          <button
            onClick={() => setActiveTab('blogs')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs uppercase tracking-widest transition-all text-left cursor-pointer ${
              activeTab === 'blogs' ? 'bg-amber-500/10 text-amber-400 border-l-2 border-amber-500 font-medium' : 'text-neutral-500 hover:text-white'
            }`}
          >
            <FileText size={14} />
            <span>Blogs</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs uppercase tracking-widest transition-all text-left cursor-pointer ${
              activeTab === 'settings' ? 'bg-amber-500/10 text-amber-400 border-l-2 border-amber-500 font-medium' : 'text-neutral-500 hover:text-white'
            }`}
          >
            <SettingsIcon size={14} />
            <span>Site Settings</span>
          </button>
        </aside>

        {/* Content Panel Workspace */}
        <main className="flex-1 p-6 md:p-10 max-h-[calc(100vh-65px)] overflow-y-auto">
          {/* Notification status bar */}
          {message.text && (
            <div className={`p-4 mb-6 rounded-xl border text-xs flex items-center gap-2 ${
              message.type === 'success' ? 'bg-green-950/20 border-green-900/50 text-green-400' : 'bg-red-950/20 border-red-900/50 text-red-400'
            }`}>
              <span>{message.text}</span>
            </div>
          )}

          {/* TAB 1: LEADS/ENQUIRIES */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                <div>
                  <h2 className="text-xl font-serif text-white uppercase tracking-wider">Leads & Enquiries</h2>
                  <p className="text-neutral-500 text-xs mt-0.5">Submit forms captured from your landing page.</p>
                </div>
              </div>

              <div className="space-y-4">
                {db?.enquiries && db.enquiries.length > 0 ? (
                  db.enquiries.map((enq) => (
                    <div key={enq.id} className="bg-neutral-950 border border-neutral-900 rounded-xl p-5 md:p-6 space-y-4">
                      {/* header details */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-neutral-900/60 pb-3">
                        <div>
                          <span className="text-white text-base font-semibold">{enq.name}</span>
                          <span className="text-neutral-600 text-xs sm:ml-4 block sm:inline">ID: {enq.id}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-neutral-500 text-xs">{enq.date}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold ${
                            enq.status === 'new' ? 'bg-amber-500/10 border border-amber-500/20 text-amber-500' : 
                            enq.status === 'contacted' ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-neutral-800 text-neutral-400'
                          }`}>
                            {enq.status}
                          </span>
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Phone size={12} className="text-amber-500 shrink-0" />
                            <a href={`tel:${enq.phone}`} className="text-neutral-400 hover:text-white underline">{enq.phone}</a>
                          </div>
                          {enq.email && (
                            <div className="flex items-center gap-2">
                              <Mail size={12} className="text-amber-500 shrink-0" />
                              <a href={`mailto:${enq.email}`} className="text-neutral-400 hover:text-white underline">{enq.email}</a>
                            </div>
                          )}
                          <div className="text-neutral-400">
                            Interested Service: <span className="text-amber-400 font-semibold">{enq.service}</span>
                          </div>
                        </div>
                        <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-900">
                          <span className="text-[10px] uppercase tracking-widest text-neutral-600 block mb-1">Message</span>
                          <p className="text-neutral-400 italic">"{enq.message || 'No description provided.'}"</p>
                        </div>
                      </div>

                      {/* actions */}
                      <div className="flex justify-end gap-2 border-t border-neutral-900/60 pt-3">
                        {enq.status === 'new' && (
                          <button
                            onClick={() => runAdminAction('updateEnquiryStatus', { id: enq.id, status: 'contacted' })}
                            className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest bg-blue-950/20 text-blue-400 border border-blue-900/40 px-3 py-1.5 rounded hover:bg-blue-900/30 transition-all cursor-pointer"
                          >
                            <Clock size={10} />
                            <span>Mark Contacted</span>
                          </button>
                        )}
                        {enq.status !== 'archived' && (
                          <button
                            onClick={() => runAdminAction('updateEnquiryStatus', { id: enq.id, status: 'archived' })}
                            className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest bg-neutral-900 text-neutral-400 border border-neutral-800 px-3 py-1.5 rounded hover:bg-neutral-800 transition-all cursor-pointer"
                          >
                            <Archive size={10} />
                            <span>Archive</span>
                          </button>
                        )}
                        <button
                          onClick={() => {
                            if (confirm('Delete lead?')) {
                              runAdminAction('deleteEnquiry', enq.id);
                            }
                          }}
                          className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest bg-red-950/20 text-red-400 border border-red-950 px-3 py-1.5 rounded hover:bg-red-900/30 transition-all cursor-pointer"
                        >
                          <Trash2 size={10} />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-neutral-950 border border-neutral-900 rounded-xl text-neutral-500">
                    No leads received yet.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                <div>
                  <h2 className="text-xl font-serif text-white uppercase tracking-wider">Services List</h2>
                  <p className="text-neutral-500 text-xs mt-0.5">Manage premium animated service cards.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({ id: 'svc-' + Math.random().toString(36).substr(2, 5), title: '', description: '', iconName: 'Video', details: ['', ''] });
                    setShowFormModal(true);
                  }}
                  className="flex items-center gap-2 bg-amber-500 text-black px-4 py-2 rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-amber-600 transition-all cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Add Service</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {db?.services?.map((svc) => (
                  <div key={svc.id} className="bg-neutral-950 border border-neutral-900 p-5 rounded-xl flex justify-between gap-4">
                    <div className="space-y-2">
                      <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                        {svc.iconName}
                      </span>
                      <h3 className="text-white font-serif text-base uppercase tracking-wider pt-2">{svc.title}</h3>
                      <p className="text-neutral-500 text-xs leading-relaxed max-w-sm">{svc.description}</p>
                      <div className="text-[10px] text-neutral-600">Details: {svc.details?.join(', ')}</div>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0 justify-center">
                      <button
                        onClick={() => {
                          setEditingItem({ ...svc });
                          setShowFormModal(true);
                        }}
                        className="p-2 bg-neutral-900 border border-neutral-800 text-amber-500 hover:bg-neutral-850 rounded transition-all cursor-pointer"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete service?')) {
                            runAdminAction('deleteService', svc.id);
                          }
                        }}
                        className="p-2 bg-red-950/20 border border-red-950/60 text-red-400 hover:bg-red-900/30 rounded transition-all cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PORTFOLIO */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                <div>
                  <h2 className="text-xl font-serif text-white uppercase tracking-wider">Portfolio Items</h2>
                  <p className="text-neutral-500 text-xs mt-0.5">Manage portfolio categories, images, and videos.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({ id: 'port-' + Math.random().toString(36).substr(2, 5), title: '', category: 'Weddings', mediaType: 'video', mediaUrl: '', thumbnailUrl: '', description: '', client: '', year: '2026' });
                    setShowFormModal(true);
                  }}
                  className="flex items-center gap-2 bg-amber-500 text-black px-4 py-2 rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-amber-600 transition-all cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Add Project</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {db?.portfolio?.map((item) => (
                  <div key={item.id} className="bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex flex-col justify-between">
                    <div className="relative h-40 bg-neutral-900">
                      <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 text-[9px] font-semibold bg-black/80 px-2 py-1 rounded text-amber-400 uppercase tracking-widest border border-amber-500/20">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-4 space-y-2 flex-grow">
                      <h3 className="text-white text-sm font-serif uppercase tracking-wider truncate">{item.title}</h3>
                      <p className="text-neutral-500 text-xs line-clamp-2">{item.description}</p>
                      <div className="text-[10px] text-neutral-600 uppercase tracking-wider">
                        Client: {item.client} | {item.year}
                      </div>
                    </div>
                    <div className="flex border-t border-neutral-900 text-xs">
                      <button
                        onClick={() => {
                          setEditingItem({ ...item });
                          setShowFormModal(true);
                        }}
                        className="w-1/2 py-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-black flex items-center justify-center gap-1.5 text-neutral-400 transition-colors border-r border-neutral-800 cursor-pointer"
                      >
                        <Edit3 size={12} />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete project?')) {
                            runAdminAction('deletePortfolio', item.id);
                          }
                        }}
                        className="w-1/2 py-2.5 bg-red-950/20 hover:bg-red-900/30 text-red-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Trash2 size={12} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                <div>
                  <h2 className="text-xl font-serif text-white uppercase tracking-wider">Testimonials</h2>
                  <p className="text-neutral-500 text-xs mt-0.5">Manage reviews appearing in testimonials section.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({ id: 'test-' + Math.random().toString(36).substr(2, 5), name: '', role: '', company: '', rating: 5, review: '' });
                    setShowFormModal(true);
                  }}
                  className="flex items-center gap-2 bg-amber-500 text-black px-4 py-2 rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-amber-600 transition-all cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Add Review</span>
                </button>
              </div>

              <div className="space-y-4">
                {db?.testimonials?.map((t) => (
                  <div key={t.id} className="bg-neutral-950 border border-neutral-900 p-5 rounded-xl flex justify-between items-center gap-4">
                    <div>
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: t.rating }).map((_, idx) => (
                          <span key={idx} className="text-amber-400 text-xs">★</span>
                        ))}
                      </div>
                      <p className="text-neutral-300 text-xs italic">"{t.review}"</p>
                      <h4 className="text-white text-xs font-serif uppercase mt-3 tracking-wider">{t.name}</h4>
                      <span className="text-neutral-500 text-[10px] block">{t.role} at {t.company}</span>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      <button
                        onClick={() => {
                          setEditingItem({ ...t });
                          setShowFormModal(true);
                        }}
                        className="p-2 bg-neutral-900 border border-neutral-800 text-amber-500 hover:bg-neutral-850 rounded transition-all cursor-pointer"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete review?')) {
                            runAdminAction('deleteTestimonial', t.id);
                          }
                        }}
                        className="p-2 bg-red-950/20 border border-red-950/60 text-red-400 hover:bg-red-900/30 rounded transition-all cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: FAQS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                <div>
                  <h2 className="text-xl font-serif text-white uppercase tracking-wider">Frequently Asked Questions</h2>
                  <p className="text-neutral-500 text-xs mt-0.5">Manage FAQs organized by category tabs.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({ id: 'faq-' + Math.random().toString(36).substr(2, 5), question: '', answer: '', category: 'General' });
                    setShowFormModal(true);
                  }}
                  className="flex items-center gap-2 bg-amber-500 text-black px-4 py-2 rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-amber-600 transition-all cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Add FAQ</span>
                </button>
              </div>

              <div className="space-y-4">
                {db?.faqs?.map((f) => (
                  <div key={f.id} className="bg-neutral-950 border border-neutral-900 p-5 rounded-xl flex justify-between items-center gap-4">
                    <div className="space-y-2">
                      <span className="text-[10px] text-amber-400 font-semibold bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded uppercase tracking-widest">
                        {f.category}
                      </span>
                      <h4 className="text-white font-serif text-sm uppercase tracking-wider pt-2">{f.question}</h4>
                      <p className="text-neutral-500 text-xs leading-relaxed">{f.answer}</p>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      <button
                        onClick={() => {
                          setEditingItem({ ...f });
                          setShowFormModal(true);
                        }}
                        className="p-2 bg-neutral-900 border border-neutral-800 text-amber-500 hover:bg-neutral-850 rounded transition-all cursor-pointer"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete FAQ?')) {
                            runAdminAction('deleteFAQ', f.id);
                          }
                        }}
                        className="p-2 bg-red-950/20 border border-red-950/60 text-red-400 hover:bg-red-900/30 rounded transition-all cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: BLOGS */}
          {activeTab === 'blogs' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                <div>
                  <h2 className="text-xl font-serif text-white uppercase tracking-wider">Blog Articles</h2>
                  <p className="text-neutral-500 text-xs mt-0.5">Manage articles published on the landing page.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({ id: 'blog-' + Math.random().toString(36).substr(2, 5), title: '', excerpt: '', content: '', image: '', date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }), readTime: '5 min read' });
                    setShowFormModal(true);
                  }}
                  className="flex items-center gap-2 bg-amber-500 text-black px-4 py-2 rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-amber-600 transition-all cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Add Article</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {db?.blogs?.map((b) => (
                  <div key={b.id} className="bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex flex-col justify-between">
                    <div className="relative h-32 bg-neutral-900">
                      <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 space-y-2 flex-grow">
                      <h3 className="text-white text-sm font-serif uppercase tracking-wider truncate">{b.title}</h3>
                      <p className="text-neutral-500 text-xs line-clamp-2">{b.excerpt}</p>
                      <div className="text-[10px] text-neutral-600 uppercase tracking-wider">
                        {b.date} • {b.readTime}
                      </div>
                    </div>
                    <div className="flex border-t border-neutral-900 text-xs">
                      <button
                        onClick={() => {
                          setEditingItem({ ...b });
                          setShowFormModal(true);
                        }}
                        className="w-1/2 py-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-black flex items-center justify-center gap-1.5 text-neutral-400 transition-colors border-r border-neutral-800 cursor-pointer"
                      >
                        <Edit3 size={12} />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete article?')) {
                            runAdminAction('deleteBlog', b.id);
                          }
                        }}
                        className="w-1/2 py-2.5 bg-red-950/20 hover:bg-red-900/30 text-red-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Trash2 size={12} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: SETTINGS */}
          {activeTab === 'settings' && db?.settings && (
            <div className="space-y-6 max-w-2xl">
              <div className="border-b border-neutral-900 pb-4">
                <h2 className="text-xl font-serif text-white uppercase tracking-wider">Site Settings</h2>
                <p className="text-neutral-500 text-xs mt-0.5">Edit general contact details, taglines, and brand missions.</p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  runAdminAction('updateSettings', db.settings);
                }}
                className="space-y-5 text-xs sm:text-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400 uppercase tracking-widest text-[10px] font-medium">Business Name</label>
                    <input
                      type="text"
                      value={db.settings.businessName}
                      onChange={(e) => setDb({ ...db, settings: { ...db.settings, businessName: e.target.value } })}
                      className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400 uppercase tracking-widest text-[10px] font-medium">Experience Level</label>
                    <input
                      type="text"
                      value={db.settings.experience}
                      onChange={(e) => setDb({ ...db, settings: { ...db.settings, experience: e.target.value } })}
                      className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-neutral-400 uppercase tracking-widest text-[10px] font-medium">Tagline / Hook</label>
                  <input
                    type="text"
                    value={db.settings.tagline}
                    onChange={(e) => setDb({ ...db, settings: { ...db.settings, tagline: e.target.value } })}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400 uppercase tracking-widest text-[10px] font-medium">Phone</label>
                    <input
                      type="text"
                      value={db.settings.phone}
                      onChange={(e) => setDb({ ...db, settings: { ...db.settings, phone: e.target.value } })}
                      className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400 uppercase tracking-widest text-[10px] font-medium">WhatsApp</label>
                    <input
                      type="text"
                      value={db.settings.whatsapp}
                      onChange={(e) => setDb({ ...db, settings: { ...db.settings, whatsapp: e.target.value } })}
                      className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400 uppercase tracking-widest text-[10px] font-medium">Email</label>
                    <input
                      type="email"
                      value={db.settings.email}
                      onChange={(e) => setDb({ ...db, settings: { ...db.settings, email: e.target.value } })}
                      className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-neutral-400 uppercase tracking-widest text-[10px] font-medium">Vision Statement</label>
                  <textarea
                    rows={3}
                    value={db.settings.vision}
                    onChange={(e) => setDb({ ...db, settings: { ...db.settings, vision: e.target.value } })}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none resize-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-neutral-400 uppercase tracking-widest text-[10px] font-medium">Mission Statement</label>
                  <textarea
                    rows={3}
                    value={db.settings.mission}
                    onChange={(e) => setDb({ ...db, settings: { ...db.settings, mission: e.target.value } })}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none resize-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-neutral-400 uppercase tracking-widest text-[10px] font-medium">Brand Promise</label>
                  <textarea
                    rows={2}
                    value={db.settings.brandPromise}
                    onChange={(e) => setDb({ ...db, settings: { ...db.settings, brandPromise: e.target.value } })}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={actionLoading}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-amber-500 text-black font-semibold uppercase tracking-widest rounded-xl transition-all shadow-[0_4px_15px_rgba(245,158,11,0.2)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Save size={14} />
                  <span>Save Settings</span>
                </button>
              </form>
            </div>
          )}
        </main>
      </div>

      {/* POPUP MODAL FOR ADDING/EDITING ITEMS */}
      {showFormModal && editingItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-neutral-950 border border-neutral-900 rounded-3xl w-full max-w-xl p-8 space-y-6 shadow-2xl relative">
            <h3 className="text-white text-lg font-serif uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Add / Edit Resource ({activeTab})
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Render dynamic inputs based on tab */}
              {activeTab === 'services' && (
                <>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Service Title</label>
                    <input
                      type="text"
                      value={editingItem.title}
                      onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Description</label>
                    <textarea
                      value={editingItem.description}
                      onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-neutral-400">Lucide Icon Name</label>
                      <input
                        type="text"
                        value={editingItem.iconName}
                        onChange={(e) => setEditingItem({ ...editingItem, iconName: e.target.value })}
                        className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Bullet Points (comma-separated)</label>
                    <input
                      type="text"
                      value={editingItem.details?.join(', ')}
                      onChange={(e) => setEditingItem({ ...editingItem, details: e.target.value.split(',').map((s: string) => s.trim()) })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                    />
                  </div>
                </>
              )}

              {activeTab === 'portfolio' && (
                <>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Project Title</label>
                    <input
                      type="text"
                      value={editingItem.title}
                      onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-neutral-400">Category</label>
                      <select
                        value={editingItem.category}
                        onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                        className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                      >
                        <option>Weddings</option>
                        <option>Corporate</option>
                        <option>Commercial Ads</option>
                        <option>Reels</option>
                        <option>YouTube</option>
                        <option>Documentaries</option>
                        <option>Podcasts</option>
                        <option>Brand Content</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-neutral-400">Media Type</label>
                      <select
                        value={editingItem.mediaType}
                        onChange={(e) => setEditingItem({ ...editingItem, mediaType: e.target.value })}
                        className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                      >
                        <option>image</option>
                        <option>video</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Thumbnail Image URL</label>
                    <input
                      type="text"
                      value={editingItem.thumbnailUrl}
                      onChange={(e) => setEditingItem({ ...editingItem, thumbnailUrl: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Main Media URL (Full Image or Video MP4)</label>
                    <input
                      type="text"
                      value={editingItem.mediaUrl}
                      onChange={(e) => setEditingItem({ ...editingItem, mediaUrl: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-neutral-400">Client</label>
                      <input
                        type="text"
                        value={editingItem.client}
                        onChange={(e) => setEditingItem({ ...editingItem, client: e.target.value })}
                        className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-neutral-400">Year</label>
                      <input
                        type="text"
                        value={editingItem.year}
                        onChange={(e) => setEditingItem({ ...editingItem, year: e.target.value })}
                        className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Project Description</label>
                    <textarea
                      value={editingItem.description}
                      onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white resize-none"
                    />
                  </div>
                </>
              )}

              {activeTab === 'testimonials' && (
                <>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Client Name</label>
                    <input
                      type="text"
                      value={editingItem.name}
                      onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-neutral-400">Role</label>
                      <input
                        type="text"
                        value={editingItem.role}
                        onChange={(e) => setEditingItem({ ...editingItem, role: e.target.value })}
                        className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-neutral-400">Company</label>
                      <input
                        type="text"
                        value={editingItem.company}
                        onChange={(e) => setEditingItem({ ...editingItem, company: e.target.value })}
                        className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Review / Feedback</label>
                    <textarea
                      value={editingItem.review}
                      onChange={(e) => setEditingItem({ ...editingItem, review: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white resize-none"
                    />
                  </div>
                </>
              )}

              {activeTab === 'faqs' && (
                <>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Question</label>
                    <input
                      type="text"
                      value={editingItem.question}
                      onChange={(e) => setEditingItem({ ...editingItem, question: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">FAQ Category</label>
                    <select
                      value={editingItem.category}
                      onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                    >
                      <option>General</option>
                      <option>Services</option>
                      <option>Process</option>
                      <option>Technical</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Answer</label>
                    <textarea
                      rows={3}
                      value={editingItem.answer}
                      onChange={(e) => setEditingItem({ ...editingItem, answer: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white resize-none"
                    />
                  </div>
                </>
              )}

              {activeTab === 'blogs' && (
                <>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Article Title</label>
                    <input
                      type="text"
                      value={editingItem.title}
                      onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-neutral-400">Published Date</label>
                      <input
                        type="text"
                        value={editingItem.date}
                        onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
                        className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-neutral-400">Read Time</label>
                      <input
                        type="text"
                        value={editingItem.readTime}
                        onChange={(e) => setEditingItem({ ...editingItem, readTime: e.target.value })}
                        className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Hero Image URL</label>
                    <input
                      type="text"
                      value={editingItem.image}
                      onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Excerpt / Short Summary</label>
                    <textarea
                      rows={2}
                      value={editingItem.excerpt}
                      onChange={(e) => setEditingItem({ ...editingItem, excerpt: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white resize-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-400">Full Content</label>
                    <textarea
                      rows={6}
                      value={editingItem.content}
                      onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                      className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-white resize-none"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Actions buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t border-neutral-900">
              <button
                onClick={() => {
                  setShowFormModal(false);
                  setEditingItem(null);
                }}
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-xl text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  let actionName = '';
                  if (activeTab === 'services') actionName = 'saveService';
                  else if (activeTab === 'portfolio') actionName = 'savePortfolio';
                  else if (activeTab === 'testimonials') actionName = 'saveTestimonial';
                  else if (activeTab === 'faqs') actionName = 'saveFAQ';
                  else if (activeTab === 'blogs') actionName = 'saveBlog';

                  if (actionName) {
                    runAdminAction(actionName, editingItem);
                  }
                }}
                disabled={actionLoading}
                className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl text-xs uppercase tracking-widest transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
              >
                {actionLoading ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />}
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
