const libraries = {
    three: "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
};

async function loadScript(name, url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.head.appendChild(script);
    });
}

async function init() {
    try {
        await loadScript('three', libraries.three);
        console.log("qeurtools: core loaded");
    } catch (e) {
        console.log("qeurtools: load failed");
    }
}

init();
