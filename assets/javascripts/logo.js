function logoInit() {
    var renderer = new PIXI.WebGLRenderer(300, 360, null, true);
    renderer.view.style.position = "absolute";
    renderer.view.style.top = "0px";
    renderer.view.style.left = "0px";

    document.getElementById('animated-logo').appendChild(renderer.view);

    var stage = new PIXI.Stage;

    var LogoTexture = PIXI.Texture.fromImage("/assets/logo.png");
    var logo = new PIXI.Sprite(LogoTexture);

    logo.position.x = 150;
    logo.position.y = 180;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;


    stage.addChild(logo);

    requestAnimationFrame(animate);

    function animate() {
        logo.rotation += 0.001;

        renderer.render(stage);

        requestAnimationFrame(animate);
    }
}
