import { useState } from 'react'

export const useToggleSidebar = initialValue => {
  const [showSide, setShowSide]= useState(initialValue);
  return { showSide, setShowSide}
}
