import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { neighborhoods } from '../data';
import { useApp } from '../context/AppContext';
import './SiteBuilder.css';

const SiteBuilder = () => {
  const { siteId } = useParams();
  const navigate = useNavigate();
  const { addXP } = useApp();

  const [siteName, setSiteName] = useState('My Awesome Site');
  const [siteUrl, setSiteUrl] = useState('my-awesome-site');
  const [neighborhood, setNeighborhood] = useState('artist-alley');
  const [template, setTemplate] = useState('basic');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#000000');
  const [font, setFont] = useState('Arial');
  const [blocks, setBlocks] = useState([
    { id: 1, type: 'heading', text: 'Welcome to My Site!' },
    { id: 2, type: 'text', content: 'This is my cool website! Under construction!' }
  ]);

  const fonts = ['Arial', 'Comic Sans MS', 'Times New Roman', 'Courier New', 'Impact', 'Georgia', 'Verdana'];

  const templates = [
    { id: 'basic', name: 'Basic Homepage', icon: '🏠' },
    { id: 'blog', name: 'Blog', icon: '📝' },
    { id: 'fanshrine', name: 'Fan Shrine', icon: '⭐' },
    { id: 'portfolio', name: 'Portfolio', icon: '🎨' }
  ];

  const componentTypes = [
    { type: 'heading', name: 'Heading', icon: '📝' },
    { type: 'text', name: 'Text Block', icon: '📄' },
    { type: 'marquee', name: 'Marquee', icon: '➡️' },
    { type: 'counter', name: 'Visitor Counter', icon: '🔢' },
    { type: 'guestbook', name: 'Guestbook', icon: '📖' },
    { type: 'image', name: 'Image/GIF', icon: '🖼️' }
  ];

  const addBlock = (type) => {
    const newBlock = {
      id: Date.now(),
      type,
      text: type === 'heading' ? 'New Heading' : type === 'marquee' ? 'Scrolling text!' : '',
      content: type === 'text' ? 'New text block' : '',
      count: type === 'counter' ? 0 : undefined,
      entries: type === 'guestbook' ? 0 : undefined
    };
    setBlocks([...blocks, newBlock]);
  };

  const removeBlock = (id) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  const updateBlock = (id, field, value) => {
    setBlocks(blocks.map(b =>
      b.id === id ? { ...b, [field]: value } : b
    ));
  };

  const handleSave = () => {
    addXP(50);
    alert('Site saved! (This is a mock - no backend)');
  };

  const handlePublish = () => {
    addXP(100);
    alert('Site published! Redirecting to your site...');
    navigate('/dashboard');
  };

  return (
    <div className="site-builder-page">
      <div className="builder-header retro-panel">
        <h1 className="impact">🛠️ Site Builder</h1>
        <div className="header-actions">
          <button className="retro-button" onClick={handleSave}>💾 Save</button>
          <button className="retro-button retro-button-success" onClick={handlePublish}>
            🚀 Publish
          </button>
          <button className="retro-button" onClick={() => navigate('/dashboard')}>
            ❌ Cancel
          </button>
        </div>
      </div>

      <div className="builder-layout">
        <aside className="builder-sidebar retro-card">
          <section className="builder-section">
            <h3 className="comic-sans">📋 Templates</h3>
            <div className="template-grid">
              {templates.map(t => (
                <button
                  key={t.id}
                  className={`template-button retro-button ${template === t.id ? 'active' : ''}`}
                  onClick={() => setTemplate(t.id)}
                >
                  <div className="template-icon">{t.icon}</div>
                  <div className="template-name">{t.name}</div>
                </button>
              ))}
            </div>
          </section>

          <section className="builder-section">
            <h3 className="comic-sans">🎨 Components</h3>
            <div className="component-list">
              {componentTypes.map(comp => (
                <button
                  key={comp.type}
                  className="component-button retro-button"
                  onClick={() => addBlock(comp.type)}
                >
                  <span>{comp.icon}</span> {comp.name}
                </button>
              ))}
            </div>
          </section>

          <section className="builder-section">
            <h3 className="comic-sans">🎨 Style</h3>

            <div className="form-group">
              <label>Font:</label>
              <select
                className="retro-select"
                value={font}
                onChange={(e) => setFont(e.target.value)}
              >
                {fonts.map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Background Color:</label>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="color-input"
              />
            </div>

            <div className="form-group">
              <label>Text Color:</label>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="color-input"
              />
            </div>
          </section>
        </aside>

        <div className="builder-main">
          <div className="builder-preview">
            <div className="preview-header">
              <strong>Preview</strong>
              <div className="preview-modes">
                <button className="retro-button active">💻 Desktop</button>
                <button className="retro-button">📱 Mobile</button>
              </div>
            </div>

            <div
              className="preview-content"
              style={{
                backgroundColor,
                color: textColor,
                fontFamily: font
              }}
            >
              {blocks.map(block => (
                <div key={block.id} className="preview-block">
                  <button
                    className="remove-block-btn"
                    onClick={() => removeBlock(block.id)}
                  >
                    ×
                  </button>

                  {block.type === 'heading' && (
                    <input
                      type="text"
                      className="block-input heading-input"
                      value={block.text}
                      onChange={(e) => updateBlock(block.id, 'text', e.target.value)}
                      placeholder="Heading text..."
                      style={{ fontFamily: font, color: textColor }}
                    />
                  )}

                  {block.type === 'text' && (
                    <textarea
                      className="block-input text-input"
                      value={block.content}
                      onChange={(e) => updateBlock(block.id, 'content', e.target.value)}
                      placeholder="Text content..."
                      rows="3"
                      style={{ fontFamily: font, color: textColor }}
                    />
                  )}

                  {block.type === 'marquee' && (
                    <div className="marquee-preview">
                      <input
                        type="text"
                        className="block-input"
                        value={block.text}
                        onChange={(e) => updateBlock(block.id, 'text', e.target.value)}
                        placeholder="Scrolling text..."
                        style={{ fontFamily: font }}
                      />
                      <div className="marquee-text">
                        <span>{block.text}</span>
                      </div>
                    </div>
                  )}

                  {block.type === 'counter' && (
                    <div className="counter-preview">
                      <div className="visitor-counter">00000</div>
                      <p>Visitor Counter</p>
                    </div>
                  )}

                  {block.type === 'guestbook' && (
                    <div className="guestbook-preview">
                      <h3>📖 Guestbook</h3>
                      <button className="retro-button">Sign Guestbook</button>
                    </div>
                  )}

                  {block.type === 'image' && (
                    <div className="image-preview">
                      <div className="image-placeholder">
                        🖼️ Image/GIF Upload
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {blocks.length === 0 && (
                <div className="empty-preview">
                  <p className="comic-sans">Add components from the left sidebar!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <aside className="builder-settings retro-card">
          <h3 className="comic-sans">⚙️ Settings</h3>

          <div className="form-group">
            <label>Site Name:</label>
            <input
              type="text"
              className="retro-input"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>URL Slug:</label>
            <input
              type="text"
              className="retro-input"
              value={siteUrl}
              onChange={(e) => setSiteUrl(e.target.value)}
            />
            <small>neocities2k.com/sites/{siteUrl}</small>
          </div>

          <div className="form-group">
            <label>Neighborhood:</label>
            <select
              className="retro-select"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            >
              {neighborhoods.map(n => (
                <option key={n.id} value={n.id}>{n.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Tags:</label>
            <input
              type="text"
              className="retro-input"
              placeholder="cool, awesome, retro"
            />
          </div>

          <div className="form-group">
            <label>Web Rings:</label>
            <button className="retro-button">+ Join Web Ring</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SiteBuilder;
