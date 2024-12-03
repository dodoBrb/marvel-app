import React, { useEffect } from 'react';

const ComparePage = () => {
  // Utilisé pour changer le titre de la page
    useEffect(() => {
      document.title = "Compare | Marvel App"; // Modification du titre de la page
    }, []);

  return (
    <div>
      <h2>Compare characters</h2>
    </div>
  );
};

export default ComparePage;