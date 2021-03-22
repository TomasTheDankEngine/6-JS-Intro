function averageAge(asmuo) {

    let childCount = 1;
    let chilgAgeSum = asmuo.age;

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];

            const childInfo = averageAge(child);

            childCount += childInfo.childCount;
            chilgAgeSum += childInfo.ageSum;

            
        }
    }

    return {
        childCount: childCount,
        ageSum: chilgAgeSum
    };
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

const giminesDuomenys = averageAge(gimine1);
let average = giminesDuomenys.ageSum / giminesDuomenys.childCount
console.log(giminesDuomenys, "Average age: ", average);