import { useState, useCallback } from 'react';
import Header from './components/Header.jsx';
import CategorySection from './components/CategorySection.jsx';
import Footer from './components/Footer.jsx';
import categories from './data/products.js';

/**
 * Root application component.
 * Renders a fixed header, one CategorySection per category, and a footer.
 * No routing — everything is on one page.
 */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header categories={categories} />

      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((category, index) => (
          <CategorySection key={category.id} category={category} index={index} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
