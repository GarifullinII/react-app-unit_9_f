import React from "react";

function CommentsListHook(props) {

    return (
        <div>
            <div>
                <button>Only even comments</button>
            </div>
            {props.data.map((item, index) => (
                <section key={item.id}>
                    <p>
                        <b>
                            {index + 1}. {item.email}
                        </b>
                    </p>
                    <p>
                        {item.body}
                    </p>
                </section>
            ))}
        </div>
    )
}

export default CommentsListHook;