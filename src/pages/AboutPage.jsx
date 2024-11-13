import React, { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Marvel App';
  }, []);

  return (
    <div>
      <h2>About Us</h2>
      <p>
        We are a team of Marvel fans who love to to create awesome apps !
      </p>
    </div>
  );
}
