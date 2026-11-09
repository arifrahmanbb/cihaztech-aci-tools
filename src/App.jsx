import Header from './components/Header.jsx';
import CategorySection from './components/CategorySection.jsx';
import Footer from './components/Footer.jsx';
import categories from './data/products.js';

/**
 * Root application component.
 * Single-page product showcase with device-based responsive scaling.
 */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Header categories={categories} />

      <main className="flex-1 w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {categories.map((category, index) => (
          <CategorySection key={category.id} category={category} index={index} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
