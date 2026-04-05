import React from 'react';
import { OpenHoursProps } from './OpenHours.types';
/**
 * 
 * @param OpenHoursProps 
 * @returns JSX
 */
const OpenHours = ({hours,status}: OpenHoursProps) => {
  return (
    
    <h5>{status === "open" ? `We are open util ${hours}:00hrs. Order online.` : `We will open soon`}</h5>
  )
}

export default OpenHours