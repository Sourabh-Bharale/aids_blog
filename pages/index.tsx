import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useStyles from './styles'
import { PostCard,Categories,PostWidget} from '../components'
import {getPosts} from '../services'
import { AsyncLocalStorage } from 'async_hooks'


// const posts = [
//   { title: 'React Testing', excerpt: ' Lorem Lipsum' },
//   { title: 'TailWind Testing', excerpt: ' Lorem Lipsum Donor' },
// ]


export default function Home ({posts}){
  const classes = useStyles()
  return (
    <div className="container mx-auto mb-8 px-10 ">
      <Head>
        <title>AIDS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
          <PostCard post={post.node} key={post.title}/>
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
              <PostWidget/>
              <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}


export async function getStaticProps(){
  const posts=(await getPosts())||[];
  return {
    props:{posts}
  }
}

