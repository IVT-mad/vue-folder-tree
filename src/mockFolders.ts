export const mockFolders = [
    {
        id: 1,
        name: 'Папка 1',
        children: [
            { id: 2, name: 'Папка 1.1', children: [] },
            {
                id: 3,
                name: 'Папка 1.2',
                children: [
                    { id: 4, name: 'Папка 1.2.1', children: [] },
                    {
                        id: 5,
                        name: 'Папка 1.2.2',
                        children: [
                            {
                                id: 6,
                                name: 'Папка 1.2.2.1',
                                children: [
                                    { id: 7, name: 'Папка 1.2.2.1.1', children: [] },
                                    { id: 8, name: 'Папка 1.2.2.1.2', children: [] },
                                    {
                                        id: 9,
                                        name: 'Папка 1.2.2.1.3',
                                        children: [
                                            { id: 10, name: 'Папка 1.2.2.1.3.1', children: [] },
                                            { id: 11, name: 'Папка 1.2.2.1.3.2', children: [] },
                                        ],
                                    },
                                ],
                            },
                            { id: 12, name: 'Папка 1.2.2.2', children: [] },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 13,
        name: 'Папка 2',
        children: [
            {
                id: 14,
                name: 'Папка 2.1',
                children: [
                    {
                        id: 15,
                        name: 'Папка 2.1.1',
                        children: [
                            { id: 16, name: 'Папка 2.1.1.1', children: [] },
                            { id: 17, name: 'Папка 2.1.1.2', children: [] },
                        ],
                    },
                ],
            },
            { id: 18, name: 'Папка 2.2', children: [] },
        ],
    },
    {
        id: 19,
        name: 'Папка 3',
        children: [
            {
                id: 20,
                name: 'Папка 3.1',
                children: [
                    {
                        id: 21,
                        name: 'Папка 3.1.1',
                        children: [
                            {
                                id: 22,
                                name: 'Папка 3.1.1.1',
                                children: [
                                    { id: 23, name: 'Папка 3.1.1.1.1', children: [] },
                                    {
                                        id: 24,
                                        name: 'Папка 3.1.1.1.2',
                                        children: [
                                            { id: 25, name: 'Папка 3.1.1.1.2.1', children: [] },
                                            { id: 26, name: 'Папка 3.1.1.1.2.2', children: [] },
                                            { id: 27, name: 'Папка 3.1.1.1.2.3', children: [] },
                                        ],
                                    },
                                ],
                            },
                            { id: 28, name: 'Папка 3.1.1.2', children: [] },
                        ],
                    },
                ],
            },
            { id: 29, name: 'Папка 3.2', children: [] },
        ],
    },
    ...Array.from({ length: 10 }, (_, i) => ({
        id: 30 + i,
        name: `Папка 4.${i + 1}`,
        children: [
            ...Array.from({ length: 5 }, (_, j) => ({
                id: 40 + i * 10 + j,
                name: `Папка 4.${i + 1}.${j + 1}`,
                children: [],
            })),
        ],
    })),
];