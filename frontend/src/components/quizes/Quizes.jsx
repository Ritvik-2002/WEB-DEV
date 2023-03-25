import React, { useState, useRef, useEffect } from 'react';

const Quizes = () => {

    return (
        <>

            <section id='tutoriall' className='tutorialll'>

                <div className="containerr">
                    <div className="topicc">Quiz - Programming MCQ's Test</div>
                    <div className="contentt">
                        <input type="radio" name="sliderr" checked id="stack" />
                        <input type="radio" name="sliderr" id="queue" />
                        <input type="radio" name="sliderr" id="bst" />
                        <input type="radio" name="sliderr" id="heap" />
                        <input type="radio" name="sliderr" id="hash" />
                        <div className="listt">
                            <label for="stack" className="stack">
                                <span className="title">DS</span>
                            </label>
                            <label for="queue" className="queue">
                                <span className="title">Algo</span>
                            </label>
                            <label for="bst" className="bst">
                                <span className="title">Java</span>
                            </label>
                            <label for="heap" className="heap">
                                <span className="title">Python</span>
                            </label>
                            <label for="hash" className="hash">
                                <span className="title">JS</span>
                            </label>
                            <div className="sliderr"></div>
                        </div>
                        <div className="text-content">
                            <div className="stack text">
                                <div className="title">Data Structures</div>
                                <p>Data structures serve as the basis for abstract data types (ADT). The ADT defines the logical form of the data type. The data structure implements the physical form of the data type</p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfY5oIAz4R9Ty-LBpx7h4th6OJ0-RkrxIlLslRV4NjwwW8_uw/viewform?embedded=true">Start Quiz</a>
                            </div>
                            <div className="queue text">
                                <div className="title">Algorithms</div>
                                <p>An algorithm is a procedure used for solving a problem or performing a computation. Algorithms act as an exact list of instructions that conduct specified actions step by step in either hardware- or software-based routines.</p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSflwS89sG7H98J9vFgFqJgsKaZ5gpq3yUlOiW3up7RQQ-qRnw/viewform?embedded=true&fbzx=-9141920920678185119">Start Quiz</a>
                            </div>
                            <div className="bst text">
                                <div className="title">Java - Object Oriented Programming</div>
                                <p>Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies. It is a computing platform for application development. Java is fast, secure, and reliable.</p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHFDm_BakVxro_zJI78OF2OLJpXgDzzaAVMHD9hptWlXBSpA/viewform?embedded=true">Start Quiz</a>
                            </div>
                            <div className="heap text">
                                <div className="title">Python Language</div>
                                <p>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.  </p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgD7yFEJtqpkImDiLAaQ7w9VcsO688gr1V3Gl7FqwM5yXtWQ/viewform?embedded=true">Start Quiz</a>
                            </div>
                            <div className="hash text">
                                <div className="title">JavaScript - FSD</div>
                                <p>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.</p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSchDBnai_Aup7YFJQegg4z-qoB338p010VgZRxBYDT17xoRew/viewform?embedded=true">Start Quiz</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='margin'></div> */}
            </section>
        </>
    )

}
export default Quizes;