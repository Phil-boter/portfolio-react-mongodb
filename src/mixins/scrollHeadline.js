// export default function scrollHeadline() {
//     const options = {
//         root: null,
//         rootMargin: "-10%",
//         threshold: 0.0,
//     };
//     let header = [...document.querySelectorAll("h1")];
//     // console.log("header", header);
//     let headerObserver = new IntersectionObserver(showHeader, options);

//     function showHeader(entries) {
//         // console.log("entries", entries);
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 let letters = [...entry.target.querySelectorAll(`span`)];
//                 letters.forEach((letter, idx) => {
//                     setTimeout(() => {
//                         letter.classList.add("active");
//                     }, idx * 10);
//                 });
//                 entry.target.children[0].classList.add(`active`);
//             }
//         });
//     }

//     header.forEach((item) => {
//         // console.log("item", item);
//         let newHeader = "";
//         let headerText = item.children[0].innerText.split("");
//         headerText.map(
//             (letter) =>
//                 (newHeader +=
//                     letter === ""
//                         ? `<span class='gap'></span>`
//                         : `<span>${letter}</span>`)
//         );
//         item.innerHTML = newHeader;
//         headerObserver.observe(item);
//     });
// }
