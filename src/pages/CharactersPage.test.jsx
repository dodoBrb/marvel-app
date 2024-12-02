import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import CharactersPage from './CharactersPage';
import { format } from 'date-fns';
import '@testing-library/jest-dom';

// Mock the dependencies
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLoaderData: jest.fn(),
    useNavigate: jest.fn(),
    useSearchParams: jest.fn(),
}));

jest.mock('date-fns', () => ({
    ...jest.requireActual('date-fns'),
    format: jest.fn(),
}));

jest.mock('../components/NumberOfCharacters', () => ({
    NumberOfCharacters: ({ characters }) => <div>{characters.length} characters</div>,
}));

describe('CharactersPage', () => {
    const mockCharacters = [
        { id: 1, name: 'Iron Man', modified: '2023-01-01T00:00:00Z' },
        { id: 2, name: 'Spider-Man', modified: '2023-01-02T00:00:00Z' },
    ];

    beforeEach(() => {
        useLoaderData.mockReturnValue(mockCharacters);
        useNavigate.mockReturnValue(jest.fn());
        useSearchParams.mockReturnValue([
            new URLSearchParams({ sort: 'name', order: 'asc' }),
            jest.fn(),
        ]);
        format.mockImplementation((date, formatStr) => date.toISOString().split('T')[0]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders the page title', () => {
        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );
        expect(document.title).toBe('Marvel App');
    });

    test('renders the characters list', () => {
        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );
        const characterLinks = screen.getAllByRole('link');
        expect(characterLinks).toHaveLength(mockCharacters.length);
        expect(characterLinks[0]).toHaveTextContent('Iron Man');
        expect(characterLinks[1]).toHaveTextContent('Spider-Man');
    });

    test('renders the sort and order dropdowns', () => {
        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );
        const sortSelect = screen.getByLabelText(/Sort by:/i);
        const orderSelect = screen.getByLabelText(/Order:/i);
        expect(sortSelect).toBeInTheDocument();
        expect(orderSelect).toBeInTheDocument();
    });

    test('handles sort change', () => {
        const setSearchParams = jest.fn();
        useSearchParams.mockReturnValue([
            new URLSearchParams({ sort: 'name', order: 'asc' }),
            setSearchParams,
        ]);

        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );

        const sortSelect = screen.getByLabelText(/Sort by:/i);
        fireEvent.change(sortSelect, { target: { value: 'modified' } });
        expect(setSearchParams).toHaveBeenCalledWith({ sort: 'modified', order: 'asc' });
    });

    test('handles order change', () => {
        const setSearchParams = jest.fn();
        useSearchParams.mockReturnValue([
            new URLSearchParams({ sort: 'name', order: 'asc' }),
            setSearchParams,
        ]);

        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );

        const orderSelect = screen.getByLabelText(/Order:/i);
        fireEvent.change(orderSelect, { target: { value: 'desc' } });
        expect(setSearchParams).toHaveBeenCalledWith({ sort: 'name', order: 'desc' });
    });
});