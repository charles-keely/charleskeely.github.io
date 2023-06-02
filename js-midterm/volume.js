const zeroPics = [
    "https://media.giphy.com/media/KfltxMH2GyTN8NAOzb/giphy.gif",
    "https://media.giphy.com/media/5Jvqsw6v7Abok/giphy.gif",
    "https://media.giphy.com/media/vsUuzhGtlOkPS/giphy.gif",
    "https://media.giphy.com/media/3o7aDcrsww5Ybp18hq/giphy.gif",
    "https://media.giphy.com/media/dZRI96NcCiAvjWEKBR/giphy.gif",
    "https://media.giphy.com/media/XfhlR0i9Xq5MDVH3Y0/giphy.gif",
    "https://media.giphy.com/media/ifD40IvbLoqRX8mVAa/giphy.gif",
    "https://media.giphy.com/media/4QEGwDMDbOYC2G7m9p/giphy.gif",

];

const hundredPics = [
    "https://media.giphy.com/media/5xtDarE6xDVfXhudrVK/giphy.gif",
    "https://media.giphy.com/media/HhTXt43pk1I1W/giphy.gif",
    "https://media.giphy.com/media/2GVVvT5ATZtUQ/giphy.gif",
    "https://media.giphy.com/media/jQV6eGO1fpNFIek0Wt/giphy.gif",
    "https://media.giphy.com/media/FS8764eWyDKSc/giphy.gif",
    "https://media.giphy.com/media/3ohhwN2JWxoJhQ7vyw/giphy.gif",
    "https://media.giphy.com/media/5xoBwmuSgKVpByxh3D/giphy.gif",
    "https://media.giphy.com/media/W69xBwRM9fhh30eyMw/giphy-downsized-large.gif",
    "https://media.giphy.com/media/wLJSjc5fzMJtS/giphy.gif",
    "https://media.giphy.com/media/nbJUuYFI6s0w0/giphy.gif",
    "https://media.giphy.com/media/3orifiNN5G0FHxUQ8g/giphy.gif",
    "https://media.giphy.com/media/vNIFinNf5zI0U/giphy.gif",
    "https://media.giphy.com/media/xT8qB4c7mdfV2OZ2WQ/giphy.gif",
    "https://media.giphy.com/media/LPr5yo2vUQQmoQhEja/giphy.gif"
];



var toggle = document.querySelector("input[id=switch");
var switchSetting = false;

toggle.addEventListener('change', function() {
    if (this.checked) {
      console.log("Checkbox is checked..");
      switchSetting = true;
      console.log(switchSetting);
      volumeHundred();
    } else {
      console.log("Checkbox is not checked..");
      switchSetting = false;
      console.log(switchSetting);
      volumeZero();
    }
  });


    
    var volumeHeading = document.querySelector("#volume-level");
    var image = document.querySelector("#theImage");

    async function volumeHundred(){
        volumeHeading.textContent = "Volume: 100%";
        var i = 0;
        while(i < hundredPics.length && switchSetting == true){
            image.src = hundredPics[i];
            i++;
            if(i == hundredPics.length){
                i = 0;
            }
            const delay = ms => new Promise(res => setTimeout(res, ms));
            await delay(2100);
        }
    }

    async function volumeZero(){
        volumeHeading.textContent = "Volume: 0%";
        var i = 0;
        while(i < zeroPics.length && switchSetting == false){
            image.src = zeroPics[i];
            i++;
            if(i == zeroPics.length){
                i = 0;
            }
            const delay = ms => new Promise(res => setTimeout(res, ms));
            await delay(1600);
        }
    }

volumeZero();