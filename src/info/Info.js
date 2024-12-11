import self from "../img/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Nathanaël",
    lastName: "",
    initials: "qrlmza", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in France'
        },
        {
            emoji: "💼",
            text: "IT Technician & Developer"
        },
        {
            emoji: "📧",
            text: "qrlmza@icloud.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/qrlmza",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/qrlmza",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.wehosting.fr/cloud/share/qrlmza/cv-2025.pdf",
            icon: "fa fa-download",
            label: 'forum'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hey ! I'm Nathanaël a web developer with a vocational baccalaureate in France and a Cisco IT Essentials 2 license. I've had a passion for computers since I was very young, but I'm also very passionate about music of all kinds. I can play guitar and piano, as well as a little violin.",
    skills:
        {
            proficientWith: ['JavaScript', 'React.js', 'Git', 'Github', 'tailwind.css', 'HTML5', 'CSS3', 'Canva', 'Python', 'NodeJS', 'Discord.JS'],
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'musical compositions',
            emoji: '🎼'
        },
        {
            label: 'photography',
            emoji: '📸'
        },
        {
            label: 'programming',
            emoji: '🖥️'
        },
        {
            label: 'be a nerd',
            emoji: '🤓'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
}