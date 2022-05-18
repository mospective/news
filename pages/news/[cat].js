import Image from "next/image";
import { categories } from "../../data/index.js"; 
const api = "?api-key=6dGfOJbKU8MNFWz6z9s1eTghsxiPFjlX";

export const getStaticPaths = async () => {
    const paths = categories.map(cat => {
        return {
            params: { cat: cat}
        }
    })

    return {
        paths: paths,
        fallback: false
    }
};

export const getStaticProps = async (context) => {
    const section = context.params.cat;
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json${api}`);
    const data = await res.json();

    return {
        props: {
            agenda: data.results
        }
    }
};

const Category = ({ agenda }) => {
    return (
        <>
            <h1 className="heading">News</h1>
            <div className="content">
                <div className="cards">
                    {/* {console.log(agenda)} */}
                    {(agenda || null).map(news => {
                        const image = !(news.multimedia === null || undefined) && news.multimedia[1];
                        return (
                            <div className="card">
                                {image && (<Image src={image.url} alt={image.caption} width="600" height="400" layout="responsive" quality={100} />)}
                                <div className="container">
                                    <p>{news.title}</p>
                                    <p>{news.byline}</p>
                                    <p>Category: {news.section}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
};

export default Category;