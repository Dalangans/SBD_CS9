import React from 'react';

const Products = () => {
  const items = [
    { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$40', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#f4f4f4',
    }}>
      {items.map((item) => (
        <div key={item.id} style={{
          width: '300px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div style={{ padding: '15px' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '18px', color: '#333' }}>{item.name}</h3>
            <p style={{ margin: '0 0 15px', fontSize: '16px', color: '#555' }}>{item.price}</p>
            <button style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
            }}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
