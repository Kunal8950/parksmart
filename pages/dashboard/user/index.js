import React from "react";
import classes from "./user.module.css";
import Layout from "../../../component/Layout/Layout";

const DashboardUser = () => {
  return (
    <Layout>
      <section className={classes.Main}>
        <div className={classes.Left}>
          <div className={classes.Boxes}>
            <div className={classes.Box}>
              <div>45</div>
              <div>Role Requests</div>
              <div>
                <img src="../assets/asset.png" />
                <span>+14% This Month</span>
              </div>
            </div>

            <div className={classes.Box}>
              <div>60</div>
              <div>Report Form</div>
              <div>
                <img src="../assets/debt.png" />
                <span>-30% This Month</span>
              </div>
            </div>

            <div className={classes.Box}>
              <div>$54k</div>
              <div>Revenue</div>
              <div>
                <img src="../assets/asset.png" />
                <span>+14% This Month</span>
              </div>
            </div>
          </div>
          <div className={classes.Form}>
            <div className={classes.FormHeader}>Report Forms</div>

            <div className={classes.FormList}>
              <div className={classes.Grey}>REPORT TYPE</div>
              <div className={classes.Grey}>EMAIL</div>
              <div className={classes.Grey}>DATE/TIME</div>
              <div className={classes.Grey}>STATUS</div>
              <div className={classes.Grey}>ACTION</div>
            </div>
            <div className={classes.FormList}>
              <div>Reservation</div>
              <div>walker@gmail.com</div>
              <div>20 Sep, 4:44 PM</div>
              <div className={classes.StatusPending}>pending</div>
              <div className={classes.Action}>view info</div>
            </div>
            <div className={classes.FormList}>
              <div>Reservation</div>
              <div>walker@gmail.com</div>
              <div>20 Sep, 4:44 PM</div>
              <div className={classes.StatusReview}>in review</div>
              <div className={classes.Action}>view info</div>
            </div>
            <div className={classes.FormList}>
              <div>Reservation</div>
              <div>walker@gmail.com</div>
              <div>20 Sep, 4:44 PM</div>
              <div className={classes.StatusAccept}>accepted</div>
              <div className={classes.Action}>view info</div>
            </div>
            <div className={classes.FormList}>
              <div>Reservation</div>
              <div>walker@gmail.com</div>
              <div>20 Sep, 4:44 PM</div>
              <div className={classes.StatusResponse}>response</div>
              <div className={classes.Action}>view info</div>
            </div>
          </div>
        </div>
        <div className={classes.Right}>
          <div className={classes.StatHeader}>Reports Stats</div>
          <div className={classes.Stat}>
            <div className={classes.StatBoxes1}>
              <div className={classes.StatBox}>
                <div>60</div>
                <div>New user Revenue</div>
                <div>reports</div>
              </div>
              <div className={classes.StatBox}>
                <div>60</div>
                <div>New user Revenue</div>
                <div>reports</div>
              </div>
            </div>
            <div className={classes.StatBoxes2}>
              <div className={classes.StatBox}>
                <div>60</div>
                <div>New user Revenue</div>
                <div>reports</div>
              </div>
              <div className={classes.StatBox}>
                <div>60</div>
                <div>New user Revenue</div>
                <div>reports</div>
              </div>
            </div>
          
          <div className={classes.StatFooter}>
            <div>56</div>
            <div>New parking lots created</div>
            <div>
              <img src="../assets/arrow.png" />
            </div>
          </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DashboardUser;
