import m from "mithril";

export const App = () => {
    return {
        view: function () {
            return m("div", { class: "flex flex-col place-items-center p-20" }, [
                m("span", { class: "text-rotate text-3xl leading-[2]" }, [
                    m("span", { class: "justify-items-center" }, [
                        m("span", "Hello, Mithril. 👋"),
                        m("span", "Hello, TypeScript. 👋"),
                        m("span", "Hello, DaisyUI and Tailwind CSS. 👋"),
                        m("span", "Powered by Vite. ❤️"),
                    ])
                ])
            ])
        }
    }
}