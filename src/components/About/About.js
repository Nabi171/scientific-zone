import React from 'react';
import img from '../About/Logi.png';
import img2 from '../About/ami.png';
const About = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 p-5 shadow'>
                    <h6>INTRO</h6>
                    <hr />
                    <img src={img2} className='rounded-circle' alt="" />
                    <br />
                    <span className='fw-bolder text-danger'>INTRODUCTION</span><br /> <hr />
                    Name:Md Nabiul <br />
                    Education Qualification:Mathemaics(cu)
                    <br /> <hr />


                </div>
                <div className='col-lg-6 col-md-12  col-sm-12 border shadow p-5'>
                    <span className='fw-bolder text-danger'>FUTURE GOAL</span><br /> <hr />
                    My goal is to be a complete web developer.I have worked to reach my goal,basically i am i Chittagong University in the department of mathematics.I wanted to do something beside my study,so be a web developer will create a another identity,Thats why i used to make coding daily 8 to 10 hours in my daily routine to acheive my goal.That was quite difficulties to come this point to make code from joint family, that day i never forget when my mother got hospitalized but i had make continue my coding with handling my mother situation.But by the almighty allah,i successfully handle the both situation.Thats all from me.Keep me in your prayers as i can achieve my goal.
           </div>
            </div>
        </div>
    );
};

export default About;