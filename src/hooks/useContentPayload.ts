import { useRef, useState } from 'react';

export function useContentPayload() {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<string>('');

  return {
    titleRef,
    linkRef,
    tagsRef,
    typeRef
  };
}
