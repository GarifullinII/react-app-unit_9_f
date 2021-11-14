import React from "react";

function PlaceholderPostHook() {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    return (
        <div>
        <h1>Posts</h1>
        {
            data.map(item => 
                <section key={item.id}>
                    <h2>
                        {item.id}. {item.title}
                    </h2>
                    <p>
                        {item.body}
                    </p>
                </section>
                )
        }
        </div>
    )
}

export default PlaceholderPostHook;