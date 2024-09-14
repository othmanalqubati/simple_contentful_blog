import { createClient } from "contentful";
import Image from "next/image";
import { space } from "postcss/lib/list";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

var client=createClient({
  accessToken: 'gd9ujtDDczHG2IhLRuBSD4ytgjgoiPqQVCOCE4taSjE',
  space: 'iizmzncindgg'
  }
);
export async function getPosts() {
    const res=await client.getEntries({content_type: 'post'});

    return {
      props: {
        posts: res.items
      }
    }
}
export default async function Home() {
  const res = await client.getEntries({ content_type: 'blogPage' }); 
  const posts = res.items;

  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.sys.id} className="card bg-white shadow-md rounded-lg p-6">
                        {post.fields.image && (
                            <img 
                                src={post.fields.image.fields.file.url} // Access the image URL
                                alt={post.fields.image.fields.title} // Use the image title for alt text
                                className="w-full h-48 object-cover rounded-md"
                            />
                        )}
                        <h2 className="text-2xl font-bold mt-4" style={{color:'black'}}>{post.fields.title}</h2>
                        <div className="text-gray-600">
                            {documentToReactComponents(post.fields.body)}
                        </div>
                    </div>
                ))}
            </div>
        </main>
        <Footer />
    </div>
);
}