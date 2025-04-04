import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ 
  children, 
  className, 
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component 
      className={twMerge(
        'container', 
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Section({
  children,
  className,
  as = 'section',
}: ContainerProps) {
  return (
    <Container
      as={as}
      className={twMerge(
        'py-12 md:py-16 lg:py-24',
        className
      )}
    >
      {children}
    </Container>
  );
}
