import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='main'>
            <div className=' pt-20 md:pt-10'>
                <h1 className='text-4xl text-center font-semibold'>Frequently asked interview question</h1>
                <div className='my-5'>
                    <h2 className='text-2xl font-medium'>1. How does React work?</h2>
                    <ul className='my-3'>
                        <li><strong>React</strong> is a declarative, efficient, and flexible JavaScript library for building user interfaces.</li>
                        <li>
                            <strong>React</strong> uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                        </li>
                        <li>
                            <strong>React</strong> implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                        </li>
                    </ul>
                </div>
                <div className='my-5'>
                    <h2 className='text-2xl font-medium'>2. What is difference between props and state?</h2>
                    <ul className='my-3'>
                        <div className='mb-3'>
                            <li><strong>i. Use Case</strong></li>
                            <li><strong>State</strong> is used to store the data of the components that have to be rendered to the view</li>
                            <li><strong>Props</strong> are used to pass data and event handlers to the children components</li>
                        </div>
                        <div className='mb-3'>
                            <li><strong>ii. Mutability</strong></li>
                            <li><strong>State</strong> holds the data and can change over time</li>
                            <li><strong>Props</strong> are immutable—once set, props cannot be changed</li>
                        </div>
                        <div className='mb-3'>
                            <li><strong>iii. Component</strong></li>
                            <li><strong>State</strong> can only be used in class components</li>
                            <li><strong>Props</strong> can be used in both functional and class components</li>
                        </div>
                        <div>
                            <li><strong>iv. Updation</strong></li>
                            <li>Event handlers generally update <strong>state</strong></li>
                            <li>The parent component sets <strong>props</strong> for the children components</li>
                        </div>
                    </ul>
                </div>
                <div className='my-5'>
                    <h2 className='text-2xl font-medium'>3. What are some of the features of the useEffect hook?</h2>
                    <ul className='my-3'>
                        <li className='text-xl font-medium mb-1'> Some common use cases of useEffect are:</li>
                        <li>i. Add an event listener for a button</li>
                        <li>ii. Data fetching from API when component mounts</li>
                        <li>iii. Perform an action when state or props change</li>
                        <li>iv. Clean up event listeners when the component unmounts</li>
                        <li className='text-slate-70000 mt-2 text-lg'>In each case above, <strong>useEffect</strong> is used in place of a lifecycle method.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Question;