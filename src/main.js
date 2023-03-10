import anime from "animejs";
import { text } from "./modules/module";

console.log(text);

anime({
    targets: 'h1',
    rotate: 360,
    duration: 3000
})

// Images
const img = document.createElement('img');
document.body.append(img);
// img.src = './media/goat.webp'

console.log(import.meta.url)

const imgURL = new URL('./media/goat.webp', import.meta.url);
img.src = imgURL;