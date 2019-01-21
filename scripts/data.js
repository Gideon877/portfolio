const Footer = [
    {
        column: 'two',
    },
    {
        header: 'About',
        column: 'four',
        link: [
            {
                url: 'https://github.com/Gideon877/portfolio',
                title: 'Source Code'
            },
            {
                url: 'mailto:tblar84@gmail.com',
                title: 'Contact Me'
            }
        ]

    },
    {
        header: 'Platforms',
        column: 'four',
        link: [
            // {
            //     url: 'https://www.facebook.com/gideon877',
            //     title: 'Facebook'
            // },
            // {
            //     url: '#',
            //     title: 'Instagram'
            // },
            {
                url: 'https://twitter.com/gideon877',
                title: 'Twitter'
            }
        ]

    },
    {
        header: 'Software Engineer',
        column: 'four',
        link: [
            {
                url: '',
                title: `<i class="flag icon"></i>February 2018 ©`
            }
        ]
    },
    {
        column: 'two',
    },
]


const myWorkHistory = [
    {
        when: "February 2018 - Present",
        role: "Software Engineer",
        url: "https://getwala.com/",
        company: "Wala",
        color: "teal",
        description: {
            1: "For the past year as a Full Stack Software Engineer at Wala Digital Finance, I've been a part of a small team building out the Wala financial platform. This is a platform that utilizes the blockchain technology to allow users who don't have access to traditional banking institutions to earn, save and spend their money in the form of the Dala cryptocurrency on the platform. This also allowed them to send money from their wallets to their peers across borders at zero fees.",
            2: "My contribution and responsibilities to the development of this platform were across the board in terms of maintaining the current code base as well as fixing bugs and building out new features as required.",
            3: "We work in an agile environment which requires us to move between frontend and backend aspects as the priorities dictates.",
            4: "This allowed me to work with a range of technologies such as Amazon DynamoDB - NoSQL Database, AWS Step Functions - Flow management between microservices to build business processes, React-Native, Redux, Redux Saga, ImmutableJS.",
            5: " I also had ownership over the rewards component of the platform. implementing new reward rules using JSON Rule Engine, calculating rewards fee for each user."
        }
    },
    {
        when: "March 2016 - December 2016",
        role: "Volunteer Facilitator/Manager",
        url: "http://www.avafrica.org.za/",
        company: "Action Volunteers Africa (AVA)",
        color: "green",
        description: {
            1: "Administration - data capturing, record keeping, report writing, minute taking and logistics.",
            2: "Volunteer support - checking in, reflecting, motivating, limited counseling.",
            3: "Develop the relationship between the organization and schools.",
            4: "Visibility/Marketing of the organization - recruiting, presence at events."
        }
    }
]



const projects = [

    {
        name: "Basic web page",
        description: "Basic web page with info about me",
        type: "Front-End",
        source: "github",
        sourceCode: "https://github.com/Gideon877/greeting",
        link: "https://gideon877.github.io",
        year: 2017,
        image: 'me.jpg'
    },
    {
        name: "Greet Visitor",
        description: "this is a basic greetings web page",
        type: "Front-End",
        source: "github",
        sourceCode: "https://github.com/Gideon877/greeting",
        link: "https://gideon877.github.io/greeting/",
        year: 2017,
        image: 'amanda.jpg'   
    },
    {
        name: "registration-numbers",
        description: "This web page displays a registration number plate entered by the user.",
        type: "Front-End",
        source: "github",
        sourceCode: "",
        link: "https://gideon877.github.io/regNmbrs/", 
        year: 2017,
        image: 'john.jpg'
    },
    {
        name: "match days",
        description: "select two different dates, if the day is the same the day will be shaded",
        type: "Front-End",
        source: "github",
        sourceCode: "https://github.com/Gideon877/matchday",
        link: "https://gideon877.github.io/matchday/",
        year: 2017,
        image: 'me.jpg'  
    },
    {
        name: "greet using routes",
        description: "Web Application using ExpressJS with a route that allows you to greet different people using a HTTP GET route.",
        type: "Back-End",
        source: "github",
        sourceCode: "https://github.com/Gideon877/greetings-webapp",
        link: "https://greet-8.herokuapp.com/", 
        year: 2017,
        image: 'john.jpg'
    },
    {
        name: "registration plates",
        description: "This web app displays a registration number plate entered by the user.",
        type: "Back-End",
        source: "github",
        sourceCode: "https://github.com/Gideon877/registration_webapp",
        link: "https://regnumbers-8.herokuapp.com/reg_numbers",
        year: 2017,
        image: 'me.jpg'  
    },
    {
        name: "Shoe Catalogue API",
        description: "basic crud shoe api using nodejs, mongodb and expressjs",
        type: "Front-End",
        source: "github",
        sourceCode: "https://github.com/Gideon877/shoes_api",
        link: "https://shoes-8.herokuapp.com/",
        year: 2017,
        image: 'amanda.jpg'
    },
    {
        name: "movie app",
        description: "This is a simple web application that allow you to search for movies and add movies to a 'watch later' list.",
        type: "Back-End",
        source: "github",
        sourceCode: "https://github.com/Gideon877/Movie-API",
        link: "http://movie-8.herokuapp.com/",
        year: 2018,
        image: 'viwe.jpg'   
    },
]