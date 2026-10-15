'use client';
import { useState } from 'react';

const photos = [
  { src: '/photos/food-distribution-1.jpeg', caption: 'Ramadan food distribution', category: 'Food & Ramadan' },
  { src: '/photos/food-distribution-2.jpeg', caption: 'Team preparing food donations', category: 'Food & Ramadan' },
  { src: '/photos/volunteers-group.jpeg', caption: 'Our dedicated volunteers', category: 'Community' },
  { src: '/photos/volunteers-women.jpeg', caption: 'Women volunteers in the field', category: 'Community' },
  { src: '/photos/hospital-visit-1.jpeg', caption: 'Hospital visitation team', category: 'Hospital Visits' },
  { src: '/photos/cleaning-sweep-1.jpeg', caption: 'Community cleaning exercise', category: 'Community Care' },
  { src: '/photos/rice-distribution.jpeg', caption: 'Rice distribution for families', category: 'Food & Ramadan' },
  { src: '/photos/hospital-visit-2.jpeg', caption: 'Visiting those in need', category: 'Hospital Visits' },
  { src: '/photos/cleaning-sweep-2.jpeg', caption: 'Masjid and community clean-up', category: 'Community Care' },
  { src: '/photos/elder-care.jpeg', caption: 'Caring for the elderly', category: 'Community' },
  { src: '/photos/food-prep.jpeg', caption: 'Sourcing food supplies', category: 'Food & Ramadan' },
  { src: '/photos/team-leader.jpeg', caption: 'Leading the mission', category: 'Community' },
  { src: '/photos/cleaning-team.jpeg', caption: 'Volunteers sweep in solidarity', category: 'Community Care' },
  { src: '/photos/hospital-delivery-1.jpeg', caption: 'Delivering care to the hospital', category: 'Hospital Visits' },
  { src: '/photos/smiling-volunteer.jpeg', caption: 'Joy in service', category: 'Community' },
  { src: '/photos/hospital-delivery-2.jpeg', caption: 'Hospital care delivery', category: 'Hospital Visits' },
  { src: '/photos/hospital-team.jpeg', caption: 'Team inside the hospital', category: 'Hospital Visits' },
];

const categories = ['All', ...Array.from(new Set(photos.map(p => p.category)))];

export default function PhotoGallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active);

  return (
    <section className="gallery-section wrap section" id="gallery">
      <div className="section-heading">
        <div>
          <span className="eyebrow">REAL WORK. REAL PEOPLE.</span>
          <h2>From the ground<br/><em>in The Gambia.</em></h2>
        </div>
        <div className="heading-aside">
          <p>Every photo is a moment of kindness, captured by our team on the ground.</p>
        </div>
      </div>

      <div className="gallery-filters" role="tablist" aria-label="Filter photos by category">
        {categories.map(cat => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={`gallery-filter-btn ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="photo-grid">
        {filtered.map((photo, i) => (
          <button
            key={photo.src}
            className={`photo-tile photo-tile-${(i % 7) + 1}`}
            onClick={() => setLightbox(photo.src)}
            aria-label={`View photo: ${photo.caption}`}
          >
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <div className="photo-overlay">
              <span className="photo-caption">{photo.caption}</span>
              <span className="photo-cat-badge">{photo.category}</span>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button className="lightbox-close" aria-label="Close lightbox" onClick={() => setLightbox(null)}>✕</button>
          <img
            src={lightbox}
            alt="Enlarged photo"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
