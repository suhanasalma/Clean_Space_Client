import React from "react";
import img1 from '../../Assests/Blogs/1.png'
import img2 from '../../Assests/Blogs/2.png'
import img3 from '../../Assests/Blogs/3.jpg'
import img4 from '../../Assests/Blogs/4.png'

const Blogs = () => {
  return (
    <div className="my-20">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
              Welcome To The Blog
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
              these are proggaming related QnA
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                What is the difference between SQL and NoSQL
              </h3>
              <p className="mt-3 text-lg dark:text-gray-400">
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL. There are three practical differences between
                SQL and NoSQL:
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Language
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      SQL has been around for over 40 years, so it is
                      recognizable, documented, and widely-used. Safe and
                      versatile, it’s particularly well suited for complex
                      queries. However, SQL restricts the user to working within
                      a predefined tabular schema, and more care must be taken
                      to organize and understand the data before it is used
                    </p>
                    <p className="mt-2 dark:text-gray-400">
                      The dynamic schemata of NoSQL databases allow
                      representation of alternative structures, often alongside
                      each other, encouraging greater flexibility. There is less
                      emphasis on planning, greater freedom when adding new
                      attributes or fields, and the possibility of varied syntax
                      across databases. As a group, however, NoSQL languages
                      lack the standard interface which SQL provides, so more
                      complex queries can be difficult to execute.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Structure
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      SQL database schemata always represent relational, tabular
                      data, with rules about consistency and integrity. They
                      contain tables with columns (attributes) and rows
                      (records), and keys have constrained logical
                      relationships. NoSQL databases need not stick to this
                      format
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Support and communities
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      SQL databases represent massive communities, stable
                      codebases, and proven standards. Multitudes of examples
                      are posted online and experts are available to support
                      those new to programming relational data.
                    </p>
                    <p className="mt-2 dark:text-gray-400">
                      NoSQL technologies are being adopted quickly, but
                      communities remain smaller and more fractured. However,
                      many SQL languages are proprietary or associated with
                      large single-vendors, while NoSQL communities benefit from
                      open systems and concerted commitment to onboarding users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={img1}
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                  What is JWT? How JWT (JSON Web Token) authentication works?
                </h3>
                <p className="mt-3 text-lg dark:text-gray-400">
                  JSON Web Token (JWT) is an open standard (RFC 7519) for
                  securely transmitting information between parties as JSON
                  object. It is compact, readable and digitally signed using a
                  private key/ or a public key pair by the Identity
                  Provider(IdP).
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Structure of JWT
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        A JSON Web Token consists of 3 parts separated by a
                        period. Header, Payload, Signature
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        How it works?
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Basically the identity provider(IdP) generates a JWT
                        certifying user identity and Resource server decodes and
                        verifies the authenticity of the token using secret salt
                        / public key.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Security
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Just like any other authentication mechanism, JWT also
                        has its own pros and cons.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={img2}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                Differences Between Node.js and JavaScript?
              </h3>
              <p className="mt-3 text-lg dark:text-gray-400">
                JavaScript is a lightweight, object-oriented programming
                language for creating dynamic HTML pages with combined effects.
                When launched in the V8 engine or via the node interpreter,
                Node.js typically represents several objects and functions
                accessible to JavaScript code.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Language Type
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      JavaScript is a client-side scripting language that is
                      lightweight, cross-platform, and interpreted. Both Java
                      and HTML include it. Node.js, on the other hand, is a
                      V8-based server-side programming language.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Engine Support
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Any engine may run JavaScript. As a result, writing
                      JavaScript is incredibly easy, and any working environment
                      is similar to a complete browser. Node.js, on the other
                      hand, only enables the V8 engine. Written JavaScript code,
                      on the other hand, can run in any context, regardless of
                      whether the V8 engine is supported.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      More Specific
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      JavaScript is a simple programming language that can be
                      used with any browser that has the JavaScript Engine
                      installed. Node.js, on the other hand, is an interpreter
                      or execution environment for the JavaScript programming
                      language. It requires libraries that can be conveniently
                      accessed from JavaScript programming to be more helpful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={img3}
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                  How does NodeJS handle multiple requests at the same time?
                </h3>
                <p className="mt-3 text-lg dark:text-gray-400">
                  We know NodeJS application is single-threaded. Say, if
                  processing involves request A that takes 10 seconds, it does
                  not mean that a request which comes after this request needs
                  to wait 10 seconds to start processing because NodeJS event
                  loops are only single-threaded. The entire NodeJS architecture
                  is not single-threaded.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        EventQueue
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        NodeJS receives multiple client requests and places them
                        into EventQueue. NodeJS is built with the concept of
                        event-driven architecture. NodeJS has its own EventLoop
                        which is an infinite loop that receives requests and
                        processes them. EventLoop is the listener for the
                        EventQueue.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Worker Threads
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        If NodeJS can process the request without I/O blocking
                        then the event loop would itself process the request and
                        sends the response back to the client by itself. But, it
                        is possible to process multiple requests parallelly
                        using the NodeJS cluster module or worker_threads
                        module.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Multi Cores
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        A single instance of Node.js runs in a single thread. If
                        you have a multi-core system then you can utilize every
                        core. Sometimes developer wants to launch a cluster of
                        NodeJS process to take advantage of the multi-core
                        system. The cluster module allows easy creation of child
                        processes that all share the same server ports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={img4}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
