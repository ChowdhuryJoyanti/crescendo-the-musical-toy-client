import React from 'react';
import UseTitle from '../../hooks/UseTitle';

const Blog = () => {

    UseTitle('Blog')

    return (
        <div>
            <h2 className='text-5xl text-center text-gray-300 font-bold'>Blog Sections</h2>
            <h5 className='text-3xl text-center text-gray-300 font-bold  mt-5'>Questions</h5>
            <div className='m-5'>
                <h6 className='m-5'>What is an access token and refresh token? How do they work and where should we store them

                    on the client-side?</h6>
                <p>Ans:When a user logins in, the authorization server issues an access token,
                    which is an artifact that client applications can use to make secure calls
                    to an API server. When a client application needs to access protected resources
                    on a server on behalf of a user, the access token lets the client signal to
                    the server that it has
                    received authorization by the user to perform certain tasks or access certain
                    resources.</p>
                <p>As mentioned, for security purposes, access tokens may be valid for a short
                    amount of time. Once they expire, client applications can use a refresh token
                    to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client
                    application get new access tokens without having to ask the user to log in again.</p>
                <p>It's important to keep in mind that the OAuth 2.0 specification defines access tokens and refresh tokens.
                    So, if we were to discuss authorization strategies in terms of other identity protocols or frameworks, such as SAML,
                    we would not have the concepts of access tokens or refresh tokens.

                    For those involved with web development, access token and refresh tokens are common
                    talk because the web extensively uses token-based authorization and authentication
                    through the OAuth 2.0 framework and the OpenID Connect protocol.</p>
            </div>




            <div className='m-5'>
                <h6 className='m-5'>Compare SQL and NoSQL databases?</h6>


                <p>Ans:SQL is a good choice when working with related data. Relational databases are efficient, flexible, and easily accessed
                    by any application. A benefit of a relational database is that when one user updates a specific record,
                    every instance of the database automatically refreshes, and that information is provided in real-time.</p>
                <p>
                    SQL and a relational database make it easy to handle a great deal of information,
                    scale as necessary and allow flexible access to data only needing to update data
                    once instead of changing multiple files, for instance. It’s also best for assessing
                    data integrity. Since each piece of information is stored in a single place, there’s</p>
                no problem with former versions confusing the picture.


                <p> While NoSQL is good when the availability of big data is more crucial,
                    SQL is valued for ensuring data validity. It’s also a wise decision when
                    a business needs to expand in response to shifting customer demands. NoSQL
                    offers high performance, flexibility, and ease of use.</p>

                <p> NoSQL is also a wise choice when dealing with large or constantly changing
                    data sets, flexible data models, or requirements that don’t fit into a relational
                    model. Document databases, like CouchDB, MongoDB, and Amazon DocumentDB, are useful
                    for handling large amounts of unstructured data.</p>
            </div>

            <div className='m-5'>
                <h6 className='m-5'>What is express js? What is Nest JS ?</h6>
                <p>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

                    Building a backend from-scratch for an application in Node.js can be tedious and time consuming.


                    From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters
                    , which is writing the business logic for an application.
                    By using web frameworks like Express.js, developers can save time and focus on other important tasks.</p>

                <p>Nest.JS is a framework that helps build Node.JS
                    server-side applications. The Nest framework is built using TypeScript which
                    allows developers to build highly scalable and testable applications. </p>

            </div>

            <div className='m-5'>
                <h6 className='m-5'>What is MongoDB aggregate and how does it work ?</h6>
                <p>Ans:In programming, we often run a series of operations on a collection of items.

                    First, map(): we take the objects and reduce them down to their numerical values.
                    Second, reduce(): We consolidate the output to a single number—the sum of the numbers.
                    Aggregation operations process data records and return computed results.

                    Not only do we have the ability to aggregate data on the client side with JavaScript,
                    but we can use MongoDB to run operations on the server
                    against our collections stored in the database before the result is returned to the client. </p>

                <p>When you need to do more complex aggregation, you can use the MongoDB aggregation pipeline
                    . Aggregation pipelines are collections of stages that,
                    combined with the MongoDB query syntax, will allow you to obtain an aggregated result.

                    Before we dive into the code, let's understand what the aggregation pipeline itself does and
                    how it works. In the aggregation pipeline, you list out a series of instructions in a "stage.
                    " For each stage that's defined, MongoDB executes them one after another in order to give a
                    finalized output you're able to use. Let's look at an example usage of the aggregate command:</p>
            </div>
        </div>
    );
};

export default Blog;