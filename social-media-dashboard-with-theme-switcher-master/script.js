let body = document.querySelector('body');
let oval = document.querySelector('.oval');
let radio = document.querySelectorAll('input[type=radio]');
let label = document.querySelector('label');
let header = document.querySelector('.header').children;
let social_media = document.querySelector('.social_media').children;
let facebook_children = document.querySelector('.facebook').children;
let twitter_children = document.querySelector('.twitter').children;
let instagram_children = document.querySelector('.instagram').children;
let youtube_children = document.querySelector('.youtube').children;
let overview = document.querySelector('.overview').children;

for(let i = 0; i < radio.length; i++){
    radio[i].addEventListener('click', (e) =>{
        if(radio[1].checked){
            for(let i = 0; i < social_media.length; i++){
                social_media[i].style.backgroundColor = 'rgba(37, 42, 65)';
            }

            for(let i = 0; i < overview.length; i++){
                overview[i].style.backgroundColor = 'rgba(37, 42, 65)';
                overview[0].style.backgroundColor = 'transparent';
            }

            //body
            body.style.backgroundColor = 'rgb(30, 32, 42)';
            
            //oval
            oval.style.backgroundColor = 'rgb(31, 33, 46)';

            //label
            label.style.background = 'linear-gradient(to right, hsl(210, 78%, 56%),  hsl(146, 68%, 55%))';

            //header
            header[0].style.color = 'white';
            header[1].style.color = 'rgba(255, 255, 255, 0.6)';
            header[2].children[0].style.color = 'white';

            //facebook children
            facebook_children[1].style.color = 'rgba(255, 255, 255, 0.6)';
            facebook_children[2].style.color = 'rgba(255, 255, 255)';
            facebook_children[3].style.color = 'rgba(255, 255, 255, 0.6)';

            //twitter children
            twitter_children[1].style.color = 'rgba(255, 255, 255, 0.6)';
            twitter_children[2].style.color = 'rgba(255, 255, 255)';
            twitter_children[3].style.color = 'rgba(255, 255, 255, 0.6)';

            //instgram children
            instagram_children[2].style.color = 'rgba(255, 255, 255, 0.6)';
            instagram_children[3].style.color = 'rgba(255, 255, 255)';
            instagram_children[4].style.color = 'rgba(255, 255, 255, 0.6)';

            //youtube children
            youtube_children[1].style.color = 'rgba(255, 255, 255, 0.6)';
            youtube_children[2].style.color = 'rgba(255, 255, 255)';
            youtube_children[3].style.color = 'rgba(255, 255, 255, 0.6)';

            //overview
            overview[0].style.color = 'white';
            overview[0].style.backgroundColor = 'transparent';
            overview[1].children[0].style.color = 'rgba(255, 255, 255, 0.6)';
            overview[1].children[2].style.color = 'rgba(255, 255, 255)';
            overview[2].children[0].style.color = 'rgba(255, 255, 255, 0.6)';
            overview[2].children[2].style.color = 'rgba(255, 255, 255)';
            overview[3].children[0].style.color = 'rgba(255, 255, 255, 0.6)';
            overview[3].children[2].style.color = 'rgba(255, 255, 255)';
            overview[4].children[0].style.color = 'rgba(255, 255, 255, 0.6)';
            overview[4].children[2].style.color = 'rgba(255, 255, 255)';
            overview[5].children[0].style.color = 'rgba(255, 255, 255, 0.6)';
            overview[5].children[2].style.color = 'rgba(255, 255, 255)';
            overview[6].children[0].style.color = 'rgba(255, 255, 255, 0.6)';
            overview[6].children[2].style.color = 'rgba(255, 255, 255)';
            overview[7].children[0].style.color = 'rgba(255, 255, 255, 0.6)';
            overview[7].children[2].style.color = 'rgba(255, 255, 255)';
            overview[8].children[0].style.color = 'rgba(255, 255, 255, 0.6)';
            overview[8].children[2].style.color = 'rgba(255, 255, 255)';
        } else{
            for(let i = 0; i < social_media.length; i++){
                social_media[i].style.backgroundColor = 'hsl(227, 47%, 96%)';
            }

            for(let i = 0; i < overview.length; i++){
                overview[i].style.backgroundColor = 'hsl(227, 47%, 96%)';
                overview[0].style.backgroundColor = 'transparent';
            }

            //body
            body.style.backgroundColor = 'white';
            
            //oval
            oval.style.backgroundColor = 'hsl(225, 100%, 98%)';

            //label
            label.style.background = 'rgb(174, 179, 203)';

            //header
            header[0].style.color = 'hsl(230, 17%, 14%)';
            header[1].style.color = 'rgb(99, 104, 126)';
            header[2].children[0].style.color = 'rgb(99, 104, 126)';

            //facebook children
            facebook_children[1].style.color = 'rgb(99, 104, 126)';
            facebook_children[2].style.color = 'hsl(230, 100%, 15%)';
            facebook_children[3].style.color = 'rgb(99, 104, 126)';

            //twitter children
            twitter_children[1].style.color = 'rgb(99, 104, 126)';
            twitter_children[2].style.color = 'hsl(230, 100%, 15%)';
            twitter_children[3].style.color = 'rgb(99, 104, 126)';

            //instagram children
            instagram_children[2].style.color = 'rgb(99, 104, 126)';
            instagram_children[3].style.color = 'hsl(230, 100%, 15%)';
            instagram_children[4].style.color = 'rgb(99, 104, 126)';

            //youtube children
            youtube_children[1].style.color = 'rgb(99, 104, 126)';
            youtube_children[2].style.color = 'hsl(230, 100%, 15%)';
            youtube_children[3].style.color = 'rgb(99, 104, 126)';

            //overview
            overview[0].style.color = 'rgb(99, 104, 126)';
            overview[0].style.backgroundColor = 'transparent';
            overview[1].children[0].style.color = 'rgb(99, 104, 126)';
            overview[1].children[2].style.color = 'hsl(230, 100%, 15%)';
            overview[2].children[0].style.color = 'rgb(99, 104, 126)';
            overview[2].children[2].style.color = 'hsl(230, 100%, 15%)';
            overview[3].children[0].style.color = 'rgb(99, 104, 126)';
            overview[3].children[2].style.color = 'hsl(230, 100%, 15%)';
            overview[4].children[0].style.color = 'rgb(99, 104, 126)';
            overview[4].children[2].style.color = 'hsl(230, 100%, 15%)';
            overview[5].children[0].style.color = 'rgb(99, 104, 126)';
            overview[5].children[2].style.color = 'hsl(230, 100%, 15%)';
            overview[6].children[0].style.color = 'rgb(99, 104, 126)';
            overview[6].children[2].style.color = 'hsl(230, 100%, 15%)';
            overview[7].children[0].style.color = 'rgb(99, 104, 126)';
            overview[7].children[2].style.color = 'hsl(230, 100%, 15%)';
            overview[8].children[0].style.color = 'rgb(99, 104, 126)';
            overview[8].children[2].style.color = 'hsl(230, 100%, 15%)';
        }
    });
} 

for(let i = 0; i < social_media.length; i++){
    social_media[i].addEventListener('pointerover', () =>{
        social_media[i].style.backgroundColor = 'rgba(174, 179, 203, 0.3)';
    });

    social_media[i].addEventListener('pointerleave', ()=> {
        if(radio[1].checked){
            social_media[i].style.backgroundColor = 'rgba(37, 42, 65)';
        }
        if(!radio[1].checked){
            social_media[i].style.backgroundColor = 'hsl(227, 47%, 96%)';
        }
    });
}

for(let i = 0; i < overview.length; i++){
    overview[i].addEventListener('pointerover', () =>{
        overview[i].style.backgroundColor = 'rgba(174, 179, 203, 0.3)';
        overview[0].style.backgroundColor = 'transparent';
    });

    overview[i].addEventListener('pointerleave', ()=> {
        if(radio[1].checked){
            overview[i].style.backgroundColor = 'rgba(37, 42, 65)';
            overview[0].style.backgroundColor = 'transparent';
        }
        if(!radio[1].checked){
            overview[i].style.backgroundColor = 'hsl(227, 47%, 96%)';
            overview[0].style.backgroundColor = 'transparent';
        }
    });
}