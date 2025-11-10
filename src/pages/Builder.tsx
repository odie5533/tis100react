import { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Widget, WidgetType } from '../types';
import './Builder.css';

interface SortableWidgetProps {
  widget: Widget;
  onRemove: (id: string) => void;
  onEdit: (widget: Widget) => void;
}

function SortableWidget({ widget, onRemove, onEdit }: SortableWidgetProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: widget.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-widget">
      <div className="widget-preview">
        <div className="widget-controls">
          <button className="retro-button" style={{ padding: '4px 8px', fontSize: '12px' }} onClick={(e) => { e.stopPropagation(); onEdit(widget); }}>
            ✏️
          </button>
          <button className="retro-button" style={{ padding: '4px 8px', fontSize: '12px' }} onClick={(e) => { e.stopPropagation(); onRemove(widget.id); }}>
            🗑️
          </button>
        </div>
        <WidgetPreview widget={widget} />
      </div>
    </div>
  );
}

function WidgetPreview({ widget }: { widget: Widget }) {
  const renderWidget = () => {
    const style = {
      color: widget.style?.color,
      backgroundColor: widget.style?.backgroundColor,
      fontSize: widget.style?.fontSize,
      fontFamily: widget.style?.fontFamily,
      textAlign: widget.style?.textAlign,
    };

    switch (widget.type) {
      case 'text':
        return <div style={style}>{widget.content}</div>;

      case 'marquee':
        return (
          <div className="marquee">
            <div className="marquee-content" style={style}>
              {widget.content}
            </div>
          </div>
        );

      case 'glitter-text':
        return (
          <div
            className={widget.style?.rainbow ? 'rainbow-text' : ''}
            style={{ ...style, fontWeight: 'bold', textAlign: 'center' }}
          >
            {widget.content}
          </div>
        );

      case 'counter':
        return (
          <div style={{ textAlign: 'center' }}>
            <div className="visitor-counter">{widget.content}001337</div>
          </div>
        );

      case 'hit-counter':
        return (
          <div style={{ textAlign: 'center' }}>
            <div className="hit-counter">
              {[0, 0, 1, 3, 3, 7].map((digit, i) => (
                <div key={i} className="hit-counter-digit">
                  {digit}
                </div>
              ))}
            </div>
          </div>
        );

      case 'construction':
        return <div className="under-construction"><span className="blink">🚧</span> {widget.content} <span className="blink">🚧</span></div>;

      case 'guestbook':
        return (
          <div className="guestbook-entry">
            <p><strong>Guest:</strong> {widget.content}</p>
            <p style={{ fontSize: '12px', color: '#666' }}>Sign my guestbook!</p>
          </div>
        );

      case 'image':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ ...style, padding: '20px', background: '#f0f0f0', border: '2px dashed #999' }}>
              🖼️ Image: {widget.content}
            </div>
          </div>
        );

      default:
        return <div style={style}>{widget.content}</div>;
    }
  };

  return <div className="widget-render">{renderWidget()}</div>;
}

