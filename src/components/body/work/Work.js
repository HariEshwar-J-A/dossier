import React from "react";
import Separator from "../../common/separator/Separator";
import { WorkData, WorkCompanyData } from "../../data/work";
import styles from "./Work.module.scss";
import Workcard from "./workcard/Workcard";

const Work = () => {
  const data = WorkData;
  return (
    <div className={styles.work}>
      <Separator />
      <label className={"sectionTitle"}>Work</label>
      <div className={styles.workList}>
        {data.map((item, index) => (
          <Workcard key={index} work={item} companyData={WorkCompanyData}/>
        ))}
      </div>
    </div>
  );
};

export default Work;
