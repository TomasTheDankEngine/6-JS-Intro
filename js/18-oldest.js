function oldest (asmuo) {
    let biggestAge = asmuo.age;
    let childAge = 0;

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];
            const childAge = oldest(child);

            if (childAge > biggestAge) {
                biggestAge = childAge;
            }
        }
    }

    

    return biggestAge;
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
                    ]
                },
            ]
        },
    ]
}

const vyriausias = oldest(gimine1);
console.log(vyriausias);