import Image from "next/image";
import { categories } from "../../data/index.js"; 
const api = "?api-key=6dGfOJbKU8MNFWz6z9s1eTghsxiPFjlXsaleh";

export const getStaticProps = async () => {
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json${api}`);
    const data = await res.json();

    return {
        props: {
            plainData: data,
            agenda: data.results
        }
    }
};

console.log(categories);

const LatestNews = ({ agenda, plainData }) => {
    return (
        <div>
            <h1 className="heading">News</h1>
            <div className="content">
                <div className="cards">
                    {agenda.map(news => {
                        const image = news.multimedia[1];
                        return (
                            <div className="card">
                                <Image src={image.url} alt={image.caption} width="600" height="400" layout="responsive" quality={100} />
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
            <h2 className="heading">Categories</h2>
            <div className="content">
            {categories.map((cat, i) => {
                return (
                    <button key={i}>{cat}</button>
                )
            })}
            </div>
            
        </div>
    )
};

export default LatestNews;