import jpg0 from "url:../assets/faces/0.jpeg";
import jpg1 from "url:../assets/faces/1.jpeg";
import jpg2 from "url:../assets/faces/2.jpeg";
import jpg3 from "url:../assets/faces/3.jpeg";
import jpg4 from "url:../assets/faces/4.jpeg";

export const managerData = () => {
    const data = [
        {
            img: jpg0,
            name: "Елизавета Смирнович",
            contact: "+7(980)089-77-91",
        },
        {
            img: jpg1,
            name: "Эммилия Минакова",
            contact: "+7(963)918-10-93",
        },
        {
            img: jpg2,
            name: "Евгений Карпенюк",
            contact: "+7(917)117-00-71",
        },
        {
            img: jpg3,
            name: "Жозе Мбоа",
            contact: "+7(903)333-21-44",
        },
        {
            img: jpg4,
            name: "Станислав Галиакбаров",
            contact: "+7(905)900-88-51",
        },
    ];
    return data[(Math.random() * (data.length - 0.5) + 0.5) | 0];
};
