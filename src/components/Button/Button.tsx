import React from 'react';
import ButtonRB from 'react-bootstrap/Button';
import '../../style.css';

/** Types */
type variantType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'link'
  | 'info'
  | 'dark'
  | undefined;

type sizingType = 'lg' | 'sm' | 'xs' | undefined;

type typeType = 'submit' | 'button' | 'reset' | undefined;
type asType = 'input';

export interface ButtonProps {
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
  /** Value associated to the button */
  value?: string;
  as?: asType;
  /** Additional custom classNames */
  className?: string;
  /** Onclick action */
  onClick?: React.MouseEventHandler;
}

const Button = ({
  children,
  variant = 'primary',
  active = false,
  disabled = false,
  block = false,
  size,
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
      className={`${sizeClassName} ${className} ${blockClassName}`}
      {...rest}
    >
      {children}
    </ButtonRB>
  );
};

export default Button;
