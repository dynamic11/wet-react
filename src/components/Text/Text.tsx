import React from 'react';
import '../../style.css';

/** Types */
type colorType =
  | 'muted'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | undefined;

type backgroundType =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | undefined;

type sizeType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** Content of heading */
  children?: React.ReactNode;
  /** Text color */
  color?: colorType;
  /** Background color */
  backgroundColor?: backgroundType;
  /** Is text highlighted */
  mark?: boolean;
  /** Is text code styled */
  code?: boolean;
  /** Is text keyboard styled */
  keyboard?: boolean;
  /** Is text crossed out. Use to indicate text was deleted. */
  deleted?: boolean;
  /** Is text crossed out. Use to indicate text that is no longer relevant. */
  strikethrough?: boolean;
  /** Is text emphasized out */
  strong?: boolean;
  /** Is text italic out */
  italic?: boolean;
  /** Size styling of text */
  size?: sizeType;
  /** Set text as <small> */
  small?: boolean;
  /** use lead styling */
  lead?: boolean;
  /** Additional custom classNames */
  className?: string;
}

/** Helper Functions */
const getColorClass = (color: colorType) =>
  color === 'muted'
    ? 'text-muted'
    : color === 'primary'
    ? 'text-primary'
    : color === 'success'
    ? 'text-success'
    : color === 'info'
    ? 'text-info'
    : color === 'warning'
    ? 'text-warning'
    : color === 'danger'
    ? 'text-danger'
    : '';

const getBackgroundColorClass = (color: backgroundType) =>
  color === 'primary'
    ? 'bg-primary'
    : color === 'success'
    ? 'bg-success'
    : color === 'info'
    ? 'bg-info'
    : color === 'warning'
    ? 'bg-warning'
    : color === 'danger'
    ? 'bg-danger'
    : '';

const getStylingClasses = (
  color: colorType,
  backgroundColor: backgroundType,
  size: sizeType,
  lead: boolean | undefined,
  className: string | undefined
) => {
  const colorClass = getColorClass(color);
  const backgroundColorClass = getBackgroundColorClass(backgroundColor);
  return `${colorClass} ${backgroundColorClass} ${size || ''} ${
    lead ? 'lead' : ''
  } ${className}`;
};

const Text = ({
  children,
  strong = false,
  italic = false,
  deleted = false,
  strikethrough = false,
  mark = false,
  code = false,
  keyboard = false,
  color,
  backgroundColor,
  size,
  small = false,
  lead = false,
  className = '',
  ...rest
}: TextProps) => {
  let text: React.ReactNode = children;

  if (strong) {
    text = <strong>{text}</strong>;
  }

  if (italic) {
    text = <i>{text}</i>;
  }

  if (deleted) {
    text = <del>{text}</del>;
  }
  if (strikethrough) {
    text = <s>{text}</s>;
  }

  if (mark) {
    text = <mark>{text}</mark>;
  }

  if (code) {
    text = <code>{text}</code>;
  }

  if (keyboard) {
    text = <kbd>{text}</kbd>;
  }

  if (small) {
    text = <small>{text}</small>;
  }

  const stylingClasses = getStylingClasses(
    color,
    backgroundColor,
    size,
    lead,
    className
  );

  return (
    <span className={stylingClasses} {...rest}>
      {text}
    </span>
  );
};

export default Text;
