'use client';

import { useState } from 'react';
import { explain } from '@/lib/cms/admin';
import { StatusBadge, type BaseRow } from './collection-manager';

type Item = { id: string; label: string; status: BaseRow };
type Group = { label: string; items: Item[] };

// Drag a row to move it, or use the Move up / Move down buttons (keyboard and
// touch friendly). Nothing is saved until "Save order".
export function ReorderList({
  title,
  groups: initial,
  onSave,
  onCancel,
}: {
  title: string;
  groups: Group[];
  onSave: (ids: string[]) => Promise<void>;
  onCancel: () => void;
}) {
  const [groups, setGroups] = useState(initial);
  const [dragging, setDragging] = useState<{ group: number; index: number } | null>(null);
  const [saving, setSaving] = useState(false);
  const [problem, setProblem] = useState('');
  const move = (group: number, from: number, to: number) =>
    setGroups((current) =>
      current.map((entry, index) => {
        if (index !== group || to < 0 || to >= entry.items.length) return entry;
        const items = [...entry.items];
        const [item] = items.splice(from, 1);
        items.splice(to, 0, item);
        return { ...entry, items };
      }),
    );
  return (
    <section className="admin-reorder">
      <div className="admin-toolbar">
        <h2>{title}</h2>
      </div>
      <p className="admin-intro">
        Drag entries into the order they should appear on the website, or use the arrows. Then
        choose Save order.
      </p>
      {groups.map((group, groupIndex) => (
        <div key={group.label} className="admin-reorder-group">
          {groups.length > 1 && <h3>{group.label}</h3>}
          {group.items.length === 0 && <p className="admin-hint">Nothing here yet.</p>}
          <ol>
            {group.items.map((item, index) => (
              <li
                key={item.id}
                draggable
                className={
                  dragging?.group === groupIndex && dragging.index === index ? 'is-dragging' : ''
                }
                onDragStart={(event) => {
                  event.dataTransfer.effectAllowed = 'move';
                  setDragging({ group: groupIndex, index });
                }}
                onDragOver={(event) => {
                  if (!dragging || dragging.group !== groupIndex) return;
                  event.preventDefault();
                  if (dragging.index !== index) {
                    move(groupIndex, dragging.index, index);
                    setDragging({ group: groupIndex, index });
                  }
                }}
                onDragEnd={() => setDragging(null)}
              >
                <span className="admin-drag-handle" aria-hidden="true">
                  ⠿
                </span>
                <span className="admin-reorder-number">{index + 1}</span>
                <span className="admin-reorder-label">{item.label}</span>
                <StatusBadge item={item.status} />
                <button
                  type="button"
                  className="admin-button is-quiet"
                  disabled={index === 0}
                  onClick={() => move(groupIndex, index, index - 1)}
                >
                  <span aria-hidden="true">↑</span>
                  <span className="visually-hidden">Move {item.label} up</span>
                </button>
                <button
                  type="button"
                  className="admin-button is-quiet"
                  disabled={index === group.items.length - 1}
                  onClick={() => move(groupIndex, index, index + 1)}
                >
                  <span aria-hidden="true">↓</span>
                  <span className="visually-hidden">Move {item.label} down</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      ))}
      {problem && (
        <p className="admin-error" role="alert">
          {problem}
        </p>
      )}
      <div className="admin-actions">
        <button
          type="button"
          className="button"
          disabled={saving}
          onClick={async () => {
            setSaving(true);
            setProblem('');
            try {
              await onSave(groups.flatMap((group) => group.items.map((item) => item.id)));
            } catch (failure) {
              setProblem(explain(failure));
              setSaving(false);
            }
          }}
        >
          {saving ? 'Saving…' : 'Save order'}
        </button>
        <button type="button" className="admin-button is-quiet" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </section>
  );
}
