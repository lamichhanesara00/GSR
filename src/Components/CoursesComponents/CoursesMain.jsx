import React from "react";

import CoursesHero from "./CoursesHero";
import CoursesDetails from "./CoursesDetails";
import CoursesStats from "./CoursesStats";
import JapanConsultancy from "./JapanConsultancy";

export default function CoursesMain() {
  return (
    <div>
      <CoursesHero />
      <JapanConsultancy />
      <CoursesStats />
      <CoursesDetails />
    </div>
  );
}
