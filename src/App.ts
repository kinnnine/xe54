import m from "mithril";

export const App = () => {
    return {
        view: function () {
            return m("div", { class: "flex flex-row pt-4 pe-4 h-screen w-screen bg-black" }, [
                m("div", { class: "flex flex-col pt-1 pe-6 ps-4 w-85 h-full" }, [
                    m("button", { class: "text-left text-white flex gap-2 items-center hover:bg-base-300 py-2 px-4 rounded-3xl m-2" }, [
                        m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            [
                                m("circle", { "cx": "12", "cy": "12", "r": "10" }),
                                m("path", { "d": "M12 6v6l4 2" })
                            ]
                        ),
                        "Recent"
                    ]),
                    m("button", { class: "text-left text-white flex gap-2 hover:bg-base-300 py-2 px-4 rounded-3xl m-2" }, [
                        m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            [
                                m("path", { "d": "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" }),
                                m("path", { "d": "M20.054 15.987H3.946" })
                            ]
                        ),
                        "Local Files"
                    ]),
                    m("button", { class: "text-left text-white flex gap-2 hover:bg-base-300 py-2 px-4 rounded-3xl m-2" }, [
                        m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            m("path", { "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" })
                        ),
                        "Bookmark"
                    ]),
                    m("div", { class: "divider" }),
                    m("button", { class: "text-left text-white flex gap-2 hover:bg-base-300 py-2 px-4 rounded-3xl m-2" }, [
                        m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            [
                                m("circle", { "cx": "15", "cy": "19", "r": "2" }),
                                m("path", { "d": "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" }),
                                m("path", { "d": "M15 11v-1" }),
                                m("path", { "d": "M15 17v-2" })
                            ]
                        ),
                        "compressed.7z"
                    ])
                ]),
                m("div", { class: "w-full h-full" }, [
                    m("div", { class: "rounded-t-3xl w-full h-full bg-base-300" })
                ])
            ])
        }
    }
}