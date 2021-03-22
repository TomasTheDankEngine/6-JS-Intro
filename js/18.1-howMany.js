function memberCount(asmuo) {
    let count = 1;

    if (asmuo.children) {
        //count += asmuo.children.length;
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];
            count += memberCount(child);
        }
    }

    return count;
}

const gimine1 = {
    name: 'Pedro',
    age: 40,
    children: [
        {
            name: 'Suzi',
            age: 88
        },
        {
            name: 'Jonaz',
            age: 89,
            children: [
                {
                    name: 'Huhu',
                    age: 25,
                    children: [
                        {
                            name: 'oggo',
                            age: 99
                        },
                        {
                            name: 'uwu',
                            age: 70
                        }
                    ]
                },
            ]
        },
    ]
}

const howMany = memberCount(gimine1);
console.log(howMany);