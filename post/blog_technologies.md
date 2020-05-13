## Technologies

In order to pick a good tech, we should think about what the application is going to be and try not our personal opinion influence our decision. But in all honesty, it will :smile:. Knowing that some of the tech is overkill. Like using a sledge hammer when a finishing hammer is all we really need. A personal blog is not that complex and can be built with any tech we perfer, but lets see if we can persuade the decision to our favor.:smile:

 It is going to be a personal web blog. So there is no need for a C.M.S. (content management system). If I going to build a blogging platform for someone who isn't a web enthusiast then a CMS would be benefial. The CMS would allow the user to easily update the content without a developer. Another good option for a CMS would be a larger platform such as DEV.to, where there would be a lot of people contributing. It is just me adding content and I don't want to add more than I need to the webpage.
 
Using markdown files for the post has been a common way to get content to the front. Without the need to build a back-end server. Markdown file is easy to manage and once you get how to structure the files can be created quickly. Another benefit is that the file can live with in our application and parse into HTML or other forms such as JSX.

Getting into the good stuff now. At the bare minimum we could use a Static site generator would be a good fit for the blog. Generators uch as Jakyll, which can be hosted free on GitHub Pages. This would provide us a simple and efficient way to build the blog. The downside is that Jakyll is old tech and we may not have some of the features of today's modern frameworks.  If we don't want to build with Jakyll, we have to deploy it somewhere else or start learning some serverless functions. 

*..serverless functions..*

*..more benefits of Jakyll...*

Hosting an application nowadays can be done fairly easily. It really only takes a Github account and some permissions. There are many places to deploy your application such as AWS, Heroku, Azur. I have chosen to proceed with Netlify, they offer a lot of features for free and doesn't take much to get a project out in the wild.

*..more benefits of Netify..*

So now we are able to talk about the framework. The Creme Brulee of the front-end developer.  So it really can be anything that you are interested in. It is up to you and where you are at on your journey. I wanted to learn a new framework I might reach for Vue.js or Svelte.js. As of now, I want to get the blog deployed. So React.js is the library that want to use to build the blog. I have focused on React.js for the past several years and have enjoyed building applications with it.

You may have noticed that I have chosen the word "library". React itself is not a framework. A framework provides some structure in building applications and React is unopinionated, and only provides a way to build the UI. However, there are at least 3 recommended toolchains to get React more like a Framework.  They are Create-react-app, Next.js, and Gatsby. Each has their speciality and for our case, Gatsby will be the best option. 

*..more benefits of Gatsby...*

> Vue.js is a framework but has frameworks that provide additional features. Like Nuxt.js and Gridsome.js

Gatsby is pretty powerful and is able to use plugins that help us build the site. As of now, we will use 3. First, we will need to parse the Markdown file into a JSX. to which we will use MDX package. Then we need to get local files into the page to which we will reach for "gatsby-source-filesystem". These are Gatsby plugins and can be added to the config file. 

That leaves one more, this one is up to the developer. The question is how to style the page. Obviously CSS, but how. Today we have Ui libraries, CSS in JS, tailwind.css, and Scss. All good options but I have enjoyed emotion.js which gives several options to get CSS in React components

*..more benefits of Emotion...*

*..more benefits of tailwind...*


To summarize, Netlify hosts the blog. Netlify will be able to pull the application from a GitHub repository. To build the actual Blog I will use Gatsby which utilizes the package gatsby-source-filesystem and GraphQL to get the parsed markdown the are created using MDX. Appling style with emotion.js.

**Design and Layout of blog NEXT...**
