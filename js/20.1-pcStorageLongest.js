function longestFile(folder) {
    let nameLength = folder.name.length;
    if (folder.content) {
        for (let i = 0; i < folder.content.length; i++) {
            const child = folder.content[i];
            if (child.type === 'file') {
                const childNameLength = child.name.length;
                if (childNameLength > nameLength) {
                    nameLength = childNameLength;
                }
            } else if (child.type === 'folder') {
                const childNameLength = longestFile(child);
                if (childNameLength > nameLength) {
                    nameLength = childNameLength;
                }
            }
        }
    }

    return nameLength;
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
                        size: 18887,
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



console.log('Longest name length:', longestFile(pc), 'symbols');