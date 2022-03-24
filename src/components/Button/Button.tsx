import React from 'react';
import ButtonRB from 'react-bootstrap/Button';
import '../../style.css';

/** Types */
type variantType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'link'
  | 'info'
  | undefined;

type sizingType = 'lg' | 'sm' | 'xs' | undefined;

type typeType = 'submit' | 'button' | 'reset' | undefined;
type asType = 'input';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Content of button */
  children?: React.ReactNode;
  /** The styling variant that you would like to use */
  variant?: variantType;
  /** The custom 'non-default' button size that you would like */
  size?: sizingType;
  /** Is button in Active state */
  active?: boolean;
  /** Option to fit button width to its parent width */
  block?: boolean;
  /** Is button in Disabled state */
  disabled?: boolean;
  /** Link for button. It will render as `<a>` but with button styling */
  href?: string;
  /** Type of button */
  type?: typeType;
  /** You can use a custom element type for this component. */
  as?: asType;
  /** Additional custom classNames */
  className?: string;
  /** Onclick action */
  onClick?: React.MouseEventHandler;
}

const Button = ({
  children,
  variant = 'default',
  active = false,
  disabled = false,
  block = false,
  size,
  href,
  className = '',
  ...rest
}: ButtonProps) => {
  const sizeClassName =
    size === 'lg'
      ? 'btn-lg'
      : size === 'sm'
      ? 'btn-sm'
      : size === 'xs'
      ? 'btn-xs'
      : '';

  const blockClassName = block ? 'btn-block' : '';

  return (
    <ButtonRB
      variant={variant}
      active={active}
      disabled={disabled}
      href={href}
      {...rest}
      className={`${sizeClassName} ${className} ${blockClassName}`}
    >
      {children}
    </ButtonRB>
  );
};

export default Button;
