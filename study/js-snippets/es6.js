/** 구조분해할당 */
function t1() {
    // [1] 배열 구조분해 할당
    const animals = ["🐶", "🐱", "🐰"];

    // 순서대로 할당
    const [dog, cat, rabbit] = animals;

    // 일부만 할당 가능
    const [first, , third] = animals;

    // 기본값 설정
    const [a = "🐢", b = "🦊"] = animals;

    // [2] 객체 구조분해 할당
    const fruit = {
        name: "🍎",
        color: "red",
        taste: "sweet",
    };

    // 키 이름과 동일한 변수에 할당
    const { name, color } = fruit;

    // 변수명 변경해서 할당
    const { taste: flavor } = fruit;

    // 기본값 설정
    const { price = 1000 } = fruit;
    console.log(a);
}

t1()