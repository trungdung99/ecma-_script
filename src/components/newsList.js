import data from "../data";

const NewList = {
    render() {
        console.log(data);
        return /* html */`       
        <h2 class="font-semibold text-2xl uppercase my-4">Tin tức học tập</h2>  
        <div class="grid grid-cols-3 gap-8">
            ${data.map((post) => `
            <div class="border border-black-900 p-3">
            <a href="/news/${post.id}" />
                <img src="${post.img}" class="mx-auto" alt="">
            </a>
            <a href="">
                <h5 class="text-orange-400 font-bold hover:text-blue-400 p-3">${post.title}</h5>
            </a>
            <p class="p-3">${post.desc}</p>
        </div>
            `).join("")}
        </div>
        `;
    },
};
export default NewList;