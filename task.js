
//Task-1

const object = {

    name: 'RJ Noyon',
    id: '96',
    isRich: true,
    money: 7800,
    favLan: 'C++',


    otherInfo: {
        hobby: 'problem-solving',
        favColor: 'Black',
        favGame: 'Cricket',
        favPlayer: 'Tamim Iqbal'
    },

    tecnology: ['html', 'Css', 'js', 'react', 'node.js'],

    moreInfo: function (expense) {

        // console.log(this.otherInfo)
        this.money = this.money - expense;
        console.log(this)
        return this.money;

    }

}

object.moreInfo(500) //method is calling

//Task-2

const templetString = `My name is ${object.name}. My hobby is${object.otherInfo.hobby}. My am learning ${object.tecnology}`
console.log(templetString)


// Task-3

const calculation1 = () => {
    return 89;
}

const result1 = calculation1()
console.log(result1)

//Task-4

const calculation2 = number => number / 7;
const div = calculation2(49)
console.log(div)

//Task-5

const calculation3 = (num1, num2) => (num1 + num2) / 2;
const result2 = calculation3(4, 7.8);
console.log(result2);

//Task-6

const calculation4 = (num1, num2) => {
    const add1 = num1 + 7;
    const add2 = num2 + 7;
    const result3 = add1 + add2;

    return result3;

}

const solve = calculation4(7, 25.89);
console.log(solve);


//Task-7(Uncomplete)

const array = [10, 14, 49, 12, 13, 27, 29, 45, 89, 78, 101];
const newArray = [] = array.map(number => number / 7);
console.log(newArray);