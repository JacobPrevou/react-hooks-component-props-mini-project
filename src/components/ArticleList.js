import React from "react";
import Article from "./Article";


function ArticleList() {
    const articles = [
        { 
            title: "Today I learned about fragments",
            date: "January 1, 2020",
            preview: "Long ago, in a hole in the ground, there lived a hobbit..."
        },
        { 
            title: "Today I learned about React children",
            date: "January 2, 2020",
            preview: "Whence all things came, shall they return"
        },
        { 
            title: "Tomorrow I learn about other stuff",
            date: "January 3, 2020",
            preview: "Unto eternity thus glimpses sleep"
        },

    ];
    return (
        <main>
            {articles.map((article) => {
                return (
                    <Article 
                        key={article.title } 
                        title={article.title } 
                        date={article.date } 
                        preview={article.preview} 
                    /> 
                )
            })}
        </main>
    )
}


export default ArticleList;
