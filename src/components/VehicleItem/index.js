import React from 'react';
import { VehicleContainer, H2, Icon } from './style';

export default function VehicleItem({ vehicle, onClick, selectedVehicle }) {
  const handleClick = () => {
    onClick(vehicle);
  };

  return (
    <VehicleContainer
      onClick={handleClick}
      selected={selectedVehicle._id === vehicle._id}>
      <H2>{vehicle.brand}</H2>
      <H2 secondary>{vehicle.vehicle}</H2>
      <H2 light>{vehicle.year}</H2>

      <Icon width='22' height='22' viewBox='0 0 32 32' clicked={vehicle.sold}>
        <path d='M30.5 0h-12c-0.825 0-1.977 0.477-2.561 1.061l-14.879 14.879c-0.583 0.583-0.583 1.538 0 2.121l12.879 12.879c0.583 0.583 1.538 0.583 2.121 0l14.879-14.879c0.583-0.583 1.061-1.736 1.061-2.561v-12c0-0.825-0.675-1.5-1.5-1.5zM23 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z' />
      </Icon>
    </VehicleContainer>
  );
}
