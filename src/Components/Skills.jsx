import React, { useEffect } from 'react';
import progressAnimation from '../Utils/progressAnimation';
import skillsData from '../Utils/skillsData';
import SkillComp from './SkillComp';

export default function Skills() {
  useEffect(() => {
    window.addEventListener('scroll', progressAnimation);
  }, []);
  return (
    <section id="skills" className="pt-5">
      <div className="container pt-3">
        <div>
          <h2 className="text-capitalize fw-bold commonBeforeTxt skills-txt">
            I'm Expert in these
          </h2>
        </div>

        <div className="my-row">
          {skillsData.map((data) => (
            <SkillComp key={data.id} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
}
