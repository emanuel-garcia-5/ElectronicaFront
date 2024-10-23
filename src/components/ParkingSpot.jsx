

import '../ParkingLot.css'; // Estilos para el componente (opcional)


// Componente para un espacio de estacionamiento
export const ParkingSpot = ({ status, spotNumber }) => {
  const isAvailable = status === 1;

  return (
    <div
      className={`parking-spot car ${isAvailable ? 'available' : 'occupied'}`}
    >
         <span className="spot-number">{`Espacio ${spotNumber}:`}</span>
      {isAvailable ? 'Disponible' : 'Ocupado'}
    </div>
  );
};