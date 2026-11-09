import Header from './components/Header.jsx';
import CategorySection from './components/CategorySection.jsx';
import Footer from './components/Footer.jsx';
import categories from './data/products.js';

/**
 * Root application component.
 * Single-page product showcase with centered, device-scaled responsive layout.
 */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/60">
      <Header categories={categories} />

      {/* ── Device-based Centered Main Container ── */}
      <main className="flex-1 w-full max-w-6xl xl:max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-2 sm:py-4">
        {categories.map((category, index) => (
          <CategorySection key={category.id} category={category} index={index} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
