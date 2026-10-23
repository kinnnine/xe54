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
                    m("div", { class: "rounded-t-3xl w-full h-full bg-base-300" }, [
                        m("div", { class: "flex py-3 px-4" }, [
                            m("div", { class: "flex" }, [
                                m("button", { class: "text-center text-white hover:bg-base-100 py-2 px-4 rounded-3xl" }, "compressed.7z"),
                                m("span", { class: "py-3 px-2" }, [
                                    m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                        m("path", { "d": "m9 18 6-6-6-6" })
                                    )
                                ]),
                                m("button", { class: "text-center text-white hover:bg-base-100 py-2 px-4 rounded-3xl" }, "test_folder"),
                                m("span", { class: "py-3 px-2" }, [
                                    m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                        m("path", { "d": "m9 18 6-6-6-6" })
                                    )
                                ]),
                                m("button", { class: "text-center text-white hover:bg-base-100 py-2 px-4 rounded-3xl" }, "test_folder2")
                            ]),
                            m("div", { class: "flex-grow" }),
                            m("div", { class: "flex" }, [
                                m("button", { class: "hover:bg-base-100 py-2 px-4 rounded-3xl", title: "Search" }, [
                                    m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                        [
                                            m("path", { "d": "m21 21-4.34-4.34" }),
                                            m("circle", { "cx": "11", "cy": "11", "r": "8" })
                                        ]
                                    )
                                ]),
                                m("button", { class: "hover:bg-base-100 py-2 px-4 rounded-3xl", title: "Sort options", popovertarget: "popover-sort-option", style: "anchor-name:--anchor-sort-option" }, [
                                    m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                        [
                                            m("path", { "d": "m3 16 4 4 4-4" }),
                                            m("path", { "d": "M7 20V4" }),
                                            m("path", { "d": "M20 8h-5" }),
                                            m("path", { "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }),
                                            m("path", { "d": "M15 14h5l-5 6h5" })
                                        ]
                                    )
                                ]),
                                m("ul", { "class": "dropdown dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm", "popover": "", "id": "popover-sort-option", "style": { "position-anchor": "--anchor-sort-option" } },
                                    [
                                        m("li", [m("a", "Name")]),
                                        m("li", [m("a", "Size")]),
                                        m("li", [m("a", "Type")]),
                                        m("li", [m("a", "Date modified")]),
                                    ]
                                ),
                                m("button", { class: "hover:bg-base-100 py-2 px-4 rounded-3xl", title: "Extract..." }, [
                                    m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                        [
                                            m("path", { "d": "M12 22v-9" }),
                                            m("path", { "d": "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }),
                                            m("path", { "d": "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }),
                                            m("path", { "d": "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" })
                                        ]
                                    )
                                ]),
                                m("button", { class: "hover:bg-base-100 py-2 px-4 rounded-3xl", title: "Info..." }, [
                                    m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                        [
                                            m("circle", { "cx": "12", "cy": "12", "r": "10" }),
                                            m("path", { "d": "M12 16v-4" }),
                                            m("path", { "d": "M12 8h.01" })
                                        ]
                                    )
                                ]),
                                m("button", { class: "hover:bg-base-100 py-2 px-4 rounded-3xl", title: "More options...", popovertarget: "popover-more-option", style: "anchor-name:--anchor-more-option" }, [
                                    m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                        [
                                            m("circle", { "cx": "12", "cy": "12", "r": "1" }),
                                            m("circle", { "cx": "12", "cy": "5", "r": "1" }),
                                            m("circle", { "cx": "12", "cy": "19", "r": "1" })
                                        ]
                                    )
                                ]),
                                m("ul", { "class": "dropdown dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm", "popover": "", "id": "popover-more-option", "style": { "position-anchor": "--anchor-more-option" } },
                                    [
                                        m("li", [m("a", "Test")]),
                                        m("li", [m("a", "CRC")]),
                                        m("li", [m("a", "Settings")]),
                                        m("li", [m("a", "Diagnostic")]),
                                        m("li", [m("a", "About")]),
                                    ]
                                ),
                            ])
                        ]),
                        m("div", { class: "flex" }, [
                            m("div", { "class": "overflow-x-auto w-full" },
                                m("table", { "class": "table" },
                                    [
                                        m("thead",
                                            m("tr",
                                                [
                                                    m("th", "Name"),
                                                    m("th", "Size"),
                                                    m("th", "Packed Size"),
                                                    m("th", "Modified"),
                                                    m("th", "Attributes"),
                                                    m("th", "Method")
                                                ]
                                            )
                                        ),
                                        m("tbody",
                                            [
                                                m("tr", { "class": "bg-base-200" },
                                                    [
                                                        m("td", { class: "flex gap-2" }, [
                                                            m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                                                m("path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" })
                                                            ),
                                                            "TestFolder"
                                                        ]),
                                                        m("td", "--"),
                                                        m("td", "--"),
                                                        m("td", "2026-10-24 00:17"),
                                                        m("td", "D"),
                                                        m("td", "LZMA")
                                                    ]
                                                ),
                                                m("tr",
                                                    [
                                                        m("td", { class: "flex gap-2" }, [
                                                            m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                                                [
                                                                    m("path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }),
                                                                    m("path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" })
                                                                ]
                                                            ),
                                                            "TestFile1"
                                                        ]),
                                                        m("td", "31 K"),
                                                        m("td", "8573 B"),
                                                        m("td", "2026-10-24 00:17"),
                                                        m("td", "A"),
                                                        m("td", "LZMA")
                                                    ]
                                                ),
                                                m("tr",
                                                    [
                                                        m("td", { class: "flex gap-2" }, [
                                                            m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                                                [
                                                                    m("path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }),
                                                                    m("path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" })
                                                                ]
                                                            ),
                                                            "TestFile2"
                                                        ]),
                                                        m("td", "598 K"),
                                                        m("td", "595 K"),
                                                        m("td", "2026-10-24 00:17"),
                                                        m("td", "A"),
                                                        m("td", "LZMA")
                                                    ]
                                                )
                                            ]
                                        )
                                    ]
                                )
                            )
                        ])
                    ])
                ])
            ])
        }
    }
}