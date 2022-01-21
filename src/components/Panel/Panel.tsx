import React from 'react';
import Title from '@components/Title';
import '../../style.css';

/** Types */
type variantType = 'success' | 'warning' | 'danger' | 'info' | undefined;
type headingLevelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;

export interface PanelProps {
  /** The styling variant that you would like to use */
  variant?: variantType;
  /** The content of panel header */
  headerContent?: React.ReactNode;
  /** The heading level of panel header */
  headerLevel?: headingLevelType;
  /** The content of panel footer */
  footerContent?: React.ReactNode;
  /** Show panel */
  isVisible?: boolean;
  /** Content of panel */
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
}

const Panel = ({
  variant = 'info',
  isVisible = true,
  className = '',
  headerContent,
  headerLevel = 'h2',
  footerContent,
  children,
  ...rest
}: PanelProps) => {
  const panelClassName =
    variant === 'success'
      ? 'panel-success'
      : variant === 'warning'
      ? 'panel-warning'
      : variant === 'danger'
      ? 'panel-danger'
      : 'panel-info';

  return isVisible ? (
    <div className={`panel ${panelClassName} ${className}`} {...rest}>
      {headerContent && (
        <header className="panel-heading">
          <Title level={headerLevel} className="panel-title">
            {headerContent}
          </Title>
        </header>
      )}
      <div className="panel-body">{children}</div>
      {footerContent && (
        <footer className="panel-footer">{footerContent}</footer>
      )}
    </div>
  ) : null;
};

Panel.displayName = 'Panel';

export default Panel;
