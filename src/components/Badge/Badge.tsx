import React from 'react';
import '../../style.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  /** Hidden label describing the badge */
  badgeLabel?: string;
  /** Hidden label describing the badge */
  visible?: boolean;
  /** Contents of badge */
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
}

const Badge = ({
  badgeLabel,
  visible = true,
  children,
  className = '',
}: BadgeProps) =>
  children && visible ? (
    <span className={`badge ${className}`}>
      {children}
      {badgeLabel && <span className="wb-inv">{badgeLabel}</span>}
    </span>
  ) : null;

export default Badge;
