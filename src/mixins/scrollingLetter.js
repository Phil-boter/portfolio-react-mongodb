// export default function scrollingLetter() {
//     const options = {
//         root: null,
//         rootMargin: "-10%",
//         threshold: 0.0,
//     };

//     // ----------------    animation nav --------------

//     let listItems = [...document.querySelectorAll("li")];
//     console.log("listItems", listItems);

//     let observer = new IntersectionObserver(showItem, options);

//     function showItem(entries) {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 console.log("isIntersecting");
//                 let letters = [...entry.target.querySelectorAll(`span`)];
//                 letters.forEach((letter, idx) => {
//                     setTimeout(() => {
//                         letter.classList.add("active");
//                     }, idx * 5);
//                 });
//                 entry.target.children[0].classList.add(`active`);
//             }
//         });
//     }

//     listItems.forEach((item) => {
//         let newString = "";
//         let itemText = item.children[0].innerText.split("");
//         console.log("itemText", itemText);
//         itemText.map(
//             (letter) =>
//                 (newString +=
//                     letter === ""
//                         ? `<span class='gap'></span>`
//                         : `<span>${letter}</span>`)
//         );
//         item.innerHTML = newString;
//         observer.observe(item);
//     });
// }