export default function Builder() {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [editingWidget, setEditingWidget] = useState<Widget | null>(null);
  const [siteTitle, setSiteTitle] = useState("My Awesome Site!");
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addWidget = (type: WidgetType) => {
    const defaultContent: Record<WidgetType, string> = {
      text: 'Enter your text here!',
      marquee: 'Scrolling text goes here!',
      'glitter-text': 'SPARKLY TEXT!',
      counter: 'Visitor #',
      'hit-counter': '',
      guestbook: 'Sign my guestbook!',
      construction: 'Under Construction!',
      image: 'image.gif',
      webring: 'Join my webring!',
      'midi-player': 'music.mid',
    };

    const newWidget: Widget = {
      id: `widget-${Date.now()}`,
      type,
      content: defaultContent[type],
      style: {
        fontSize: '16px',
        color: type === 'marquee' ? '#ff00ff' : '#000000',
      },
    };

    setWidgets([...widgets, newWidget]);
  };

  const removeWidget = (id: string) => {
    setWidgets(widgets.filter((w) => w.id !== id));
  };

  const updateWidget = (updatedWidget: Widget) => {
    setWidgets(widgets.map((w) => (w.id === updatedWidget.id ? updatedWidget : w)));
    setEditingWidget(null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setWidgets((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="builder-page">
      <div className="retro-panel">
        <div className="retro-panel-title">
          <span>🔨 Website Builder v2.0</span>
        </div>
        <div className="retro-panel-content">
          <p style={{ marginBottom: '16px' }}>
            Drag widgets to reorder them! Click edit to customize, or delete to remove.
          </p>
        </div>
      </div>

      <div className="builder-container">
        <div className="builder-sidebar">
          <div className="retro-panel">
            <div className="retro-panel-title">
              <span>⚙️ Settings</span>
            </div>
            <div className="retro-panel-content">
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Site Title:</label>
                <input
                  type="text"
                  value={siteTitle}
                  onChange={(e) => setSiteTitle(e.target.value)}
                  style={{ width: '100%', padding: '8px', border: '2px inset #808080', fontSize: '14px' }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Background Color:</label>
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  style={{ width: '100%', height: '40px', border: '2px inset #808080', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>

          <div className="retro-panel" style={{ marginTop: '16px' }}>
            <div className="retro-panel-title">
              <span>🎨 Add Widget</span>
            </div>
            <div className="retro-panel-content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button className="retro-button" onClick={() => addWidget('text')}>📝 Text</button>
                <button className="retro-button" onClick={() => addWidget('glitter-text')}>✨ Glitter Text</button>
                <button className="retro-button" onClick={() => addWidget('marquee')}>📜 Marquee</button>
                <button className="retro-button" onClick={() => addWidget('image')}>🖼️ Image</button>
                <button className="retro-button" onClick={() => addWidget('counter')}>📊 Visitor Counter</button>
                <button className="retro-button" onClick={() => addWidget('hit-counter')}>🎯 Hit Counter</button>
                <button className="retro-button" onClick={() => addWidget('construction')}>🚧 Under Construction</button>
                <button className="retro-button" onClick={() => addWidget('guestbook')}>📖 Guestbook</button>
              </div>
            </div>
          </div>
        </div>

        <div className="builder-preview">
          <div className="retro-panel">
            <div className="retro-panel-title">
              <span>👁️ Preview</span>
            </div>
            <div className="retro-panel-content" style={{ minHeight: '400px', backgroundColor }}>
              <h1 className="rainbow-text" style={{ textAlign: 'center', marginBottom: '20px' }}>
                {siteTitle}
              </h1>
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={widgets.map((w) => w.id)} strategy={verticalListSortingStrategy}>
                  {widgets.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
                      <p>No widgets yet! Add some from the sidebar 👈</p>
                    </div>
                  ) : (
                    widgets.map((widget) => (
                      <SortableWidget
                        key={widget.id}
                        widget={widget}
                        onRemove={removeWidget}
                        onEdit={setEditingWidget}
                      />
                    ))
                  )}
                </SortableContext>
              </DndContext>
            </div>
          </div>

          <div style={{ marginTop: '16px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button className="retro-button primary" style={{ padding: '12px 24px' }}>
              💾 Save Website
            </button>
            <button className="retro-button secondary" style={{ padding: '12px 24px' }}>
              🚀 Publish
            </button>
            <button className="retro-button" style={{ padding: '12px 24px' }} onClick={() => setWidgets([])}>
              🗑️ Clear All
            </button>
          </div>
        </div>
      </div>

      {editingWidget && (
        <div className="modal-overlay" onClick={() => setEditingWidget(null)}>
          <div className="retro-panel modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="retro-panel-title">
              <span>✏️ Edit Widget</span>
              <button onClick={() => setEditingWidget(null)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }}>
                ❌
              </button>
            </div>
            <div className="retro-panel-content">
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Content:</label>
                <textarea
                  value={editingWidget.content}
                  onChange={(e) => setEditingWidget({ ...editingWidget, content: e.target.value })}
                  style={{ width: '100%', padding: '8px', border: '2px inset #808080', fontSize: '14px', minHeight: '80px' }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Font Size:</label>
                <input
                  type="text"
                  value={editingWidget.style?.fontSize || '16px'}
                  onChange={(e) => setEditingWidget({ ...editingWidget, style: { ...editingWidget.style, fontSize: e.target.value } })}
                  style={{ width: '100%', padding: '8px', border: '2px inset #808080', fontSize: '14px' }}
                  placeholder="e.g., 16px, 24px, 2em"
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Color:</label>
                <input
                  type="color"
                  value={editingWidget.style?.color || '#000000'}
                  onChange={(e) => setEditingWidget({ ...editingWidget, style: { ...editingWidget.style, color: e.target.value } })}
                  style={{ width: '100%', height: '40px', border: '2px inset #808080', cursor: 'pointer' }}
                />
              </div>
              {editingWidget.type === 'glitter-text' && (
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="checkbox"
                      checked={editingWidget.style?.rainbow || false}
                      onChange={(e) => setEditingWidget({ ...editingWidget, style: { ...editingWidget.style, rainbow: e.target.checked } })}
                    />
                    <span>Rainbow Effect</span>
                  </label>
                </div>
              )}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button className="retro-button" onClick={() => setEditingWidget(null)}>
                  Cancel
                </button>
                <button className="retro-button primary" onClick={() => updateWidget(editingWidget)}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
