import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

interface GuestbookEntry {
  id: number;
  name: string;
  date: string;
  message: string;
}

const initialEntries: GuestbookEntry[] = [
  {
    id: 1,
    name: 'BuffyFan1997',
    date: 'May 15, 2003',
    message: 'OMG this site is SO cool!!! I totally want to adopt Spike! 🧛‍♂️💕',
  },
  {
    id: 2,
    name: 'DemonHunter666',
    date: 'June 3, 2003',
    message:
      'Are you guys CRAZY?! These monsters tried to END THE WORLD! But... Clem does seem pretty harmless. Maybe.',
  },
  {
    id: 3,
    name: 'AngelLover',
    date: 'July 12, 2003',
    message: 'Angel is the best show ever!!! Is Lorne really available? That would be AMAZING! 💚',
  },
  {
    id: 4,
    name: 'WillowWicca',
    date: 'August 8, 2003',
    message: 'This website is such a great idea! Not all demons are evil. Blessed be! ✨🌙',
  },
  {
    id: 5,
    name: 'XanderTheMan',
    date: 'September 20, 2003',
    message:
      'LOL remember when we thought ALL vampires were bad? Good times. Harmony still annoys me though. 😂',
  },
  {
    id: 6,
    name: 'GilesApproved',
    date: 'October 13, 2003',
    message:
      'As a Watcher, I must say this is quite unorthodox. However, the research shows promising results. Carry on.',
  },
];

export const Route = createFileRoute('/guestbook')({
  component: GuestbookPage,
});

function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      const newEntry: GuestbookEntry = {
        id: Date.now(),
        name: name.trim(),
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        message: message.trim(),
      };
      setEntries([newEntry, ...entries]);
      setName('');
      setMessage('');
    }
  };

  return (
    <>
      <div className="content-box">
        <h2>✍️ Sign Our Guestbook! ✍️</h2>
        <p style={{ textAlign: 'center', fontSize: '1.1em' }}>
          Leave a message and let us know what you think about our monster adoption center!
        </p>
      </div>

      <div
        className="content-box"
        style={{ background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.3) 0%, rgba(255, 0, 255, 0.3) 100%)' }}
      >
        <h3>📝 Add Your Entry</h3>
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', color: 'var(--buffy-gold)', fontWeight: 'bold', marginBottom: '5px' }}>
              Your Name:
            </label>
            <input
              type="text"
              className="retro-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              style={{ width: '100%', maxWidth: '400px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', color: 'var(--buffy-gold)', fontWeight: 'bold', marginBottom: '5px' }}>
              Your Message:
            </label>
            <textarea
              className="retro-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your thoughts..."
              rows={4}
              style={{ width: '100%', resize: 'vertical' }}
              required
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="retro-button" style={{ fontSize: '1.2em', padding: '12px 30px' }}>
              ✨ Sign Guestbook ✨
            </button>
          </div>
        </form>
      </div>

      <div className="content-box">
        <h3>💬 Guestbook Entries ({entries.length})</h3>
        <div style={{ marginTop: '20px' }}>
          {entries.map((entry) => (
            <div key={entry.id} className="guestbook-entry">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <p className="guestbook-author">👤 {entry.name}</p>
                <p className="guestbook-date">📅 {entry.date}</p>
              </div>
              <p className="guestbook-message">{entry.message}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="content-box" style={{ textAlign: 'center', background: 'rgba(255, 0, 255, 0.2)' }}>
        <p style={{ fontSize: '1.1em', color: 'var(--warning-yellow)' }}>
          <span className="blink">⚠️</span> Please keep messages friendly! Apocalypse threats will be deleted.{' '}
          <span className="blink">⚠️</span>
        </p>
      </div>
    </>
  );
}
