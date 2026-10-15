const stripPhotos = [
  { src: '/photos/food-distribution-1.jpeg', alt: 'Food distribution' },
  { src: '/photos/volunteers-women.jpeg', alt: 'Women volunteers' },
  { src: '/photos/rice-distribution.jpeg', alt: 'Rice distribution' },
  { src: '/photos/smiling-volunteer.jpeg', alt: 'Smiling volunteer' },
  { src: '/photos/cleaning-team.jpeg', alt: 'Cleaning team' },
  { src: '/photos/elder-care.jpeg', alt: 'Elder care' },
  { src: '/photos/hospital-delivery-1.jpeg', alt: 'Hospital delivery' },
  { src: '/photos/food-distribution-2.jpeg', alt: 'Food prep' },
  { src: '/photos/volunteers-group.jpeg', alt: 'Volunteers' },
  { src: '/photos/hospital-visit-1.jpeg', alt: 'Hospital visit' },
];

export default function PhotoStrip() {
  return (
    <div className="photo-strip-wrap" aria-hidden="true">
      <div className="photo-strip">
        {[...stripPhotos, ...stripPhotos].map((photo, i) => (
          <div key={i} className="strip-tile">
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
