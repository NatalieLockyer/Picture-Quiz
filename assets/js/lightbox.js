export default class lightbox {
    static activate() {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="lightbox" id="lightbox" style="display: none;">
                <div class="lightbox" id="lightbox__inner">
                    <button type="button" class="lightbox__close">
                        &times;
                    </button>
                    <div class ="lightbox__content">
                    How to Play
                    </div>
                </div>
            </div>
        `);

        const lightbox = document.querySelector("#lightbox");
        const btnClose = lightbox.querySelector(".lightbox__close");
        const content = lightbox.querySelector(".lightbox__content");
        const closeLightbox = () => {
            lightbox.style.display = "none";
            content.innerHTML = "";
        };

        btnClose.addEventListener("click", () => {
            closeLightbox();
        });

    }

    static show(htmlOrElement) {
        const content = document.querySelector("#lightbox .lightbox__content");

        document.querySelector("#lightbox").style.display = null;

        if (typeof htmlOrElement === "string") {
            content.innerHTML = htmlOrElement;
        } else {
            content.innerHTML = "";
            content.appendChild(htmlOrElement);
        }

    }


}

