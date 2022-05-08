import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useStyles from './styles'


const posts=[
{  title:'React Testing', excerpt: ' Lorem Lipsum'},
{  title:'TailWind Testing', excerpt: ' Lorem Lipsum Donor'},
];



const Home: NextPage = () => {
  const classes=useStyles();
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>AIDS Blog</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
    <div >
      {
        posts.map((post,index)=>(
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
    </div>
    <div className="lg:col-span-4 col-span-1">
          <h1 className="text-3xl font-bold underline">Hello Tailwind</h1>
    </div>
    </div>
  )
}

export default Home
