import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5 text-center'>
            <h4> Differences between uncontrolled and controlled components</h4>
            <p>Controlled component Does not maintain its internal state and better control over the form elements and data. where uncontrolled component maintains its internal state and Limited control over the form elements and data.</p><br />
            <h4>How to validate React props using PropTypes?</h4>
            <p> <br /> Difference between nodejs and express js</p><br />
            <h4>What is a custom hook, and why will you create a custom hook?</h4>
            <p>Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean. Creating custom React JS hooks is relatively easy, and can search for many open sources where can get some custom hooks from the library already created by developers.<br />
            If have one or multiple React hooks that will be used at multiple locations in a code, should use custom React JS hooks. This helps in making the code more readable and make the code clean.</p>
        </div>
    );
};

export default Blogs;