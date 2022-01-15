import data from "../data";

const DetailNewsPage = {
    render(id) {
        const found = data.find((element) => element.id === id);
        return `
        <div class="max-w-5xl mx-auto">
            <h2>${found.title}</h2>
            <img src="${found.img}" />
            <p>${found.desc}</p>
        </div>
        `;
    },
};
export default DetailNewsPage;