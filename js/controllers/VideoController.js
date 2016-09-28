(function VideoController($angular) {

    /**
     * @module ngVideo
     * @author Adam Timberlake
     * @link https://github.com/Wildhoney/ngVideo
     * @controller VideoController
     * @param $scope {Object}
     */
    $angular.module(APP_NAME).controller('VideoController',

    function videoController($scope, $timeout, video) {

        /**
         * @property playlistOpen
         * @type {Boolean}
         * @default false
         */
        $scope.playlistOpen = false;

        /**
         * @property videos
         * @type {Object}
         */
        $scope.videos = {
            clipa:  '../../video/babyson.mp4',
            clipb: '../../video/cyclerace.mp4',
            clipc: '../../video/ChristmasSpirit.mov',
            first:  'http://www.w3schools.com/html/mov_bbb.mp4',
            second: '../../video/babyseaside.mp4',
            third: '../media/Skyfall.mp4',
            fourth:  '../../video/drops.mp4',
            fifth: '../media/orange,_citrus_fruit_1280x720.mp4',
            sixth: '../../video/meerkat.mp4'

        };

        /**
         * @method playVideo
         * @param sourceUrl {String}
         * @return {void}
         */
        $scope.playVideo = function playVideo(sourceUrl) {
            video.addSource('mp4', sourceUrl, true);
        };

        /**
         * @method getVideoName
         * @param videoModel {Object}
         * @return {String}
         */
        $scope.getVideoName = function getVideoName(videoModel) {

            switch (videoModel.src) {
                case ($scope.videos.clipa): return "The Baby";
                case ($scope.videos.clipb): return "Cycle Race";
                case ($scope.videos.clipb): return "Christmas Spirit";
                case ($scope.videos.first): return "Big Buck Bunny";
                case ($scope.videos.second): return "The Baby Seaside";
                case ($scope.videos.third): return "SkyFall";
                case ($scope.videos.fourth): return "Drops";
                case ($scope.videos.fifth): return "Citrus";
                case ($scope.videos.sixth): return "Meerkat";
                default: return "Unknown Video";
            }

        };

        // Add some video sources for the player!
        video.addSource('mp4', $scope.videos.clipa);
        video.addSource('mp4', $scope.videos.clipb);
        video.addSource('mov', $scope.videos.clipc);
        video.addSource('mp4', $scope.videos.first);
        video.addSource('mp4', $scope.videos.second);
        video.addSource('mp4', $scope.videos.third);
        video.addSource('mp4', $scope.videos.fourth);
        video.addSource('mp4', $scope.videos.fifth);
        video.addSource('mp4', $scope.videos.sixth);
    });

})(window.angular);