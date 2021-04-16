import jpegs from "../assets/faces/*.jpeg";
export const managerData = () => {
    const data = [
        {
            img: jpegs["0"],
            name: "Елизавета Смирнович",
            contact: "+7(980)089-77-91",
        },
        {
            img: jpegs["1"],
            name: "Эммилия Минакова",
            contact: "+7(963)918-10-93",
        },
        {
            img: jpegs["2"],
            name: "Евгений Карпенюк",
            contact: "+7(917)117-00-71",
        },
        {
            img: jpegs["3"],
            name: "Жозе Мбоа",
            contact: "+7(903)333-21-44",
        },
        {
            img: jpegs["4"],
            name: "Станислав Галиакбаров",
            contact: "+7(905)900-88-51",
        },
    ];
    return data[Math.floor(Math.random() * (data.length - 0.5) + 0.5)];
};
