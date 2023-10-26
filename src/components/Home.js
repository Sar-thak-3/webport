import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = (props) => {
  const handleOpen = () => {
    console.log("sodhvnjdfbvj");
    const smMenuBtn = document.querySelector(".main-header__sm-scr-nav-btn");
    const smMenu = document.querySelector(".main-header__sm-menu");
    const smMenuCloseBtn = document.querySelector(
      ".main-header__sm-menu-close"
    );

    const smMenuLinks = document.querySelectorAll(".main-header__sm-menu-link");
    const smMenuLink1 = document.querySelector(".main-header__sm-menu-link--1");
    const smMenuLink2 = document.querySelector(".main-header__sm-menu-link--2");
    const smMenuLink3 = document.querySelector(".main-header__sm-menu-link--3");
    const smMenuLink4 = document.querySelector(".main-header__sm-menu-link--4");

    smMenu.style.transitionDelay = "0s";
    smMenu.classList.add("main-header__sm-menu--active");

    smMenuLink1.style.transitionDelay = ".5s";
    smMenuLink1.style.transform = "translateY(0)";
    smMenuLink1.style.opacity = "1";

    smMenuLink2.style.transitionDelay = ".8s";
    smMenuLink2.style.transform = "translateY(0)";
    smMenuLink2.style.opacity = "1";

    smMenuLink3.style.transitionDelay = "1.1s";
    smMenuLink3.style.transform = "translateY(0)";
    smMenuLink3.style.opacity = "1";

    smMenuLink4.style.transitionDelay = "1.4s";
    smMenuLink4.style.transform = "translateY(0)";
    smMenuLink4.style.opacity = "1";
  };

  const handleClose = () => {
    const smMenuBtn = document.querySelector(".main-header__sm-scr-nav-btn");
    const smMenu = document.querySelector(".main-header__sm-menu");
    const smMenuCloseBtn = document.querySelector(
      ".main-header__sm-menu-close"
    );

    const smMenuLinks = document.querySelectorAll(".main-header__sm-menu-link");
    const smMenuLink1 = document.querySelector(".main-header__sm-menu-link--1");
    const smMenuLink2 = document.querySelector(".main-header__sm-menu-link--2");
    const smMenuLink3 = document.querySelector(".main-header__sm-menu-link--3");
    const smMenuLink4 = document.querySelector(".main-header__sm-menu-link--4");

    smMenuLink4.style.transitionDelay = "0s";
    smMenuLink4.style.transform = "translateY(50px)";
    smMenuLink4.style.opacity = "0";

    smMenuLink3.style.transitionDelay = ".3s";
    smMenuLink3.style.transform = "translateY(50px)";
    smMenuLink3.style.opacity = "0";

    smMenuLink2.style.transitionDelay = ".6s";
    smMenuLink2.style.transform = "translateY(50px)";
    smMenuLink2.style.opacity = "0";

    smMenuLink1.style.transitionDelay = ".9s";
    smMenuLink1.style.transform = "translateY(50px)";
    smMenuLink1.style.opacity = "0";

    smMenu.style.transitionDelay = "1.2s";
    smMenu.classList.remove("main-header__sm-menu--active");
  };

  return (
    <>
      <header class="main-header">
        <div class="main-header__logo-container">
          <div class="main-header__logo-img-cont">
            <img
              src={require("../assets/photo.png")}
              alt="logo Image"
              class="main-header__logo-img"
            />
          </div>
          <h4 class="main-header__logo-text">Sarthak Garg</h4>
        </div>
        <nav class="main-header__navigation">
          <ul class="main-header__navigation-links">
            <li class="main-header__navigation-link">
              <a href="./index.html"> Home </a>
            </li>
            <li class="main-header__navigation-link">
              <a href="./index.html#about"> About </a>
            </li>
            <li class="main-header__navigation-link">
              <a href="./index.html#projects"> Projects </a>
            </li>
            <li class="main-header__navigation-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </nav>
        <div onClick={handleOpen} class="main-header__sm-scr-nav-btn">
          <div class="main-header__sm-scr-nav-btn-line"></div>
          <div class="main-header__sm-scr-nav-btn-line"></div>
        </div>
        <div class="main-header__sm-menu">
          <div onClick={handleClose} class="main-header__sm-menu-close"></div>
          <ul class="main-header__sm-menu-links">
            <li onClick={handleClose}>
              <a
              href="./index.html"
                class="main-header__sm-menu-link main-header__sm-menu-link--1"
                name=""
              >
                Home
              </a>
            </li>

            <li onClick={handleClose}>
              <a
              href="#about"
                class="main-header__sm-menu-link main-header__sm-menu-link--2"
                name="about"
              >
                About
              </a>
            </li>
            <li onClick={handleClose}>
              <a
              href="#projects"
                class="main-header__sm-menu-link main-header__sm-menu-link--3"
                name="projects"
              >
                Projects
              </a>
            </li>
            <li onClick={handleClose}>
              <a
              href="#contact"
                class="main-header__sm-menu-link main-header__sm-menu-link--4"
                name="contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- <button class="btn btn-theme btn-sm">Download CV</button> --> */}
      </header>

      {/* <!--Remove or Comment out this theme selector code when you are done with choosing the right color for your theme so this color selector don't appear when you host the site online--> */}
      {/* <div class="themeClrSelector">
    <input placeholder="Color Selector" type="color" value="#1DA1F2" class="themeClrSelector__input" />
    <img alt="theme color tester" src="https://img.icons8.com/fluent/48/000000/rgb-circle-1.png"
      class="themeClrSelector__img" />
  </div> */}
      {/* <!----> */}

      <section id="home-hero" class="home-hero">
        <div class="home-hero__content">
          <div class="home-hero__info">
            <h1 class="heading-primary home-hero__heading-primary">
              <span class="heading-primary__sm"> Hello 👋</span>
              <span class="heading-primary__main">
                I'm Sarthak Garg! A passionate Software Developer
              </span>
            </h1>
            <button class="btn btn-theme home-hero__btn-theme">Projects</button>
            <button class="btn btn-inv home-hero__btn-theme">Contact</button>
          </div>
        </div>
      </section>
      <section id="about" class="about main-section">
        <div class="main-container">
          <h2 class="heading-secondary projects__heading-secondary">
            <span class="heading-secondary__sm"> About 🦄</span>
            <span class="heading-secondary__main">
              Here you will find more information about me, what I do, and list
              of my current skills in programming
            </span>
          </h2>
          <div class="main-section__content">
            <div class="about__info">
              <div class="about__main-info">
                <h3 class="heading-quaternary about__heading-quaternary">
                  My Story
                </h3>
                <p class="text-primary about__text-primary">
                  <span>
                    I am Sarthak Garg, basically from Dehradun, Uttarkhand.
                    Currently I am staying in Chandigarh and pursuing
                    Undergraduate degree from Punjab Engineering College,
                    Chandigarh in Electrical Stream.
                  </span>
                  <span>
                    I am highly passionate about Software Development. I have
                    various skills in Development like Artificial Intellingence,
                    Web Development, Web Automation, Web scraping, Operating
                    Systems, and Computer Networking.
                  </span>
                  <span>
                    I have various achievements and contributions in the
                    technology. Some of them are:-
                    <ul style={{ listStyle: "circle" }}>
                      <li>
                        Currently contributing to two major open source projects{" "}
                        <a
                          href="https://github.com/unifyai/ivy/pulls/Sar-thak-3"
                          style={{ textDecorationLine: "underline" }}
                        >
                          Ivy
                        </a>{" "}
                        &{" "}
                        <a href="" style={{ textDecorationLine: "underline" }}>
                          Tensorflow
                        </a>
                      </li>
                      <li>
                        Currently securing 150th rank in{" "}
                        <a
                          href="https://gssoc.girlscript.tech/leaderboard"
                          style={{ textDecorationLine: "underline" }}
                        >
                          Girlscript Summer of Code 2023
                        </a>{" "}
                        out of 10k participants
                      </li>
                      <li>
                        Secured 35th rank in{" "}
                        <a
                          style={{ textDecorationLine: "underline" }}
                          href="https://pwoc.vercel.app/leaderboard"
                        >
                          JGEC Winter of Code 2023
                        </a>
                      </li>
                      <li>
                        Among top 5 contributors in{" "}
                        <a
                          style={{ textDecorationLine: "underline" }}
                          href="https://jwoc.tech/"
                        >
                          PEC Winter of Code 2023
                        </a>
                      </li>
                    </ul>
                  </span>
                </p>
                <button class="btn btn-theme about__btn-theme">Projects</button>
              </div>
              <div class="about__skill-info">
                <h3 class="heading-quaternary about__heading-quaternary">
                  My Skills
                </h3>
                <ul class="about__skills">
                  <li class="about__skill">C</li>
                  <li class="about__skill">C++</li>
                  <li class="about__skill">Python</li>
                  <li class="about__skill">html</li>
                  <li class="about__skill">css</li>
                  <li class="about__skill">javascript</li>
                  <li class="about__skill">react</li>
                  <li class="about__skill">node</li>
                  <li class="about__skill">next</li>
                  <br />
                  <li class="about__skill">Artificial Intelligence</li>
                  <li class="about__skill">numpy</li>
                  <li class="about__skill">pandas</li>
                  <li class="about__skill">scikit-learn</li>
                  <li class="about__skill">opencv</li>
                  <li class="about__skill">pytorch</li>
                  <li class="about__skill">tensorflow</li>
                  <li class="about__skill">git</li>
                  <li class="about__skill">github</li>
                  <li class="about__skill">vscode</li>
                  <li class="about__skill">linux</li>
                  <li class="about__skill">postman</li>
                  <li class="about__skill">bootstrap</li>
                  <li class="about__skill">tailwind</li>
                  <li class="about__skill">plotly</li>
                  <li class="about__skill">MySQL</li>
                  <li class="about__skill">MongoDB</li>
                  <li class="about__skill">Azure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="skills-showcase">
        <ul class="skills-showcase__list">
          <li class="skills-showcase__list-item">
            <i class="devicon-html5-plain"></i>
          </li>
          <li class="skills-showcase__list-item">
            <i class="devicon-css3-plain"></i>
          </li>
          <li class="skills-showcase__list-item">
            <i class="devicon-javascript-plain"></i>
          </li>
          <li class="skills-showcase__list-item">
            <i class="devicon-react-original"></i>
          </li>
          <li class="skills-showcase__list-item">
            <i class="devicon-sass-original"></i>
          </li>
          <li class="skills-showcase__list-item">
            <i class="devicon-nodejs-plain"></i>
          </li>
          <li class="skills-showcase__list-item">
            <i class="devicon-git-plain"></i>
          </li>
          <li class="skills-showcase__list-item">
            <i class="devicon-python-plain"></i>
          </li>
          <li class="skills-showcase__list-item">
            <i class="devicon-cplusplus-plain"></i>
          </li>
          <li class="skills-showcase__list-item">
            <i class="devicon-tensorflow-original"></i>
          </li>
          <li class="skills-showcase__list-item">
            <i class="devicon-nextjs-original"></i>
          </li>
        </ul>
      </section>
      <section id="projects" class="projects main-section">
        <div class="main-container">
          <h2 class="heading-secondary projects__heading-secondary">
            <span class="heading-secondary__sm"> Projects 🛠️</span>
            <span class="heading-secondary__main">
              Here you will find some of the personal and clients projects that
              I created with the project details
            </span>
          </h2>
          <div class="main-section__content">
            <div class="projects__list">
              <div class="projects__list-item">
                <div class="projects__list-item-count">
                  <span class="projects__list-item-count-num"> 1 </span>
                  <span class="projects__list-item-count-line"> </span>
                  <span class="projects__list-item-count-end-dot"> </span>
                </div>
                <div class="projects__list-item-details">
                  {/* <div class="projects__list-item-img-cont">
                <img src="./assets/mock.png" alt="Project Image" class="projects__list-item-img" />
              </div> */}
                  <h3 class="heading-tertiary projects__list-item-heading-tertiary">
                    Extract
                  </h3>
                  <hr class="projects__title-text-divider" />

                  <p class="text-primary projects__list-item-text-primary">
                    <span>
                      <ul style={{ listStyle: "circle" }}>
                        <li>
                          Cloud database for users to store their curriculum
                          notes
                        </li>
                        <li>
                          Huge database of questions & answers related to any
                          curriculum
                        </li>
                        <li>
                          Text data extracted from images posted by users on
                          their database
                        </li>
                        <li>
                          Text data is processed to extract out every possible
                          question
                        </li>
                        <li>
                          Data is then available freely to users to search and
                          post their questions
                        </li>
                      </ul>
                    </span>
                    {/* <!-- <br /> */}
                    {/* <br /> */}
                    <span></span>
                  </p>
                  <a
                    href="https://extract-frontend-six.vercel.app/"
                    class="btn btn-theme projects__btn-theme"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/Sar-thak-3/Extract"
                    class="btn btn-inv projects__btn-inv"
                  >
                    Code Link
                  </a>
                </div>
              </div>
              <div class="projects__list-item projects__list-item--inv">
                <div class="projects__list-item-details">
                  {/* <div class="projects__list-item-img-cont">
                <img src="./assets/mock.png" alt="Project Image" class="projects__list-item-img" />
              </div> */}
                  <h3 class="heading-tertiary projects__list-item-heading-tertiary">
                    Image Captioning
                  </h3>
                  <hr class="projects__title-text-divider" />

                  <p class="text-primary projects__list-item-text-primary">
                    <span>
                      <ul style={{ listStyle: "circle" }}>
                        <li>
                          LSTM & Convolutional model to caption the images
                        </li>
                        <li>69k images used to train the model.</li>
                        <li>Tech stack used - Tensorflow, Colab, Keras</li>
                      </ul>
                    </span>
                    {/* <!-- <br />
                  <br /> --> */}
                    <span></span>
                  </p>
                  <a
                    href="https://github.com/Sar-thak-3/Image-Captioning-Bot"
                    class="btn btn-theme projects__btn-theme"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/Sar-thak-3/Image-Captioning-Bot"
                    class="btn btn-inv projects__btn-inv"
                  >
                    Code Link
                  </a>
                </div>
                <div class="projects__list-item-count">
                  <span class="projects__list-item-count-num"> 2 </span>
                  <span class="projects__list-item-count-line"> </span>
                  <span class="projects__list-item-count-end-dot"> </span>
                </div>
              </div>
              <div class="projects__list-item">
                <div class="projects__list-item-count">
                  <span class="projects__list-item-count-num"> 3 </span>
                  <span class="projects__list-item-count-line"> </span>
                  <span class="projects__list-item-count-end-dot"> </span>
                </div>
                <div class="projects__list-item-details">
                  {/* <div class="projects__list-item-img-cont">
                <img src="./assets/mock.png" alt="Project Image" class="projects__list-item-img" />
              </div> */}
                  <h3 class="heading-tertiary projects__list-item-heading-tertiary">
                    Anonymous
                  </h3>
                  <hr class="projects__title-text-divider" />

                  <p class="text-primary projects__list-item-text-primary">
                    <span>
                      <ul style={{ listStyle: "circle" }}>
                        <li>
                          Anonymously create an account, no email/phone number
                          required
                        </li>
                        <li>Anonymously like/share/comment posts</li>
                        <li>
                          Post your feelings/emotions as any other social media
                          just anonymously
                        </li>
                      </ul>
                    </span>
                    {/* <!-- <br />
                  <br /> --> */}
                    <span></span>
                  </p>
                  <a
                    href="https://github.com/Sar-thak-3/Anonymous"
                    class="btn btn-theme projects__btn-theme"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/Sar-thak-3/Anonymous"
                    class="btn btn-inv projects__btn-inv"
                  >
                    Code Link
                  </a>
                </div>
              </div>
              <div class="projects__list-item projects__list-item--inv">
                <div class="projects__list-item-details">
                  {/* <div class="projects__list-item-img-cont">
                <img src="./assets/mock.png" alt="Project Image" class="projects__list-item-img" />
              </div> */}
                  <h3 class="heading-tertiary projects__list-item-heading-tertiary">
                    Healdata
                  </h3>
                  <hr class="projects__title-text-divider" />

                  <p class="text-primary projects__list-item-text-primary">
                    <span>
                      Entire health data of every country, state, city under one
                      website. Plotly is used to plot the data of each each
                      place and each year to show the data in interactive way.
                      It shows the new diagnosed, recovered patients and total
                      diagnosed in the particular year/month of the particular
                      disease in the particular area.
                    </span>
                    {/* <!-- <br />
                  <br /> --> */}
                    <span></span>
                  </p>
                  <a
                    href="https://healdata.vercel.app/"
                    class="btn btn-theme projects__btn-theme"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/Sar-thak-3/Healdata"
                    class="btn btn-inv projects__btn-inv"
                  >
                    Code Link
                  </a>
                </div>
                <div class="projects__list-item-count">
                  <span class="projects__list-item-count-num"> 4 </span>
                  <span class="projects__list-item-count-line"> </span>
                  <span class="projects__list-item-count-end-dot"> </span>
                </div>
              </div>
              <div class="projects__list-item">
                <div class="projects__list-item-count">
                  <span class="projects__list-item-count-num"> 3 </span>
                  <span class="projects__list-item-count-line"> </span>
                  <span class="projects__list-item-count-end-dot"> </span>
                </div>
                <div class="projects__list-item-details">
                  {/* <div class="projects__list-item-img-cont">
                <img src="./assets/mock.png" alt="Project Image" class="projects__list-item-img" />
              </div> */}
                  <h3 class="heading-tertiary projects__list-item-heading-tertiary">
                    Covid Detection
                  </h3>
                  <hr class="projects__title-text-divider" />

                  <p class="text-primary projects__list-item-text-primary">
                    <span>
                      Covid Detection using Deep Learning model on X-ray images
                      of chest. Convolutional model is used to predict the
                      covid. Data is trained on 50k+ x-ray images and achieved
                      greated than 95.5% accuracy.
                    </span>
                    {/* <!-- <br />
                  <br /> --> */}
                    <span></span>
                  </p>
                  <a
                    href="https://github.com/Sar-thak-3/Covid-Detection"
                    class="btn btn-theme projects__btn-theme"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/Sar-thak-3/Covid-Detection"
                    class="btn btn-inv projects__btn-inv"
                  >
                    Code Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="contact main-section">
        <div class="main-container">
          <h2 class="heading-secondary">
            <span class="heading-secondary__sm"> Contact 📞</span>
            <span class="heading-secondary__main">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </span>
          </h2>
          <div class="main-section__content">
            <div class="contact__form-cont">
              <form class="contact__form">
                <div class="contact__form-field">
                  <label for="name" class="contact__form-field-label">
                    Name
                  </label>
                  <input
                    placeholder="Enter Your Name"
                    type="text"
                    class="contact__form-field-input"
                  />
                </div>
                <div class="contact__form-field">
                  <label for="name" class="contact__form-field-label">
                    Email
                  </label>
                  <input
                    placeholder="Enter Your Email"
                    type="text"
                    class="contact__form-field-input"
                  />
                </div>
                <div class="contact__form-field">
                  <label for="name" class="contact__form-field-label">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter Your Message"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    class="contact__form-field-input"
                  ></textarea>
                </div>
                <button type="submit" class="contact__form-submit">
                  Submit
                </button>
              </form>
              <div class="contact__form-visual"></div>
            </div>
          </div>
        </div>
      </section>
      <footer class="main-footer">
        <div class="main-footer__upper">
          <div class="main-container">
            <ul class="main-footer__links">
              <li class="main-footer__link">
                <a href="./index.html">Home</a>
              </li>
              <li class="main-footer__link">
                <a href="./index.html#about">About</a>
              </li>
              <li class="main-footer__link">
                <a href="./index.html#projects">Projects</a>
              </li>
              <li class="main-footer__link">
                <a href="./index.html#contact">Contact</a>
              </li>
            </ul>
            <div class="main-footer__mid-line"></div>
            <div class="main-footer__socials">
              <a
                href="https://github.com/Sar-thak-3"
                class="main-footer__social-link"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                  alt=""
                  class="main-footer__social-link-icon"
                />
              </a>
              <a href="#" class="main-footer__social-link">
                <i class="fa-brands fa-instagram"></i>
                {/* <img src="./assets/icons8-instagram-48.png" alt="" class="main-footer__social-link-icon" /> */}
              </a>
              <a href="#" class="main-footer__social-link">
                <img
                  src="./assets/icons8-twitter-50.png"
                  alt=""
                  class="main-footer__social-link-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sarthak-garg03/"
                class="main-footer__social-link"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                  alt=""
                  class="main-footer__social-link-icon"
                />
              </a>
              <a href="#" class="main-footer__social-link">
                <img
                  src="./assets/icons8-pinterest-64.png"
                  alt=""
                  class="main-footer__social-link-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="main-footer__bottom">
          <div class="main-container">
            <p class="main-footer__bottom-txt">
              {/* <!-- If you can give me some credits or shoutout here by linking to my website, then that will help me a lot :) --> */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Sar-thak-3/webport"
              >
                Webport
              </a>{" "}
              All rights reserved @ 2023
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
