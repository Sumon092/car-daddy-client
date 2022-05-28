import React from 'react';

const Blogs = () => {
    return (
        <div className='px-10 lg:px-24 bg-white leading-6 shadow-sm py-10'>
            <div>
                <h3 className='text-neutral text-2xl'>Q:1 How will  improve the performance of a React Application</h3>
                <p><span className='text-xl'>Ans</span>: We can improve the performance of React application in several ways,Some of them given below:
                </p>
                <ul className='leading-10'>
                    <li className='leading-7'>We know that a state update in parent component re-render the parent and its child component so, Where necessary keep the component state local.</li>
                    <li>To prevent unnecessary re-rendering we can use Memoizing react component</li>
                    <li>Using React.memo we can prevent prevent re-rendering if the props received in that component never changes</li>
                    <li>Using useCallback function we can solve dependency array changes</li>
                    <li>We can use useMemo Hook to avoid re-computing the same expensive value in a component </li>
                </ul>
            </div>
            <div>
                <h2 className='text-2xl py-5 text-neutral'>Q:2 What are the different ways to manage a state in a React application</h2>
                <p>Ans: State manage is very important in React application.We can manage state different ways, some are given below:</p>

                <p><span className='font-bold text-xl'>Local state(UI)</span>: Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook</p>
                <p><span className='text-xl font-bold'>Global (UI) state – </span> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                <p><span className='text-xl font-bold'>Server state – </span> Data that comes from an external server that must be integrated with our UI state</p>
                <p><span className='text-xl font-bold'>URL state – </span> Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
            <div className='py-5'>
                <h2 className="text-2xl text-neutral">How does prototypical inheritance work?</h2>

                <p className='text-xl'>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
            </div>

            <div className='py-5'>
                <h2 className='text-2xl text-neutral'>Q:4 Why do we not set state directly?</h2>
                <p className='text-xl'>Ans : If you update it directly, calling the setState() afterward may just replace the update you made.
                    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    You will lose control of the state across all components</p>
            </div>
            <div className='py-5 '>
                <h2 className='text-2xl text-neutral'>Q5: What is unit test? Why should We use unit test?</h2>
                <p className='text-xl'>Ans : Unit test is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation</p>

                <p className='text-xl'>
                    Who should write unit tests?<br />
                    Developers write unit tests so they can repeatedly run them and check that no bugs have been introduced. If unit tests are slow, developers are more likely to skip running them on their own machines. One slow test won't make a significant difference; add one thousand more and we're surely stuck waiting for a whil
                </p>
            </div>
        </div>
    );
};

export default Blogs;