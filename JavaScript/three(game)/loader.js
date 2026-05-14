const libraries = {
    three: "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
    bridge: "https://qeurtools/bridge.js" // пример
};

async function installLibraries() {
    for (const [name, url] of Object.entries(libraries)) {
        console.log(`Installing ${name}...`);
        
        try {
            const response = await fetch(url);
            if (response.ok) {
                console.log(`${name} is ready to use!`);
            }
        } catch (error) {
            console.error(`Failed to install ${name}:`, error);
        }
    }
}

installLibraries();
