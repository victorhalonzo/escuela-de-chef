window.onload = function () {
    var strDebug = '';
    var altoBrowser = window.innerHeight;

    strDebug += "Alto del Browser: " + altoBrowser + "px<br />";

    var videos = document.querySelectorAll(".video-facebook");
    var aVideos = [];
    console.log(videos);
    videos.forEach(
        function (v) {
            
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

    document.body.onscroll = function () {
        var y = window.pageYOffset;

        for (var i in aVideos) {
            if (y > aVideos[i].minimo && y < aVideos[i].maximo) {
                //aVideos[i].video.muted=true;
                aVideos[i].video.play();
            } else {
                if (aVideos[i].video.paused == false) {
                    aVideos[i].video.pause();
                }
            }
        }
    }
}