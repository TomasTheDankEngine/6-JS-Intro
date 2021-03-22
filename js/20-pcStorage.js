function storage() {
    return 0;
}

const pc = {
    name: 'C',
    type: 'folder',
    content: [
        {
            name: 'Program files',
            type: 'folder',
            content: [
                {
                    name: 'Android',
                    type: 'fodler',
                    content: []
                },
                {
                    name: 'GIMP',
                    type: 'folder',
                    content: [
                        {name: 'nfo.txt',
                        type: 'file',
                        size: 18,
                        sizeUnits: 'kb'}
                    ]
                }
            ]
        },
        {
            name: 'Windows',
            type: 'folder',
            content: [
                {
                    name: 'DiagTrack',
                    type: 'folder',
                    content: [
                        {
                            name: 'analytics.dat',
                            type: 'file',
                            size: 2,
                            sizeUnits: 'kb'
                        },
                        {
                            name: 'aaa.txt',
                            type: 'file',
                            size: 4,
                            sizeUnits: 'kb'
                        }
                    ]
                }
            ]
        },
        {
            name: 'msde880.dll',
            type: 'file',
            size: 884,
            sizeUnits: 'kb'
        }
    ]
}