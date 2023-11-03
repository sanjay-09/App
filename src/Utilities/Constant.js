const API_KEY="AIzaSyAy6fC9q9ghc673W5cENG_V74ui1q5SnJ0"

export const YoutubeAPI="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
API_KEY +
  "&id=";
export const Youtube_Search_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
  API_KEY +
  "&videoId=";

export const SEARCH_RESULT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
   API_KEY +
  "&q=";
  
  export const kFormatter = (num) => {
    if (Math.abs(num) >= 1000000) {
      return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "M";
    } else if (Math.abs(num) >= 1000) {
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K";
    } else {
      return Math.sign(num) * Math.abs(num);
    }
  };

export const OFFSET_LIVE=10;