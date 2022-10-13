import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">A Little About Me...</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%", height: "1000px" }} alt="cover" />
      <div className="my-2">
        <p>
        I am a student at Rice University Coding Bootcamp and looking to start my career in Web Development. 
        I have a background in programming from when I was a kid. My dad taught at a vocational school and 
        programming was his forte. I would break games back when they ran on a Tandy 1000, TRS80, Apple, AppleII, 
        Commodor, etc. There was a mainframe in a room the size of a small house.
</p>
<p>
        I have always had in iterest in programming and have watched the internet grow from the earliest of years. 
        When I was in college I was on several BBSes, played online games, and did a little web design. I ventured in 
        another direction in the following years, but curiosity has pulled me back in, and my how the web has grown. 
        I look forward to being a part of shaping its future, as I am sure it will shape mine.
        </p>
      </div>
    </section>
  );
}

export default About;
