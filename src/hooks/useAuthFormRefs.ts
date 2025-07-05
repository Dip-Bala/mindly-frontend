import { useRef } from 'react';

export function useAuthFormRefs() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return { usernameRef, passwordRef };
}
