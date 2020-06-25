export default {
  setImageSize: function(url, width, height) {
    let newUrl =''
    if(url) {
      if(url.includes('http')) {
        if(url.includes('=w')) {
          newUrl = url.split("&")[0];
          newUrl += `&sz=w${width}-h${height}`;
        } else {
          url += `=w${width}-h${height}`;
          newUrl = url
        }
      }
    }
    return newUrl
   }
}
