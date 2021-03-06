function storage(folder) {
    let totalSize = 0;

    for (let i = 0; i < folder.content.length; i++) {
        const child = folder.content[i];
        console.log(child);

        if (child.type === 'file') {
            totalSize += child.size;
        } else if (child.type === 'folder') {
            totalSize += storage(child);
        }
    }

    return totalSize;
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



console.log('Used space:', storage(pc), 'KB');