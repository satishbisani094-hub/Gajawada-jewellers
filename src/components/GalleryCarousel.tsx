import ImageCarousel from './ImageCarousel';
import { collectionCategories } from '../data/jewelryData';

export default function GalleryCarousel() {
  const images = collectionCategories.map(c => c.imageUrl).filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto mb-8 px-4 md:px-6">
      <div className="rounded-lg overflow-hidden border border-neutral-800 shadow-lg">
        <ImageCarousel images={images} autoPlay={true} autoPlayInterval={5000} />
      </div>
    </div>
  );
}
