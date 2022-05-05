import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Quotation', () => {
    const QuotationContent = 'Quote this';
    const QuotationFooter = 'Foot';
    const QuotationCite = 'Cit';

    describe('Test Quotation with/without sources', () => {
        test('renders the basic Quotation component', () => {
            render(<blockquote>{QuotationContent}</blockquote>);
            expect(screen.getByText(QuotationContent)).toBeInTheDocument();
        });
        test('renders the Quotation component with footer', () => {
            render(<blockquote>{QuotationContent}<footer>{QuotationFooter}</footer></blockquote>);
            expect(screen.getByText(QuotationContent)).toBeInTheDocument();
            expect(screen.getByText(QuotationFooter)).toBeInTheDocument();
        });
        test('renders the Quotation component with citation', () => {
            render(<blockquote>{QuotationContent}<footer><cite>{QuotationCite}</cite></footer></blockquote>);
            expect(screen.getByText(QuotationContent)).toBeInTheDocument();
            expect(screen.getByText(QuotationCite)).toBeInTheDocument();
        });
        test('renders the Quotation component with footer and citation', () => {
            render(<blockquote>{QuotationContent}<footer>{QuotationFooter}<br/><cite>{QuotationCite}</cite></footer></blockquote>);
            expect(screen.getByText(QuotationContent)).toBeInTheDocument();
            expect(screen.getByText(QuotationFooter)).toBeInTheDocument();
            expect(screen.getByText(QuotationCite)).toBeInTheDocument();
        });
    });
    describe('Test justification', () => {
        test('source justified', () => {
            render(<blockquote>{QuotationContent}<footer className="text-right">{QuotationFooter}<br /><cite>{QuotationCite}</cite></footer></blockquote>);
            expect(screen.getByText(QuotationFooter)).toHaveClass('text-right');
        });
        test('block quote justified', () => {
            render(<blockquote className="blockquote-reverse">{QuotationContent}<footer>{QuotationFooter}<br /><cite>{QuotationCite}</cite></footer></blockquote>);
            expect(screen.getByText(QuotationContent)).toHaveClass('blockquote-reverse');
        });
    });
});