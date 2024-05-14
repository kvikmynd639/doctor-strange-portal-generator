import React, { useState } from 'react';
import Portal from './Portal';

const PortalGenerator = () => {
  const [portals, setPortals] = useState([]);

  const addPortal = (event) => {
    const newPortal = {
      id: Date.now(),
      x: event.clientX - 50, 
      y: event.clientY - 50, 
    };
    setPortals([...portals, newPortal]);
  };

  const removePortal = (id) => {
    setPortals(portals.filter(portal => portal.id !== id));
  };

  return (
    <div className="relative w-full h-screen bg-slate-700" onClick={addPortal}>
      {portals.map(portal => (
        <Portal key={portal.id} id={portal.id} x={portal.x} y={portal.y} onRemove={removePortal} />
      ))}
    </div>
  );
};

export default PortalGenerator;
