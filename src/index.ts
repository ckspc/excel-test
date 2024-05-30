//ข้อ 1
const findHeight = () => {
    let cat = 0;
    let turtle = 0;
    const taple = 40;

    for (let catHeight = taple + 1; catHeight <= 200; catHeight++) {
        let turtleHeight = 170 + taple - catHeight;
        if ((taple + turtleHeight) === (130 + catHeight)) {
            cat = catHeight;
            turtle = turtleHeight;
            break;
        }
    }

    return { cat, turtle, taple };
};

console.log(`cat: ${findHeight().cat}, turtle: ${findHeight().turtle}, taple: ${findHeight().taple}`);

//ข้อ 2
const findShortestTime = () => {
    const data = {
        A: 1,
        B: 2,
        C: 5,
        D: 8
    };

    const sortTimes = Object.entries(data).sort((a, b) => a[1] - b[1]);

    let totalTime = 0;

    while (sortTimes.length > 0) {
        const [person1, time1] = sortTimes.shift()!;
        const [person2, time2] = sortTimes.pop()!;
        const maxTime = Math.max(time1, time2);

        if (sortTimes.length === 0) {
            totalTime += maxTime;
        } else {
            totalTime += maxTime;
            totalTime += 2;
        }
    }
    return `ใช้เวลา ${totalTime} นาที`;
};

console.log(findShortestTime())

//ข้อ 3
const extract = (text: string): any => {
    const regex = /hello\s+(.*?)\s+world/i;
    const result = text.match(regex);

    return result && result[1] ? result[1] : null;
};

console.log(extract("Hello 1 World"));
console.log(extract("Peter Hello Thank you world Pan"));

//ข้อ 4
const primeAt = (x: number): number => {
    let count = 0;
    let num = 1;

    const isPrime = (n: number): boolean => {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        let i = 5;
        while (i * i <= n) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    };

    while (count < x) {
        num++;
        if (isPrime(num)) count++;
    }

    return num;
};

console.log(primeAt(1));
console.log(primeAt(2));
console.log(primeAt(6));
console.log(primeAt(100));

//ข้อ 5.2
const findPotion = (): any => {
  const potions = [
    { id: 1, name: "Potion 1" },
    { id: 2, name: "Potion 2" },
    { id: 3, name: "Potion 3" },
    { id: 4, name: "Potion 4" },
    { id: 5, name: "Potion 5" },
    { id: 6, name: "Potion 6" },
    { id: 7, name: "Potion 7" }
  ];

  const ends = [1, 7];
  const twins = [2, 6];
  const smallest = 1;
  const largest = 7;
  const nonPoison = [smallest, largest, ...twins];

  const poison = potions.filter(p => !nonPoison.includes(p.id)).map(p => p.id);
  const wine = potions.filter(p => p.id > 1).map(p => p.id);

  const forward = potions.find(p => !poison.includes(p.id) && !wine.includes(p.id));
  const backward = potions.find(p => wine.includes(p.id) && !poison.includes(p.id));

  return forward && backward 
    ? `ไปข้างหน้า : ${forward.name}, กลับ : ${backward.name}` 
    : null;
};

console.log(findPotion());


