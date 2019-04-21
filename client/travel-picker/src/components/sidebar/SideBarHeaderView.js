import React, { Component } from "react";

export default class SideBarHeaderView extends Component {
  render() {
    return (
      <div>
        <div class="sidebar-header">
          <h3>TravelPicker</h3>
        </div>
        <div class="nalika-profile">
          <div class="profile-dtl">
            <h2>Follow Us</h2>
          </div>
          <div class="profile-social-dtl">
            <ul class="dtl-social">
              <li>
                <a href="#">
                  <i class="icon nalika-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon nalika-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon nalika-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
