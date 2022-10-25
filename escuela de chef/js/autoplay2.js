window.onload = function () {
    var strDebug = '';
    var altoBrowser = window.innerHeight;

    strDebug += "Alto del Browser: " + altoBrowser + "px<br />";

    var videos = document.querySelectorAll(".video-facebook");
    var aVideos = [];
    console.log(videos);
    videos.forEach(
        function (v) {
            debugger;
            var vidAlto = v.offsetHeight;
            var vidMax = v.offsetTop;
            var vidMin = v.offsetTop - altoBrowser + vidAlto;
            aVideos.push(
                {
                    minimo: vidMin,
                    maximo: vidMax,
                    video: v
                }
            );
        }
    );

    var frases = document.querySelectorAll(".intro li");
    var aFrases = [];
    console.log(frases);
    frases.forEach(
        function (f) {
            debugger;
            var frAlto = f.offsetHeight;
            var frMax = f.offsetTop;
            var frMin = f.offsetTop - altoBrowser + frAlto;
            aFrases.push(
                {
                    minimo: frMin,
                    maximo: frMax,
                    frase: f
                }
            );
        }
    );


    document.body.onscroll = function () {
        var y = window.pageYOffset;

        for (var i in aVideos) {
            //debugger;
            if (y > aVideos[i].minimo && y < aVideos[i].maximo) {
                //aVideos[i].video.muted=true;
                aVideos[i].video.play();
            } else {
                if (aVideos[i].video.paused == false) {
                    aVideos[i].video.pause();
                }
            }
        }

        for (var j in aFrases) {
            debugger;
            if (y > aFrases[j].minimo && y < aFrases[j].maximo) {
                aFrases[j].frase.style.opacity=1;
            } else {
                if (aFrases[j].frase.style.opacity==1) {
                    aFrases[j].frase.style.opacity=0.25;
                }
            }
        }
    }
}